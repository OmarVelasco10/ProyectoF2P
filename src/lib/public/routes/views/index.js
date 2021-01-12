const express = require('express');
const morgan = require('morgan');

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 4000); /*definimos el puerto 4000 o si hay otro disponible lo toma*/

//Middlewares
app.use(morgan('dev'));

//Variables globales

//routes

//publiccd 

//inicialiación dle servidor
app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port'));
});