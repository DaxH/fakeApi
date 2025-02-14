const router = require('express').Router()
const moment = require('moment')
const path = require('path')
const getFile = require('../../utils/functions')

const policyArray = [
	'200,99999999,30,60,4.92',
	'200,99999999,61,90,7.00',
	'200,99999999,91,120,7.50',
	'200,99999999,121,180,8.25',
	'200,99999999,181,360,8.70',
	'200,99999999,361,99999,9.50'
]

const interestPayments = [
	{
		id: 1,
		description: 'AL VENCIMIENTO'
	},
	{
		id: 2,
		description: 'MENSUAL'
	}
]

/**
 * @swagger
 * /api/policy/getInitialData:
 *   post:
 *     summary: Obtener parámetros
 *     tags: [Póliza]
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
 *                            example: 200
 *                          maxAmount:
 *                            type: number
 *                            example: 50000
 *                          minDays:
 *                            type: number
 *                            example: 31
 *                          maxDays:
 *                            type: number
 *                            example: 400
 *                      interestPayments:
 *                        type: array
 *                        items:
 *                          type: object
 *                          properties:
 *                            id:
 *                              type: string
 *                              example: "AL VENCIMIENTO"
 *                 message:
 *                   type: string
 *                   example: ""
*/
router.post('/getInitialData', (req, res) => {

	res.json({
		success: 'COD_OK',
		data: {
			amount: {
				minAmount: 200,
				maxAmount: 50000,
				minDays: 31,
				maxDays: 400
			},
			// retention: 2,
			interestPayments
		},
		message: ''
	})
})

/**
 * @swagger
 * /api/policy/simulate:
 *   post:
 *     summary: Simular póliza
 *     tags: [Póliza]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               payment:
 *                 type: string
 *                 example: "AL VENCIMIENTO"
 *               amount:
 *                 type: number
 *                 example: 200
 *               term:
 *                 type: number
 *                 example: 31
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
 *                      annualInterest:
 *                        type: string
 *                        example: "4.92"
 *                      expirationDate:
 *                        type: string
 *                        example: "16/Mar/2025"
 *                      interestValue:
 *                        type: string
 *                        example: "0.84"
 *                      amountTotal:
 *                        type: string
 *                        example: "200.84"
 *                 message:
 *                   type: string
 *                   example: ""
 */
router.post('/simulate', (req, res) => {
	const { amount, term } = req.body
	if (amount && term) {

		const amountBody = Number(amount)
		const termBody = Number(term)
		let annualInterest = 0

		const now = moment()
		const expirationDate = now.add(termBody, 'days').format('DD/MMM/YYYY')

		policyArray.forEach((policy) => {
			const value = policy.split(',')
			if ((amountBody >= Number(value[0])) && (amountBody <= Number(value[1])) && (termBody >= Number(value[2])) && (termBody <= Number(value[3]))) {
				annualInterest = value[4]
			}
		})
		const interestValue = amountBody * annualInterest * termBody / 36500;

		const amountTotal = amountBody + interestValue - 0

		res.json({
			success: 'COD_OK',
			data: {
				annualInterest,
				expirationDate,
				interestValue: interestValue.toFixed(2),
				amountTotal: amountTotal.toFixed(2)
			},
			message: ''
		})
	} else {
		res.json({
			success: 'COD_ERR',
			data: {},
			message: 'Ha ocurrido un error, por favor inténtalo de nuevo más tarde.'
		})
	}
})

router.post('/getContract', async (req, res) => {

	const filePath = path.join(__dirname, '../../public/policy/contract/contract.pdf');
	const base64File = await getFile({ path: filePath })

	res.json({
		success: 'COD_OK',
		data: {
			contract: base64File
		},
		message: ''
	})
})

router.post('/addPolicy', async (req, res) => {

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