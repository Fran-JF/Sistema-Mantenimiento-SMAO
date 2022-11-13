// Importamos express
const { Router } = require('express');
const express = require('express');
const app = express();

// Importamos la informacion
const {dataSistem} = require('./datos/data.js');

//Implementamos las Ruta Principal (Routing)
app.get('/', (req, res) => {
    res.send("Servidor (Sistema de Mantenimiento SMAO 💻).");
})

// Asociamos los Routers para Equipos y Trabajos
const routerEquipo = require('./routers/equipo.js');
app.use('/api/equipos', routerEquipo);

const routerTrabajo = require('./routers/trabajo.js');
app.use('/api/trabajos', routerTrabajo);

//Definimos el Puerto
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
})