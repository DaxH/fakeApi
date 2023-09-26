const router = require('express').Router()
const path = require('path')
const moment = require('moment')
const getFile = require('../../utils/functions')

router.post('/getInitialData', (req, res) => {

	res.json({
		success: true,
		data: {
			amount: {
				minAmount: 20,
				maxAmount: 50000,
				minMonths: 6,
				maxMonths: 36,
				minDayDebit: 1,
				maxDayDebit: 25
			},
		},
		message: ''
	})
})
router.post('/simulate', (req, res) => {

	const { amount: amountBody, term: termBody, dayDebit: dayDebitBody } = req.body

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


	res.json({
		success: true,
		data: {
			tea: TEA.toFixed(2),
			detailPayment,
			dateDebit: dateDebit.format('YYYY-MM-DD'),
			totalSaving: totalSaving.toFixed(2),
			totalInterest: totalInterest.toFixed(2)
		},
		message: ''
	})
})


router.post('/getContract', async (req, res) => {

	const filePath = path.join(__dirname, '../../public/savingsPurpose/contract/contract.pdf');
	const base64File = await getFile({ path: filePath })

	res.json({
		success: true,
		data: {
			contract: base64File
		},
		message: ''
	})
})


router.post('/addSaving', async (req, res) => {

	const { otp } = req.body
	if (otp === '151617') {
		res.json({
			success: true,
			data: {
				nDocument: '9867671'
			},
			message: ''
		})
	} else {
		res.json({
			success: false,
			data: {},
			message: 'Código OTP incorrecto'
		})
	}
})



module.exports = router
