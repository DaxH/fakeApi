const router = require('express').Router()
const path = require('path')
const getFile = require('../../utils/functions')


const quotas = [
	{
		id: 1,
		description: 'TABLA AMORTIZACIÓN FRANCESA'
	},
	{
		id: 2,
		description: 'TABLA AMORTIZACIÓN ALEMANA'
	}
]


/**
 * @swagger
 * /api/credit/getInitialData:
 *   post:
 *     summary: Obtener parámetros
 *     tags: [Crédito]
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: string
 *                    example: "COD_OK"
 *                 data:
 *                    type: object
 *                    properties:
 *                      amount:
 *                        type: object
 *                        properties:
 *                          minAmount:
 *                            type: number
 *                            example: 2000
 *                          maxAmount:
 *                            type: number
 *                            example: 100000
 *                          minMonths:
 *                            type: number
 *                            example: 12
 *                          maxMonths:
 *                            type: number
 *                            example: 84
 *                          minDayDebit:
 *                            type: number
 *                            example: 1
 *                          maxDayDebit:
 *                            type: number
 *                            example: 25
 *                      quotas:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            id:
 *                             type: number
 *                             example: 1
 *                            description:
 *                             type: string
 *                             example: "TABLA AMORTIZACIÓN FRANCESA"
 *                 message:
 *                   type: string
 *                   example: ""
*/
router.post('/getInitialData', (req, res) => {

	res.json({
		success: 'COD_OK',
		data: {
			amount: {
				minAmount: 2000,
				maxAmount: 100000,
				minMonths: 12,
				maxMonths: 84,
				minDayDebit: 1,
				maxDayDebit: 25
			},
			quotas
		},
		message: ''
	})
})

/**
 * @swagger
 * /api/credit/simulate:
 *   post:
 *     summary: Simular crédito
 *     tags: [Crédito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quota:
 *                 type: string
 *                 example: "TABLA AMORTIZACIÓN FRANCESA"
 *               amount:
 *                 type: number
 *                 example: 2000
 *               term:
 *                 type: number
 *                 example: 12
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                    type: string
 *                    example: "COD_OK"
 *                 data:
 *                    type: object
 *                    properties:
 *                      tea:
 *                        type: number
 *                        example: 14.5
 *                      totalInsurance:
 *                        type: string
 *                        example: "3.43"
 *                      insurance:
 *                        type: number
 *                        example: 0.31
 *                      amortization:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            period:
 *                             type: number
 *                             example: 1
 *                            interest:
 *                              type: string
 *                              example: "23.58"
 *                            capital:
 *                              type: string
 *                              example: "156.13"
 *                            balance:
 *                              type: string
 *                              example: "1843.87"
 *                            insurance:
 *                              type: string
 *                              example: "0.52"
 *                            quotaTotal:
 *                              type: string
 *                              quotaTotal: "180.23"
 *                 message:
 *                   type: string
 *                   example: ""
 */
router.post('/simulate', (req, res) => {

	const { quota, amount: amountBody, term: termBody } = req.body

	const TEA = 14.15
	const TEM = TEA / 100 / 12

	const amount = Number(amountBody)
	const term = Number(termBody)

	const insurance = 0.31
	// const TEA = 12

	const amortization = []

	let totalCredit = 0
	let totalInsurance = 0

	if (quota === 'TABLA AMORTIZACIÓN FRANCESA') {

		const monthlyPayment = amount * TEM / (1 - Math.pow(1 / (1 + TEM), term));
		let balance = amount
		for (let i = 0; i < term; i++) {

			const interest = balance * TEM
			const capital = monthlyPayment - interest
			const insuranceMonth = (balance * ((insurance / 100) / 12))
			totalInsurance += insuranceMonth
			const quotaTotal = capital + interest + insuranceMonth
			totalCredit += quotaTotal + insuranceMonth

			balance -= capital

			amortization.push({
				period: i + 1,
				interest: interest.toFixed(2),
				capital: capital.toFixed(2),
				balance: balance.toFixed(2),
				insurance: insuranceMonth.toFixed(2),
				quotaTotal: quotaTotal.toFixed(2)
			})
		}

	} else {

		const monthlyPayment = amount / term
		let balance = amount

		for (let i = 0; i < term; i++) {

			const interest = balance * TEM;
			const capital = monthlyPayment;
			const insuranceMonth = (balance * ((insurance / 100) / 12))
			totalInsurance += insuranceMonth
			const quotaTotal = capital + interest + insuranceMonth
			totalCredit += quotaTotal + insuranceMonth

			balance -= capital;

			amortization.push({
				period: i + 1,
				interest: interest.toFixed(2),
				capital: capital.toFixed(2),
				balance: balance.toFixed(2),
				insurance: insuranceMonth.toFixed(2),
				quotaTotal: quotaTotal.toFixed(2),

			});
		}
	}


	res.json({
		success: 'COD_OK',
		data: {
			tea: TEA,
			totalInsurance: totalInsurance.toFixed(2),
			insurance,
			amortization,
			totalCredit: totalCredit.toFixed(2),
		},
		message: ''
	})
})

router.post('/getContract', async (req, res) => {

	const filePath = path.join(__dirname, '../../public/credit/contract/contract.pdf');
	const base64File = await getFile({ path: filePath })

	res.json({
		success: 'COD_OK',
		data: {
			contract: base64File
		},
		message: ''
	})
})

router.post('/addCredit', async (req, res) => {
	const { otp } = req.body

	if (!otp) {
		return res.json({
			success: 'COD_ERR',
			data: {},
			message: 'Código OTP no existe'
		})
	}

	res.json({
		success: 'COD_OK',
		data: {},
		message: ''
	})
})

module.exports = router
