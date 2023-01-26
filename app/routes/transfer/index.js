const router = require('express').Router()

router.post('/getMyAccounts', (req, res) => {
	res.json({
		success: true,
		data: {
			accounts: [
				{
					id: 1,
					beneficiary: "Dax",
					account: "4040767687119090",
					balance: 400,
					type: "AH",
				},
				{
					id: 2,
					beneficiary: "Dax",
					account: "4141872182718781",
					balance: 100,
					type: "AH",
				},
				{
					id: 3,
					beneficiary: "Dax",
					account: "2904898935319878",
					balance: 20000,
					type: "AH",
				},
				{
					id: 4,
					beneficiary: "Dax",
					account: "9098898978772134",
					balance: 0,
					type: "AH",
				},
			]
		},
		message: null
	})
})
router.post('/getAccountsInter', (req, res) => {
	res.json({
		success: true,
		data: {
			accounts: [
				{
					id: 1,
					beneficiary: "Xavier",
					account: "4040767687119090",
					type: "AH",
				},
				{
					id: 2,
					beneficiary: "Juan",
					account: "4141872182718781",
					type: "AH",
				},
				{
					id: 3,
					beneficiary: "Pedro",
					account: "2904898935319878",
					type: "AH",
				},
				{
					id: 4,
					beneficiary: "Luis",
					account: "9098898978772134",
					type: "AH",
				},

			]
		},
		message: null
	})
})

router.post('/addTransfer', (req, res) => {

	const { otp } = req.body
	if (otp === '123456') {
		res.json({
			success: true,
			data: {},
			message: 'Transferencia realizada con éxito'
		})
	} else {
		res.json({
			success: false,
			data: {},
			message: 'Código otp incorrecto'
		})
	}
})

module.exports = router