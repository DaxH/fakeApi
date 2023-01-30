const router = require('express').Router()

router.post('/getMovements', (req, res) => {
    res.json({
        success: true,
        data: {
            movements: [
                {
                    id: 1,
                    type: 'ND',
                    hour: "12:45",
                    date: "12/Nov/2022",
                    concept: 'Pago de servicios',
                    description: 'Se realizo un pago por servicios profesionales',
                    beneficiary: "Dax",
                    account: "4040767687119090",
                    amout: 20,
                    balance: 400,
                },
                {
                    id: 2,
                    type: 'NC',
                    hour: "20:45",
                    date: "13/Nov/2022",
                    concept: 'Pago de servicios',
                    description: 'Se brealizo un pago por servicios profesionales',
                    beneficiary: "Dax",
                    account: "4040767687118880",
                    amout: 20,
                    balance: 420,
                },
                {
                    id: 3,
                    type: 'ND',
                    hour: "19:45",
                    date: "14/Nov/2022",
                    concept: 'Pago raton',
                    description: 'Se brealizo un pago por servicios profesionales',
                    beneficiary: "Dax",
                    account: "4040767687119090",
                    amout: 20,
                    balance: 400,
                },
                {
                    id: 4,
                    type: 'NC',
                    hour: "16:45",
                    date: "16/Nov/2022",
                    concept: 'Pago de servicios',
                    description: 'Se brealizo un pago por servicios profesionales',
                    beneficiary: "Dax",
                    account: "4040767687117090",
                    amout: 200,
                    balance: 600,
                },
                {
                    id: 6,
                    type: 'ND',
                    hour: "02:45",
                    date: "12/Dic/2022",
                    concept: 'Pago PC',
                    description: 'Se brealizo un pago por servicios profesionales',
                    beneficiary: "Dax",
                    account: "4040767687114090",
                    amout: 100,
                    balance: 500,
                },
                {
                    id: 5,
                    type: 'NC',
                    hour: "12:45",
                    date: "12/Nov/2022",
                    concept: 'Anticipo',
                    description: 'Se brealizo un pago por servicios profesionales',
                    beneficiary: "Dax",
                    account: "4040767687110090",
                    amout: 20,
                    balance: 520,
                }
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

module.exports = router