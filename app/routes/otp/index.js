const router = require('express').Router()

router.post('/generate', (req, res) => {
	res.json({
		success: true,
		data: {
			otp:'123456'
		},
		message: null
	})
})


module.exports = router