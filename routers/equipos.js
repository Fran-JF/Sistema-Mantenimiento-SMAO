//Importamos Express
const express = require('express');

// Creamos el Router
const equiposRouter = express.Router();

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
equiposRouter.use(express.json());

// Controlador para Equipos
const equiposController = require('../controllers/equipos-c.js');

//! Creamos las rutas para los Equipos Industriales (GET)

// Ruta para listar a todos los Equipos
equiposRouter.get('/', equiposController.listar);

// Ruta para listar Equipos por ID único (serial)
equiposRouter.get('/:id', equiposController.mostrarEquipo);

//! Aplicamos (POST, PUT, DELETE) a los Equipos Industriales

// Creamos la funcionalidad POST (Agregar)
equiposRouter.post('/', equiposController.agregar);

//Exportamos el router
module.exports = equiposRouter;