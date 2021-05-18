const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();
// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.iavkh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
const optional = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))
// import routes
const authRoutes = require('./src/routes/auth')
const verifyToken = require('./src/middleware/validate-token');
const dashboadRoutes = require('./src/routes/dashboard');

// route middlewares
app.use('/api/startDashboard', verifyToken, dashboadRoutes);
app.use('/api/userLogin',authRoutes)
// iniciar server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})
