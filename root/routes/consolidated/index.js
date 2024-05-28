const router = require('express').Router()

router.post('/returnConsolidatedOfProducts', (req, res) => {

    const cuentas = [];

    for (let index = 0; index < 3; index++) {
        
        cuentas.push({
            id : 'C'+index,
            nombreProducto : 'Ahorro Vista',
            numeroCuenta : Math.floor((Math.pow(10, 15 - 1)) + Math.random() * (Math.pow(10, 15 - 1) * 9)).toString(),
            saldoDisponible : 2 * index,
            saldoEfectivizar : 1 * index
        })
        
    }

	res.json({
		code: 'COD_OK',
		result: {
            cuentas,
            creditos : [],
            dpf : []
        },
        info : '',
        status : false
	})
})

router.post('/returnsAccountsMovements', (req, res) => {

    const movimientos = [];

    for (let index = 0; index < 10; index++) {
        movimientos.push({
            id : index,
            fecha : '01 feb 2024 - 13:00 pm',
            concepto : 'Transferencia SPI',
            monto : 2 * index,
            saldoDisponible : 1 * index,
            tipoMovimiento : ((index % 2) === 0) ? 'Debito' : 'Credito'
        })
        
    }

	res.json({
		code: 'COD_OK',
		result: {
            movimientos
        },
        info : '',
        status : false
	})
})

module.exports = router
