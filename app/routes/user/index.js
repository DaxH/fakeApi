const router = require('express').Router()

const images = [
	{
		id: 1,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fapple.svg?alt=media&token=8a822256-15d6-4149-ac26-f1f3a4b69c66',
		description: 'MANZANA'
	},
	{
		id: 2,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fcloud.svg?alt=media&token=5debdcf4-066c-407b-a9be-49ba08229d49',
		description: 'NUVE'
	},
	{
		id: 3,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fdiamond.svg?alt=media&token=2d37bd07-9b8b-413e-9b39-0a9bd9de78d0',
		description: 'DIAMANTE'
	},
	{
		id: 4,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fgiven.svg?alt=media&token=a2305d22-9e00-4634-917e-4bc179ee12a0',
		description: 'DADO'
	},
	{
		id: 5,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fheart.svg?alt=media&token=2e5652a9-d5ac-445f-adfe-732e442c2361',
		description: 'CORAZÓN'
	},
	{
		id: 6,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fhouse.svg?alt=media&token=3fef65e5-3884-4247-a231-c9ffcb2b89a2',
		description: 'CASA'
	},
	{
		id: 7,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Flaptop.svg?alt=media&token=4842ae30-e7cf-4a6b-a649-e1f2f0f880b0',
		description: 'LAPTOP'
	},
	{
		id: 8,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Flight_bulb.svg?alt=media&token=1b18abfd-b628-4d2d-a43f-4ef5ca676da5',
		description: 'FOCO'
	},
	{
		id: 9,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Frocket.svg?alt=media&token=62e5c3a6-2812-4948-bb46-ffe2e5fa0d8c',
		description: 'COHETE'
	},
	{
		id: 10,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fsoccerball.svg?alt=media&token=3b14cbd6-0d79-4a1a-aaa5-2ba7eafef529',
		description: 'BALÓN'
	},
	{
		id: 11,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fstrawberry.svg?alt=media&token=f702252c-f9f0-4849-8815-7861e88c3453',
		description: 'FRESA'
	},
	{
		id: 12,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fsun.svg?alt=media&token=5e8d0bd5-5e51-4440-9869-b1d3943a7d6e',
		description: 'SOL'
	},
	{
		id: 13,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Ftarget.svg?alt=media&token=dc6a09d2-aba0-4f8a-a1fa-791a40f65430',
		description: 'DARDO'
	},
	{
		id: 14,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Ftelephone.svg?alt=media&token=b188387a-9da8-42c3-8006-d695abcee66d',
		description: 'TELÉFONO'
	},
	{
		id: 15,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Ftelevision.svg?alt=media&token=5dbacd77-c9cb-4636-a910-b6009ecc429e',
		description: 'TELEVISOR'
	},
	{
		id: 16,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Ftrophy.svg?alt=media&token=d793d7db-64dd-4037-8399-6df54783272b',
		description: 'TROFEO'
	},
	{
		id: 17,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fumbrella.svg?alt=media&token=03c39ee1-a98d-4a61-8ef8-9e414c0d3ffa',
		description: 'SOMBRILLA'
	},
	{
		id: 18,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fvideogame.svg?alt=media&token=5ac43f91-6186-4758-9e6c-c3adf344fdbc',
		description: 'CONTROL'
	},
	{
		id: 19,
		url: 'https://firebasestorage.googleapis.com/v0/b/tikee-admin-map.appspot.com/o/changeImage%2Fwrappedgift.svg?alt=media&token=94a942e4-6a3a-4e00-ae1c-c327b542a56d',
		description: 'REGALO'
	},
]

const questions = [
	{
		id: 1,
		question: '¿Nombre de su mejor amigo de la infancia?',
		answer: 'asdasd'
	},
	{
		id: 2,
		question: '¿Cuál es el nombre de su primer jefe?',
		answer: 'asdasd'
	},
	{
		id: 3,
		question: '¿Cuál es su hobby?',
		answer: 'asdad'
	},
	{
		id: 4,
		question: '¿Cuál es su postre favorito?',
		answer: ''
	},
	{
		id: 5,
		question: '¿Quién es su artista favorito?',
		answer: ''
	},
	{
		id: 6,
		question: '¿Nombre de su primera mascota?',
		answer: ''
	},
	{
		id: 7,
		question: '¿Cuál es su bebida favorita?',
		answer: ''
	},
	{
		id: 8,
		question: '¿Género de música favorito?',
		answer: ''
	},
	{
		id: 9,
		question: '¿Marca de auto favorito?',
		answer: ''
	},
]

const passwordRegex = {
	specialCharacter: ".*[!@#$%^&*()_+-=:;<>,.?/~].*[!@#$%^&*()_+-=:;<>,.?/~].*",
	letterLower: "[a-z]",
	letterUpper: "[A-Z]",
	digits: ".*\d.*\d.*"
}

const avatar = {
	accept: '.png, .jpeg, .jpg, .jpe',
	maxSize: 3.1
}

router.post('/getEntity', (req, res) => {
	return res.json({
		success: true,
		data: {
			entity: {
				titlePage: "Tikee",
				nameIfi: "Tikee ",
				logoHorizontal: "https://fintech.kradac.com:3007/imagespublic/logos/tikee-h-color.png",
				logoVertical: "https://fintech.kradac.com:3007/imagespublic/logos/tikee-v-logo.png",
				favicon: "https://fintech.kradac.com:3007/imagespublic/logos/tikee-v-logo.ico",
				colorPrimary: "#576BEF",
				colorSecondary: "#35C8F5",
				copyright: "Tikee  Ecuador 2022. Todos los Derechos reservados  Edit.",
				contact: "0962105773",
				email: "info@fintech.com",
				slogan: "lema de los mejores  Edit",
				facebook: "facebook  Edit",
				twitter: "twitter  Edit",
				customerSupport: 1,
				timeOtp: 3,
				numberAttempts: 3,
				template: 0
			}
		},
		message: ''
	})
})

router.post('/login', (req, res) => {
	const { username, password } = req.body
	if (username === 'tikee' && password === 'tikee') {
		res.json({
			success: true,
			data: {
				admin: {
					idAdmin: 45,
					user: "tikee",
					nameAdmin: "Dario",
					lastNameAdmin: "Gonzalez",
					idEntity: 62,
					token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzkwMjcyNTgsImV4cCI6MTY3OTAzMDg1OH0.7XofGljT8cfEPx3h20Zsb8Vtu6vvOQsTTtTo_oQJ31E"
				}
			},
			message: ''
		})
	} else {
		res.json({
			success: true,
			data: {
				admin: {
				}
			},
			message: 'Credenciales incorrectas'
		})
	}
})

router.post('/getMenu', (req, res) => {
	res.json({
		success: true,
		data: {
			menu: [
				{
					id_menu: 2,
					id_menu_banca: 46,
					orden: 1,
					nivel: 1,
					padre: 0,
					nombre: "Inicio",
					navegacion: "/posicion-consolidada",
					estado: 1,
					version: 0,
					animacion: null,
					tipo_usuario: 0,
					fecha_creacion: "2022-12-13T22:24:29.000Z",
					fecha_actualizacion: "2023-01-18T17:11:23.000Z",
					icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK",
					hijos: []
				},
				{
					id_menu: 1,
					id_menu_banca: 46,
					orden: 2,
					nivel: 1,
					padre: 0,
					nombre: "Transferencias",
					navegacion: "/#",
					estado: 1,
					version: 0,
					animacion: null,
					tipo_usuario: 0,
					fecha_creacion: "2022-12-13T22:24:29.000Z",
					fecha_actualizacion: "2023-01-18T17:11:35.000Z",
					icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK",
					hijos: [
						{
							id_menu: 3,
							id_menu_banca: 46,
							orden: 1,
							nivel: 2,
							padre: 1,
							nombre: "Internas",
							navegacion: "/transferencias/internas",
							estado: 1,
							version: 0,
							animacion: null,
							tipo_usuario: 0,
							fecha_creacion: "2022-12-13T22:24:29.000Z",
							fecha_actualizacion: "2023-01-18T17:11:35.000Z",
							icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK"
						},
						{
							id_menu: 4,
							id_menu_banca: 46,
							orden: 2,
							nivel: 2,
							padre: 1,
							nombre: "Interbancarias",
							navegacion: "/transferencias/interbancarias",
							estado: 1,
							version: 0,
							animacion: null,
							tipo_usuario: 0,
							fecha_creacion: "2022-12-13T22:24:29.000Z",
							fecha_actualizacion: "2023-01-18T17:11:42.000Z",
							icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK"
						}
					]
				},
				{
					id_menu: 5,
					id_menu_banca: 46,
					orden: 3,
					nivel: 1,
					padre: 0,
					nombre: "Pago de servicios",
					navegacion: "/pagos-servicios",
					estado: 1,
					version: 0,
					animacion: null,
					tipo_usuario: 0,
					fecha_creacion: "2022-12-13T22:24:29.000Z",
					fecha_actualizacion: "2023-01-18T17:11:48.000Z",
					icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK",
					hijos: []
				},
				{
					id_menu: 8,
					id_menu_banca: 46,
					orden: 4,
					nivel: 1,
					padre: 0,
					nombre: "Pago de tarjetas",
					navegacion: "/tarjetas/pagos",
					estado: 1,
					version: 0,
					animacion: null,
					tipo_usuario: 0,
					fecha_creacion: "2022-12-13T22:24:29.000Z",
					fecha_actualizacion: "2023-03-15T15:35:06.000Z",
					icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK",
					hijos: []
				},
				{
					id_menu: 9,
					id_menu_banca: 46,
					orden: 5,
					nivel: 1,
					padre: 0,
					nombre: "Otros servicios",
					navegacion: "/otros-servicios",
					estado: 1,
					version: 0,
					animacion: null,
					tipo_usuario: 0,
					fecha_creacion: "2022-12-13T22:24:29.000Z",
					fecha_actualizacion: "2023-01-18T17:11:57.000Z",
					icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK",
					hijos: []
				},
				{
					id_menu: 10,
					id_menu_banca: 46,
					orden: 6,
					nivel: 1,
					padre: 0,
					nombre: "Cuentas",
					navegacion: "/cuentas",
					estado: 1,
					version: 0,
					animacion: null,
					tipo_usuario: 0,
					fecha_creacion: "2022-12-13T22:24:29.000Z",
					fecha_actualizacion: "2023-01-18T17:12:03.000Z",
					icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK",
					hijos: []
				},
				{
					id_menu: 11,
					id_menu_banca: 46,
					orden: 7,
					nivel: 1,
					padre: 0,
					nombre: "Mis contactos",
					navegacion: "/mis-contactos",
					estado: 1,
					version: 0,
					animacion: null,
					tipo_usuario: 0,
					fecha_creacion: "2022-12-13T22:24:29.000Z",
					fecha_actualizacion: "2023-01-18T17:12:07.000Z",
					icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK",
					hijos: []
				},
				{
					id_menu: 12,
					id_menu_banca: 46,
					orden: 8,
					nivel: 1,
					padre: 0,
					nombre: "Ayuda",
					navegacion: "/ayuda",
					estado: 1,
					version: 0,
					animacion: null,
					tipo_usuario: 0,
					fecha_creacion: "2022-12-13T22:24:29.000Z",
					fecha_actualizacion: "2023-01-18T17:12:10.000Z",
					icono: "data:image/x-icon;base64,AAABAAQAEBAAAAEAIADjAQAARgAAABgYAAABACAADAMAACkCAAAgIAAAAQAgADkDAAA1BQAAQEAAAAEAIACwBgAAbggAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgDAAAAKC0PUwAAAORQTFRFIiIiIiIiIiIiIiIiIiIiIiIiMlBYPXKAKTc7Kjo+SJCkLUJHRYiaOGRvNVhiNltlS5muS5qvMU1VOWdzM1NcSZOnOmd0JzAzQHuLVrnUVLTPQX2NVrvWQHmJNlxmSJK",
					hijos: []
				}
			]
		},
		message: ''
	})
})

router.post('/validateRegisterBeneficiary', (req, res) => {

	const {
		typeBeneficiary,
		numberAccount,
		numberCard,
		bankId,
		typeAccount,
		ciBeneficiary,
		typeCard
	} = req.body

	switch (typeBeneficiary) {
		case 'INTERNAL':
			if (numberAccount) {
				if (numberAccount === '1234567891') {
					return res.json({
						success: true,
						data: {
							nameBeneficiary: 'Xavier Gonzalez',
							email: 'xavi@gmail.com',
							ci: '1105936882',
							typeAccount: {
								id: 1,
								description: 'CUENTA AHORROS'
							}
						},
						message: ''
					})
				}
				if (numberAccount === '1234567892') {
					return res.json({
						success: true,
						data: {
							nameBeneficiary: 'Dax',
							email: 'dax@gmail.com',
							ci: '1105936882',
							typeAccount: {
								id: 2,
								description: 'CUENTA CORRIENTE'
							}
						},
						message: ''
					})
				} else {
					res.json({
						success: true,
						data: {
							code: 1
						},
						message: 'No se pudo validar el número de cuenta'
					})
				}
			} else {
				res.json({
					success: false,
					data: {},
					message: 'Número de cuenta requerido'
				})
			}
			break;
		case 'INTERBANK':
			if (numberAccount && bankId && typeAccount && ciBeneficiary) {
				if (numberAccount === '1234567891') {
					return res.json({
						success: true,
						data: {
							nameBeneficiary: 'Antonio Cruz',
							email: 'antonio@gmail.com'

						},
						message: ''
					})
				}
				if (numberAccount === '1234567892') {
					return res.json({
						success: true,
						data: {
							nameBeneficiary: 'Maria Garcia',
							email: 'maria@gmail.com'
						},
						message: ''
					})
				} else {
					res.json({
						success: true,
						data: {
							code: 1
						},
						message: 'No se pudo validar el número de cuenta'
					})
				}
			} else {
				res.json({
					success: false,
					data: {},
					message: 'Parámetros requeridos'
				})
			}
			break;
		case 'CARD':
			if (numberCard && bankId && ciBeneficiary, typeCard) {
				if (numberCard === '4513256858760869') {
					return res.json({
						success: true,
						data: {
							nameBeneficiary: 'Lisa Mayer',
							email: 'lisa@gmail.com'

						},
						message: ''
					})
				}
				if (numberCard === '5191732343975393') {
					return res.json({
						success: true,
						data: {
							nameBeneficiary: 'Hans Baum',
							email: 'hans@gmail.com'
						},
						message: ''
					})
				} else {
					res.json({
						success: true,
						data: {
							code: 1
						},
						message: 'No se pudo validar el número de tarjeta'
					})
				}
			} else {
				res.json({
					success: false,
					data: {},
					message: 'Parámetros requeridos'
				})
			}
			break;
		default:
			return res.json({
				success: false,
				data: {},
				message: 'No se pudo validar el tipo de beneficiario'
			})
	}
})

router.post('/registerBeneficiary', (req, res) => {

	const {
		typeBeneficiary,
		ciBeneficiary,
		nameBeneficiary,
		numberAccount,
		numberCard,
		typeCard,
		otp,
		aliasCard,
		typeAccount
	} = req.body

	switch (typeBeneficiary) {
		case 'INTERNAL':
			if (otp === '123456') {
				if (ciBeneficiary && nameBeneficiary && numberAccount && typeAccount) {
					res.json({
						success: true,
						data: {},
						message: 'Registro exitoso'
					})
				} else {
					res.json({
						success: false,
						data: {},
						message: 'Parámetros faltantes'
					})
				}
			} else {
				res.json({
					success: false,
					data: {},
					message: 'Código otp incorrecto'
				})
			}
			break;
		case 'INTERBANK':
		case 'CARD':
			if (otp === '123456') {
				if (ciBeneficiary && nameBeneficiary && numberCard && aliasCard, typeCard) {
					res.json({
						success: true,
						data: {},
						message: 'Registro exitoso'
					})
				} else {
					res.json({
						success: false,
						data: {},
						message: 'Parámetros faltantes'
					})
				}
			} else {
				res.json({
					success: false,
					data: {},
					message: 'Código otp incorrecto'
				})
			}
			break;
		default:
			return res.json({
				success: false,
				data: {},
				message: 'No se pudo validar el tipo de beneficiario'
			})
	}

})

router.post('/updateBeneficiary', (req, res) => {

	const {
		typeBeneficiary,
		ciBeneficiary,
		nameBeneficiary,
		numberAccount,
		numberCard,
		aliasCard,
		typeCard,
		otp,
		typeAccount
	} = req.body

	switch (typeBeneficiary) {
		case 'INTERNAL':
			if (otp === '123456') {
				if (ciBeneficiary && nameBeneficiary && numberAccount && typeAccount) {
					res.json({
						success: true,
						data: {},
						message: 'Datos guardados'
					})
				} else {
					res.json({
						success: false,
						data: {},
						message: 'Parámetros faltantes'
					})
				}
			} else {
				res.json({
					success: false,
					data: {},
					message: 'Código otp incorrecto'
				})
			}
			break;
		case 'INTERBANK':
			if (otp === '123456') {
				if (ciBeneficiary && nameBeneficiary && numberAccount && typeAccount) {
					res.json({
						success: true,
						data: {},
						message: 'Datos guardados'
					})
				} else {
					res.json({
						success: false,
						data: {},
						message: 'Parámetros faltantes'
					})
				}
			} else {
				res.json({
					success: false,
					data: {},
					message: 'Código otp incorrecto'
				})
			}
			break;
		case 'CARD':
			if (otp === '123456') {
				if (ciBeneficiary && nameBeneficiary && numberCard && aliasCard, typeCard) {
					res.json({
						success: true,
						data: {},
						message: 'Datos guardados'
					})
				} else {
					res.json({
						success: false,
						data: {},
						message: 'Parámetros faltantes'
					})
				}
			} else {
				res.json({
					success: false,
					data: {},
					message: 'Código otp incorrecto'
				})
			}
			break;
		default:
			return res.json({
				success: false,
				data: {},
				message: 'No se pudo validar el tipo de beneficiario'
			})
	}

})

router.post('/deleteBeneficiary', (req, res) => {
	const { idAccount } = req.body

	if (idAccount) {

		res.json({
			success: true,
			data: {},
			message: 'Datos guardados'
		})
	} else {
		res.json({
			success: false,
			data: {},
			message: 'ID de cuenta requerido'
		})
	}
})

router.post('/getDataAccount', (req, res) => {
	res.json({
		success: true,
		data: {
			accounts: [
				{
					id: 1,
					type: 'Ahorro',
					name: 'Jonathan Ricardo ',
					lastname: 'Tillaguango Jiménez',
					account_opening_date: '2/jun/2019',
					numberID: '11060708090',
					numberAccount: '212121212121',
					balance: 23000,
					last_transaction_date: '4/may/2020',
					id_user: 45

				}
			]
		}
	})
})

router.post('/changeAvatar/getInitialData', (req, res) => {
	res.json({
		data: {
			avatar
		},
		success: true,
		message: ''
	})
})

router.post('/changeAvatar/addAvatar', (req, res) => {
	const { avatar } = req.body

	if (avatar) {
		res.json({
			success: true,
			data: {},
			message: 'Datos guardados'
		})
	} else {
		res.json({
			success: false,
			data: {},
			message: 'Avatar requerido'
		})
	}

})

router.post('/changeQuestion/getInitialData', (req, res) => {
	res.json({
		data: {
			questions
		},
		success: true,
		message: ''
	})
})

router.post('/changeQuestion/addQuestion', (req, res) => {

	const { otp, questions } = req.body

	if (otp === '123456') {
		if (questions.length > 2) {
			res.json({
				success: true,
				data: {},
				message: 'Datos guardados'
			})
		} else {
			res.json({
				success: false,
				data: {},
				message: 'Mínimo de preguntas requerido 3'
			})
		}

	} else {
		res.json({
			success: false,
			data: {},
			message: 'Código OTP incorrecto'
		})
	}
})

router.post('/changeImage/getInitialData', (req, res) => {

	const randomImages = []
	const arrayRandom = []

	while (arrayRandom.length !== 10) {
		const randomNumber = Math.floor(Math.random() * images.length)
		if (!arrayRandom.includes(randomNumber)) {
			arrayRandom.push(randomNumber)
			randomImages.push(images[randomNumber])
		}
	}

	res.json({
		data: {
			images: randomImages
		},
		success: true,
		message: ''
	})
})

router.post('/changeImage/addImage', (req, res) => {

	const { otp, idImage } = req.body

	if (otp === '123456') {
		if (idImage) {
			res.json({
				success: true,
				data: {},
				message: 'Datos guardados'
			})
		} else {
			res.json({
				success: false,
				data: {},
				message: 'Imagen requerida'
			})
		}

	} else {
		res.json({
			success: false,
			data: {},
			message: 'Código OTP incorrecto'
		})
	}
})

router.post('/changePassword/getInitialData', (req, res) => {
	res.json({
		data: {
			passwordRegex
		},
		success: true,
		message: ''
	})
})

router.post('/changePassword/verifyPassword', (req, res) => {
	const { lastPassword } = req.body
	if (lastPassword) {
		if (lastPassword === 'tikeeAdmin') {
			res.json({
				data: {},
				success: true,
				message: ''
			})

		} else {
			res.json({
				data: {},
				success: false,
				message: 'La contraseña anterior no coincide'
			})
		}
	} else {

		res.json({
			data: {},
			success: false,
			message: 'Contraseña requerida'
		})
	}
})

router.post('/changePassword/addPassword', (req, res) => {

	const { otp, newPassword } = req.body

	if (otp === '123456') {
		if (newPassword) {
			res.json({
				success: true,
				data: {},
				message: 'Datos guardados'
			})
		} else {
			res.json({
				success: false,
				data: {},
				message: 'Contraseña requerida'
			})
		}

	} else {
		res.json({
			success: false,
			data: {},
			message: 'Código OTP incorrecto'
		})
	}
})



module.exports = router