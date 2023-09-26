const router = require('express').Router()

router.post('/generate', (req, res) => {
	const { type } = req.body
	if (type) {
		res.json({
			success: true,
			data: {
				otp: '123456'
			},
			message: null
		})
	} else {
		res.json({
			success: false,
			data: {},
			message: 'Error al generar el código de confirmación, inténtalo nuevamente mas tarde'
		})
	}
})


module.exports = router