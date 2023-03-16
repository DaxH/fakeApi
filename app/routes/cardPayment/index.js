const { bankList } = require('../catalog')

const router = require('express').Router()

router.post('/getAccountsCard', (req, res) => {
	res.json({
		success: true,
		data: {
			accounts: [
				{
					id: 1,
					beneficiary: 'Xavier',
					number: '4005580000000040',
					email: 'xavier@gmail.com',
					ci: '9098822121',
					alias: 'mia',
					bank: { ...bankList[11] },
					typeCard: {
						id: 1,
						description: 'VISA',
						acronym: 'visa'
					},
				},
				{
					id: 2,
					beneficiary: 'Julio',
					number: '370000000000002',
					email: 'julio@gmail.com',
					ci: '8878121212',
					alias: 'JULIO',
					bank: { ...bankList[2] },
					typeCard: {
						id: 2,
						description: 'AMERICAN EXPRESS',
						acronym: 'american-express'
					},
				},
				{
					id: 3,
					beneficiary: 'Paula',
					number: '36018623456787',
					email: 'paula@gmail.com',
					ci: '8912397894',
					alias: 'PAULA',
					bank: { ...bankList[5] },
					typeCard: {
						id: 3,
						description: 'DINERS CLUB',
						acronym: 'diners-club'
					},
				},
				{
					id: 4,
					beneficiary: 'Tomás',
					number: '6440072748131186',
					email: 'tomas@gmail.com',
					ci: '7655551212',
					alias: 'TOMAS',
					bank: { ...bankList[8] },
					typeCard: {
						id: 4,
						description: 'DISCOVER',
						acronym: 'discover'
					},
				},
				{
					id: 5,
					beneficiary: 'Daniela',
					number: '5424000000000015',
					email: 'daniela@gmail.com',
					ci: '7655551212',
					alias: 'DANIELA',
					bank: { ...bankList[0] },
					typeCard: {
						id: 5,
						description: 'MASTERCARD',
						acronym: 'mastercard'
					},
				}
			]
		},
		message: null
	})
})

router.post('/validatePay', (req, res) => {

	res.json({
		success: true,
		data: {
			chargePay: 0.0
		},
		message: ''
	})
})

router.post('/addPay', (req, res) => {

	const { otp } = req.body
	if (otp === '123456') {
		res.json({
			success: true,
			data: {
				nPay: '9867671',
				chargePay: 0.0
			},
			message: 'Pago realizado con éxito'
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