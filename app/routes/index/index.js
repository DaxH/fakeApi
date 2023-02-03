const router = require('express').Router()
const transfer = require('../transfer/index')
const otp = require('../otp/index')
const service = require('../servicePay/index')

router.use('/transfer', transfer)
router.use('/otp', otp)
router.use('/services', service)

router.get('/', function (req, res) {
	res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router