const router = require('express').Router()

const typeAccountList = [
	{
		id: 1,
		description: 'CUENTA AHORROS',
		acronym: 'AH'
	},
	{
		id: 2,
		description: 'CUENTA CORRIENTE',
		acronym: 'CO'
	}
]

const bankList = [
	{
		id: 1,
		description: 'Banco Pichincha',
		isDirectPayment: true
	},
	{
		id: 2,
		description: 'Banco del Pacífico',
		isDirectPayment: true
	},
	{
		id: 3,
		description: 'Produbanco',
		isDirectPayment: false
	},
	{
		id: 4,
		description: 'Banco de Guayaquil',
		isDirectPayment: true
	},
	{
		id: 5,
		description: 'Banco Internacional',
		isDirectPayment: true
	},
	{
		id: 6,
		description: 'Banco Bolivariano',
		isDirectPayment: false
	},
	{
		id: 7,
		description: 'Banco del Austro',
		isDirectPayment: false
	},
	{
		id: 8,
		description: 'Citibank',
		isDirectPayment: false
	},
	{
		id: 9,
		description: 'Biess',
		isDirectPayment: true
	},
	{
		id: 10,
		description: 'Banco de Desarrollo del Ecuador',
		isDirectPayment: true
	},
	{
		id: 11,
		description: 'Banco General Rumiñahui',
		isDirectPayment: false
	},
	{
		id: 12,
		description: 'Banco de Loja',
		isDirectPayment: true
	},
	{
		id: 13,
		description: 'Banco Amazonas',
		isDirectPayment: true
	},
	{
		id: 14,
		description: 'Banco de Machala',
		isDirectPayment: false
	},
	{
		id: 15,
		description: 'Banco Solidario',
		isDirectPayment: true
	}
]

router.post('', (req, res) => {
	const { type } = req.body
	if (type) {
		res.json({
			success: true,
			data: {
				...(type === 'BANKS' && { bankList }),
				...(type === 'TYPE_ACCOUNT' && { typeAccountList })
			},
			message: ''
		})
	} else {
		res.json({
			success: false,
			data: {},
			message: 'Tipo requerido'
		})

	}
})

module.exports = {
	router,
	typeAccountList,
	bankList
}