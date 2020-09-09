const express = require('express');
const morgan = require('morgan');
const app = express();

// Configuracion
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Rutas
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// Inicializacion del servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')}`);
});
