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