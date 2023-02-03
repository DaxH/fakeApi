const router = require('express').Router()

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
module.exports = router