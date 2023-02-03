const router = require('express').Router()

const savedServicesObject = {
	1: [
		{
			id: 1,
			alias: 'CASA'
		},
		{
			id: 10,
			alias: 'CASA B'
		},
	],
	7: [
		{
			id: 2,
			alias: 'CASA'
		},
	],
	8: [
		{
			id: 3,
			alias: 'CASA'
		}
	],
	9: [
		{
			id: 4,
			alias: 'CASA'
		}
	],
	10: [
		{
			id: 5,
			alias: 'XGD'
		},
		{
			id: 6,
			alias: 'XAVIDAX'
		}
	],
	11: [
		{
			id: 7,
			alias: 'LOREM'
		}
	],
	12: [
		{
			id: 8,
			alias: 'LOREM'
		}
	],
	13: [
		{
			id: 9,
			alias: 'LOREM'
		}
	]
}
const debtService = {
	1: [
		{
			id: 1,
			nameBeneficiary: 'Dario Gonzalez',
			amount: 10,
			codeService: 'P901312',
			detail: 'Agua',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		},
	],
	10: [
		{
			id: 2,
			nameBeneficiary: 'Dario Gonzalez',
			amount: 15,
			codeService: 'P9787812',
			detail: 'Agua',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		}
	],
	2: [
		{
			id: 3,
			nameBeneficiary: 'Dario Gonzalez',
			amount: 5,
			codeService: 'Y1239124',
			detail: 'Teléfono celular',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		},
		{
			id: 4,
			nameBeneficiary: 'Dario Gonzalez',
			amount: 6,
			codeService: 'TC24312584',
			detail: 'Convencional',
			date: '20-01-2023',
			chargeService: 0.10,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		},
	],
	3: [
		{
			id: 5,
			nameBeneficiary: 'Xavier Gonzalez',
			amount: 11,
			codeService: 'TV32S912',
			detail: 'TV pagada',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		}
	],
	4: [
		{
			id: 6,
			nameBeneficiary: 'Luis',
			amount: 30,
			codeService: 'IN402912',
			detail: 'KLIX - INTERNET',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		}
	],
	5: [
		{
			id: 7,
			nameBeneficiary: 'XGD',
			amount: 40,
			codeService: 'STEAM90878',
			detail: 'Steam recargas',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		}
	],
	6: [
		{
			id: 8,
			nameBeneficiary: 'XAVIDAX',
			amount: 30,
			codeService: 'STEAM897676',
			detail: 'Steam recargas',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		}
	],
	11: [
		{
			id: 9,
			nameBeneficiary: 'Dax',
			amount: 100,
			codeService: 'AL8124112',
			detail: 'Ateneo Loja',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		}
	],
	12: [
		{
			id: 10,
			nameBeneficiary: 'Dax',
			amount: 120,
			codeService: 'CR242221',
			detail: 'Crecer',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		}
	],
	13: [
		{
			id: 11,
			nameBeneficiary: 'Dax',
			amount: 115,
			codeService: 'EE1787876',
			detail: 'Escuela Eugenio',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		}
	],
	1105936882: [
		{
			id: 12,
			nameBeneficiary: 'Dario Xavier Gonzalez Briceño',
			amount: 15,
			codeService: 'AG8924012',
			detail: 'Agua',
			date: '20-01-2023',
			chargeService: 0,
			address: 'Daniel Alvarez',
			ciBeneficiary: '1105936882'
		},
	]
}

router.post('/getServices', (req, res) => {
	res.json({
		success: true,
		data: {
			services: [
				{
					id: 1,
					name: 'Servicios básicos',
					description: 'Pago de servicios básicos',
					textLink: 'Pagar',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/services.svg?alt=media&token=eb97e92a-1078-473e-ae9e-f4a7e87295e9',
					categories: [
						{
							id: 1,
							name: 'Agua',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/water.svg?alt=media&token=612d9741-b6cb-4c7a-bc30-ad4128e46fbb',
							strSearch: 'Numero de servicio'
						},
						{
							id: 2,
							name: 'Luz',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/light.svg?alt=media&token=9aa0c212-751d-4b59-9f2a-301a5fbf8ab0',
							strSearch: 'Numero de servicio'
						},
						{
							id: 3,
							name: 'Teléfono',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/phone.svg?alt=media&token=5f60f35f-da72-4faa-9191-3c9e0325f4f5',
							strSearch: 'Numero de servicio'
						}
					]
				},
				{
					id: 2,
					name: 'Instituciones públicas',
					description: 'Pago de instituciones públicas',
					textLink: 'Pagar',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/institution_p.svg?alt=media&token=8f307113-a42d-4cdf-a972-c06d80ec537e',
					categories: [
						{
							id: 4,
							name: 'Matriculación vehicular',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/car.svg?alt=media&token=1cf987e1-6f73-45b0-a2cd-ffb39cb8cebc',
							strSearch: 'Numero de servicio'
						},
						{
							id: 5,
							name: 'Impuesto SRI',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/invoice.svg?alt=media&token=1acb7c20-2cf4-4b12-be4c-b5f9510c1d69',
							strSearch: 'Numero de servicio'
						},
						{
							id: 6,
							name: 'Patente municipal',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/patent.svg?alt=media&token=e42edc2f-c12c-4e47-a1de-43a0c90c1fbe',
							strSearch: 'Numero de servicio'
						}
					]
				},
				{
					id: 3,
					name: 'Instituciones privadas',
					description: 'Pago de instituciones privadas',
					textLink: 'Pagar',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/building.svg?alt=media&token=4aeef268-9a04-4f99-9a6d-9044f7e65507',
					categories: [
						{
							id: 7,
							name: 'Teléfono celular',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/cellphone.svg?alt=media&token=26998738-6607-4bc1-9018-5a81ea66b219',
							strSearch: 'Numero de servicio'
						},
						{
							id: 8,
							name: 'Television pagada',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/tv.svg?alt=media&token=17ee01dc-f7b3-4776-8047-565ca9b13660',
							strSearch: 'Numero de servicio'
						},
						{
							id: 9,
							name: 'Internet',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/web.svg?alt=media&token=8cbdc74b-faa9-4f38-a6db-13a4af45c537',
							strSearch: 'Numero de servicio'
						}
					]
				},
				{
					id: 4,
					name: 'Recargas',
					description: 'Recargas',
					textLink: 'Recargar',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/reload.svg?alt=media&token=4d647727-0d27-473a-a4cd-9ada51408867',
					categories: [
						{
							id: 10,
							name: 'Steam',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/steam.svg?alt=media&token=507c1c94-bc74-46ee-925f-e82fc9a1f750',
							strSearch: 'UID'
						},
					]
				},
				{
					id: 5,
					name: 'Instituciones educativas',
					description: 'Pago de instituciones educativas',
					textLink: 'Pagar',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
					categories: [
						{
							id: 11,
							name: 'Ateneo Loja',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
							strSearch: 'Código'
						},
						{
							id: 12,
							name: 'Crecer',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
							strSearch: 'Código'
						},
						{
							id: 13,
							name: 'Escuela Eugenio',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
							strSearch: 'Código'
						},
						{
							id: 14,
							name: 'Pio',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
							strSearch: 'Código'
						},
						{
							id: 15,
							name: 'BD',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
							strSearch: 'Código'
						},
						{
							id: 16,
							name: 'AL',
							img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
							strSearch: 'Código'
						}
					]
				}
			]
		},
		message: null
	})
})

router.post('/geFrequentServices', (req, res) => {
	res.json({
		success: true,
		data: {
			categories: [
				{
					id: 1,
					name: 'Agua',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/water.svg?alt=media&token=612d9741-b6cb-4c7a-bc30-ad4128e46fbb',
					idService: 1,
					nameService: 'Servicios básicos',
					savedServices: savedServicesObject[1]
				},
				{
					id: 7,
					name: 'Teléfono celular',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/cellphone.svg?alt=media&token=26998738-6607-4bc1-9018-5a81ea66b219',
					idService: 3,
					nameService: 'Instituciones privadas',
					savedServices: savedServicesObject[7]
				},
				{
					id: 8,
					name: 'Television pagada',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/tv.svg?alt=media&token=17ee01dc-f7b3-4776-8047-565ca9b13660',
					idService: 3,
					nameService: 'Instituciones privadas',
					savedServices: savedServicesObject[8]
				},
				{
					id: 9,
					name: 'Internet',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/web.svg?alt=media&token=8cbdc74b-faa9-4f38-a6db-13a4af45c537',
					idService: 3,
					nameService: 'Instituciones privadas',
					savedServices: savedServicesObject[9]
				},
				{
					id: 10,
					name: 'Steam',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/steam.svg?alt=media&token=507c1c94-bc74-46ee-925f-e82fc9a1f750',
					idService: 4,
					nameService: 'Recargas',
					savedServices: savedServicesObject[10]
				},
				{
					id: 11,
					name: 'Ateneo Loja',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
					idService: 5,
					nameService: 'Instituciones educativas',
					savedServices: savedServicesObject[11]
				},
				{
					id: 12,
					name: 'Crecer',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
					idService: 5,
					nameService: 'Instituciones educativas',
					savedServices: savedServicesObject[12]
				},
				{
					id: 13,
					name: 'Escuela Eugenio',
					img: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/education.svg?alt=media&token=8759a057-e747-4f9b-81d2-9d0ffe55a0fe',
					idService: 5,
					nameService: 'Instituciones educativas',
					savedServices: savedServicesObject[13]
				},

			]
		},
		message: null
	})
})

router.post('/getSavedServices', (req, res) => {
	const { idCategory } = req.body
	if (idCategory) {
		res.json({
			success: true,
			data: {
				savedServices: savedServicesObject[idCategory] || []
			},
			message: null
		})
	} else {
		res.json({
			success: false,
			data: {},
			message: 'Categoría de servicio requerido'
		})
	}

})

router.post('/getDebt', (req, res) => {
	const { codeService } = req.body
	if (codeService) {
		res.json({
			success: true,
			data: {
				debt: debtService[codeService] || []
			},
			message: null
		})
	} else {
		res.json({
			success: false,
			data: {},
			message: 'Código del servicio requerido'
		})
	}


})

router.post('/addServicePay', (req, res) => {

	const { otp } = req.body
	if (otp === '123456') {
		res.json({
			success: true,
			data: {},
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