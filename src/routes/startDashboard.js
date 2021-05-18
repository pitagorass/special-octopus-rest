const router = require('express').Router();

router.get('/Usuario', (req, res) => {
    
    console.log('Bienvenido Escritor')

    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const user = new User({
        name: req.body.id,
        email: req.body.name,
        street: req.body.addres.street,
        city: req.body.addres.city,
        zipcode: req.body.addres.zipcode,
        lat: req.body.geo.lat,
        ing: req.body.geo.log,
        phoneNumbers: req.body.phoneNumbers,
        website: req.body.website
    });
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: {
                title: 'En mi ruta protegida ingresamos un nuevo escritor',
                user: req.user,
                data: savedUser
            }
        })
    } catch (error) {
        res.status(400).json({ error })
    }
  
})

module.exports = router