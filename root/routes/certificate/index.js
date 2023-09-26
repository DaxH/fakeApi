const router = require('express').Router()
const path = require('path')
const getFile = require('../../utils/functions')

const IVA = 0.12
const COST = 0.54

const typeCertificate = [
	{
		id: 1,
		description: 'CUENTA ACTIVA/APERTURA DE CUENTA',
		cost: COST,
		iva: (IVA * COST).toFixed(2),
		account: true
	},
	{
		id: 2,
		description: 'PROMEDIOS TRIMESTRALES',
		cost: COST,
		iva: (IVA * COST).toFixed(2),
		account: true
	},
	{
		id: 3,
		description: 'PROMEDIOS SEMESTRALES',
		cost: COST,
		iva: (IVA * COST).toFixed(2),
		account: true
	},
	{
		id: 4,
		description: 'CRÉDITOS/TARJETA VISA VIGENTES',
		cost: COST,
		iva: (IVA * COST).toFixed(2),
		account: false
	},
	{
		id: 5,
		description: 'HISTÓRICO DE CRÉDITOS',
		cost: COST,
		iva: (IVA * COST).toFixed(2),
		account: false
	},
	{
		id: 6,
		description: 'PÓLIZA WEB',
		cost: 0.0,
		iva: 0.0,
		account: false
	},
]

router.post('/getInitialData', (req, res) => {
	res.json({
		data: {
			typeCertificate
		},
		success: true,
		message: ''
	})
})
router.post('/addCertificate', async (req, res) => {
	
	const { otp } = req.body

	if (otp === '151617') {

		const filePath = path.join(__dirname, '../../public/certificate/certificate/certificate.pdf');
		const base64File = await getFile({ path: filePath })

		res.json({
			success: true,
			data: {
				base64File
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