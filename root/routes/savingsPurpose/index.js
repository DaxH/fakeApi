const router = require('express').Router()
const path = require('path')
const moment = require('moment')
const getFile = require('../../utils/functions')


/**
 * @swagger
 * /api/savingsPurpose/getInitialData:
 *   post:
 *     summary: Obtener parámetros
 *     tags: [Ahorro propósito]
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
 *                            example: 20
 *                          maxAmount:
 *                            type: number
 *                            example: 50000
 *                          minMonths:
 *                            type: number
 *                            example: 6
 *                          maxMonths:
 *                            type: number
 *                            example: 36
 *                          minDayDebit:
 *                            type: number
 *                            example: 1
 *                          maxDayDebit:
 *                            type: number
 *                            example: 25
 *                      typeSaving:
 *                        type: array
 *                        items:
 *                          properties:
 *                            id:
 *                              type: string
 *                              example: "monthlySaving"
 *                            label:
 *                              type: string
 *                              example: "Ahorro mensual"
 *                            icon:
 *                              type: string
 *                              example: "material-symbols:calendar-clock-outline"
 *                 message:
 *                   type: string
 *                   example: ""
*/
router.post('/getInitialData', (req, res) => {

	res.json({
		success: 'COD_OK',
		data: {
			amount: {
				minAmount: 20,
				maxAmount: 50000,
				minMonths: 6,
				maxMonths: 36,
				minDayDebit: 1,
				maxDayDebit: 25
			},
			typeSaving: [
				{
					id: 'monthlySaving',
					label: 'Ahorro mensual',
					icon: 'material-symbols:calendar-clock-outline'
				},
				{
					id: 'expectedSaving',
					label: 'Ahorro esperado',
					icon: 'f7:money-dollar'
				}
			]
		},
		message: ''
	})
})

/**
 * @swagger
 * /api/savingsPurpose/simulate:
 *   post:
 *     summary: Simular ahorro propósito
 *     tags: [Ahorro propósito]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 20
 *               term:
 *                 type: number
 *                 example: 6
 *               dayDebit:
 *                 type: number
 *                 example: 1
 *               option:
 *                 type: string
 *                 example: "monthlySaving"
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
 *                        type: string
 *                        example: "6.00"
 *                      detailPayment:
 *                        type: array
 *                        items:
 *                          properties:
 *                            period:
 *                              type: number
 *                              example: 1
 *                            interest:
 *                              type: number
 *                              example: 6
 *                            nextDateDebit:
 *                              type: string
 *                              example: "2025-03-012025-03-01"
 *                            accumulatedSavings:
 *                              type: string
 *                              example: "20.00"
 *                            interestMont:
 *                              type: string
 *                              example: "0.10"
 *                            totalSaving:
 *                              type: string
 *                              example: "20.10"
 *                      dateDebit:
 *                        type: string
 *                        example: "2025-03-01"
 *                      totalSaving:
 *                        type: string
 *                        example: "122.12"
 *                      totalInterest:
 *                        type: string
 *                        example: "2.12"
 *                      expirationDate:
 *                        type: string
 *                        example: "2025-08-01"
 *                 message:
 *                   type: string
 *                   example: ""
 */
router.post('/simulate', (req, res) => {

	const { amount: amountBody, term: termBody, dayDebit: dayDebitBody, option } = req.body
	const dayNow = moment().format('DD')
	const dayDebit = Number(dayNow) < Number(dayDebitBody) ? moment() : moment().add(1, 'month')
	const dateDebit = dayDebit.set('date', dayDebitBody)

	const nexDebit = moment(dateDebit).subtract(1, 'month')

	const TEA = 6
	const TEM = TEA / 100 / 12

	const amount = Number(amountBody)
	const term = Number(termBody)

	const detailPayment = []

	let totalSaving = 0
	let totalInterest = 0

	let accumulatedSavings = 0
	let interestMont = 0
	let nextDateDebit = nexDebit


	if (option === 'monthlySaving') {
		for (let i = 0; i < term; i++) {

			accumulatedSavings = amount + totalSaving

			interestMont = accumulatedSavings * TEM

			totalInterest += interestMont

			totalSaving += amount + interestMont

			nextDateDebit = nextDateDebit.add(1, 'month')

			detailPayment.push({
				period: i + 1,
				interest: TEA,
				nextDateDebit: nextDateDebit.format('YYYY-MM-DD'),
				accumulatedSavings: accumulatedSavings.toFixed(2),
				interestMont: interestMont.toFixed(2),
				totalSaving: totalSaving.toFixed(2)
			})
		}
		return res.json({
			success: 'COD_OK',
			data: {
				tea: TEA.toFixed(2),
				detailPayment,
				dateDebit: dateDebit.format('YYYY-MM-DD'),
				totalSaving: totalSaving.toFixed(2),
				totalInterest: totalInterest.toFixed(2),
				expirationDate: detailPayment[detailPayment.length - 1].nextDateDebit
			},
			message: ''
		})
	}

	const amountMont = amount / term

	for (let i = 0; i < term; i++) {
		accumulatedSavings = amountMont + totalSaving

		interestMont = accumulatedSavings * TEM

		totalInterest += interestMont

		totalSaving += amountMont + interestMont

		nextDateDebit = nextDateDebit.add(1, 'month')

		detailPayment.push({
			period: i + 1,
			interest: TEA,
			nextDateDebit: nextDateDebit.format('YYYY-MM-DD'),
			accumulatedSavings: accumulatedSavings.toFixed(2),
			interestMont: interestMont.toFixed(2),
			totalSaving: totalSaving.toFixed(2)
		})
	}


	res.json({
		success: 'COD_OK',
		data: {
			tea: TEA.toFixed(2),
			detailPayment,
			dateDebit: dateDebit.format('YYYY-MM-DD'),
			totalSaving: totalSaving.toFixed(2),
			totalInterest: totalInterest.toFixed(2),
			amountDebit: amountMont.toFixed(2),
			expirationDate: detailPayment[detailPayment.length - 1].nextDateDebit
		},
		message: ''
	})
})


router.post('/getContract', async (req, res) => {

	const filePath = path.join(__dirname, '../../public/savingsPurpose/contract/contract.pdf');
	const base64File = await getFile({ path: filePath })

	res.json({
		success: 'COD_OK',
		data: {
			contract: base64File
		},
		message: ''
	})
})


router.post('/addSaving', async (req, res) => {

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
