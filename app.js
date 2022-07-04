const express = require('express');
const nodemon = require('nodemon');
const path = require('path');

const app = express()

/////////////Static files/////////////
app.use(express.static(path.join(__dirname, 'public')))

/////////////View engine/////////////
app.set('view engine', 'ejs');

/////////////Routes/////////////
const mainRouter = require('./routes/mainRouter')

/////////////Router paths/////////////
app.use('/', mainRouter)






app.listen(3000, () => {
    console.log('Servidor corriendo')
})


