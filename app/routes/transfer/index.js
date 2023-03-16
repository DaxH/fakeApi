const { bankList, typeAccountList } = require('../catalog')

const router = require('express').Router()

const detailsMovements = [
	{
		id: 1,
		dateOperation: '12/Nov/2022',
		hour: '12:45',
		nameAccount: 'Jonathan Ricardo Tillaguango Jiménez',
		numberAccount: '212121212121',
		idNumber: 11060708090,
		accountType: 'Ahorro',
		nameBeneficiary: 'Dax',
		numberBeneficiary: '4040767687119090',
		idNumberBeneficiary: 11070070512,
		accountTypeBeneficiary: 'Ahorro',
		typeTranssaction: 'C',
		comision: 0.40,
		value: 20,
		concept: 'Pago de servicios',
		referencia: 'Se realizo un pago por servicios profesionales'
	},
	{
		id: 2,
		dateOperation: '13/Nov/2022',
		hour: '20:45',
		nameAccount: 'Jonathan Ricardo Tillaguango Jiménez',
		numberAccount: '212121212121',
		idNumber: 11060708090,
		accountType: 'Ahorro',
		nameBeneficiary: 'Dax',
		numberBeneficiary: '4040767687118880',
		idNumberBeneficiary: 11070070512,
		accountTypeBeneficiary: 'Ahorro',
		typeTranssaction: 'D',
		comision: 0.40,
		value: 20,
		concept: 'Pago de servicios',
		referencia: 'Se realizo un pago por servicios profesionales'
	},
	{
		id: 3,
		dateOperation: '14/Nov/2022',
		hour: '19:45',
		nameAccount: 'Jonathan Ricardo Tillaguango Jiménez',
		numberAccount: '212121212121',
		idNumber: 11060708090,
		accountType: 'Ahorro',
		nameBeneficiary: 'Dax',
		numberBeneficiary: '4040767687118880',
		idNumberBeneficiary: 4040767687119090,
		accountTypeBeneficiary: 'Ahorro',
		typeTranssaction: 'D',
		comision: 0.40,
		value: 20,
		concept: 'Pago de servicios',
		referencia: 'Se realizo un pago por servicios profesionales'
	},
	{
		id: 4,
		dateOperation: '16/Nov/2022',
		hour: '16:45',
		nameAccount: 'Jonathan Ricardo Tillaguango Jiménez',
		numberAccount: '212121212121',
		idNumber: 11060708090,
		accountType: 'Ahorro',
		nameBeneficiary: 'Dax',
		numberBeneficiary: '4040767687118880',
		idNumberBeneficiary: 4040767687117090,
		accountTypeBeneficiary: 'Ahorro',
		typeTranssaction: 'C',
		comision: 0.40,
		value: 200,
		concept: 'Pago de servicios',
		referencia: 'Se realizo un pago por servicios profesionales'
	},
	{
		id: 5,
		dateOperation: '12/Nov/2022',
		hour: '12:45',
		nameAccount: 'Jonathan Ricardo Tillaguango Jiménez',
		numberAccount: '212121212121',
		idNumber: 11060708090,
		accountType: 'Ahorro',
		nameBeneficiary: 'Dax',
		numberBeneficiary: '4040767687118880',
		idNumberBeneficiary: 4040767687110090,
		accountTypeBeneficiary: 'Ahorro',
		typeTranssaction: ' C',
		comision: 0.40,
		value: 20,
		concept: 'Anticipo',
		referencia: 'Se realizo un pago por servicios profesionales'
	},
	{
		id: 6,
		dateOperation: '12/Nov/2022',
		hour: '02:45',
		nameAccount: 'Jonathan Ricardo Tillaguango Jiménez',
		numberAccount: '212121212121',
		idNumber: 11060708090,
		accountType: 'Ahorro',
		nameBeneficiary: 'Dax',
		numberBeneficiary: '4040767687118880',
		idNumberBeneficiary: 4040767687110090,
		accountTypeBeneficiary: 'Ahorro',
		typeTranssaction: 'D',
		comision: 0.40,
		value: 100,
		concept: 'Pago PC',
		referencia: 'Se realizo un pago por servicios profesionales'
	},
]

router.post('/getMyAccounts', (req, res) => {
	res.json({
		success: true,
		data: {
			accounts: [
				{
					id: 1,
					beneficiary: "Dax",
					account: "4040767687",
					balance: 400,
					type: "AH",
				},
				{
					id: 2,
					beneficiary: "Dax",
					account: "4141872182",
					balance: 100,
					type: "AH",
				},
				{
					id: 3,
					beneficiary: "Dax",
					account: "2904898935",
					balance: 20000,
					type: "AH",
				},
				{
					id: 4,
					beneficiary: "Dax",
					account: "9098898978",
					balance: 0,
					type: "AH",
				},
			]
		},
		message: null
	})
})

router.post('/getAccountsInternal', (req, res) => {
	res.json({
		success: true,
		data: {
			accounts: [
				{
					id: 1,
					beneficiary: "Xavier",
					account: "4000101010",
					email: 'xavier@gmail.com',
					ci: '9098822121',
					typeAccount: { ...typeAccountList[0] },
				},
				{
					id: 2,
					beneficiary: "Juan",
					account: "4000987878",
					email: 'juean@gmail.com',
					ci: '8878121212',
					typeAccount: { ...typeAccountList[0] },
				},
				{
					id: 3,
					beneficiary: "Pedro",
					account: "4000879552",
					email: 'pedro@gmail.com',
					ci: '9887761221',
					typeAccount: { ...typeAccountList[0] },
				},
				{
					id: 4,
					beneficiary: "Luis",
					account: "4008976900",
					email: 'luis@gmail.com',
					ci: '7655551212',
					typeAccount: { ...typeAccountList[1] },
				},

			]
		},
		message: null
	})
})

router.post('/getAccountsInterbank', (req, res) => {
	res.json({
		success: true,
		data: {
			accounts: [
				{
					id: 1,
					beneficiary: "Dario Gonzalez",
					account: "4040767687",
					ci: '1105936882',
					bank: { ...bankList[11] },
					email: "dax@gmail.com",
					typeAccount: { ...typeAccountList[1] },
				},
				{
					id: 2,
					beneficiary: "Juan",
					account: "4141872182",
					ci: '1108989912',
					bank: { ...bankList[0] },
					email: "juan@gmail.com",
					typeAccount: { ...typeAccountList[0] },
				},
				{
					id: 3,
					beneficiary: "Maria",
					account: "2904898935",
					ci: '0709898121',
					bank: { ...bankList[3] },
					email: "maria@gmail.com",
					typeAccount: { ...typeAccountList[0] },
				},
				{
					id: 4,
					beneficiary: "Antonio",
					account: "9098898978",
					ci: '1118788121',
					bank: { ...bankList[7] },
					email: "",
					typeAccount: { ...typeAccountList[0] },
				},
			]
		},
		message: null
	})
})

router.post('/validateTransfer', (req, res) => {

	res.json({
		success: true,
		data: {
			chargeTransfer: 0.0
		},
		message: ''
	})
})

router.post('/addTransfer', (req, res) => {

	const { otp } = req.body
	if (otp === '123456') {
		res.json({
			success: true,
			data: {
				nTransfer: '9867671',
				chargeTransfer: 0.0
			},
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

router.post('/getVoucher', (req, res) => {
	const { id } = req.body
	if (id) {
		const data = detailsMovements.filter(data => id === data.id)
		res.json({
			success: true,
			data: { detail: data[0] },
			message: 'Datos obtenidos correctamente!'
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