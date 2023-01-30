const router = require('express').Router()
const transfer = require('../transfer/index')
const otp = require('../otp/index')
const movements = require('../movements/index')
const user = require('../user/index')

router.use('/transfer', transfer)
router.use('/otp', otp)
router.use('/movements', movements)
router.use('/user', user)
router.get('/', function (req, res) {
	res.status(200).json({ message: 'Estás conectado a nuestra API' })
})

module.exports = router