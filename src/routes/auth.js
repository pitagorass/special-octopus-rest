const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('Ingresamos en el metodo get inicial, Bienvenido')
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
})
router.post('/register', async (req, res) => {
    console.log('Ingresamos en el metodo post para realizar el registro')
    res.json({
        error: null,
        data: 'aquí va ir la data'
    })
})

module.exports = router;







