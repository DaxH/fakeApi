const router = require('express').Router()
const path = require('path')
const getFile = require('../../utils/functions')


const quotas = [
	{
		id: 1,
		description: 'CUOTA FIJA'
	},
	{
		id: 2,
		description: 'CUOTA VARIABLE'
	}
]



router.post('/getInitialData', (req, res) => {

	res.json({
		success: true,
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

	if (quota === 'CUOTA FIJA') {

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
		success: true,
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
		success: true,
		data: {
			contract: base64File
		},
		message: ''
	})
})

router.post('/addCredit', async (req, res) => {

	const { otp } = req.body
	if (otp === '151617') {
		res.json({
			success: true,
			data: {
				nDocument: '091231991'
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
