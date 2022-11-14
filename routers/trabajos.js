//Importamos Express
const express = require('express');

// Creamos el Router
const trabajosRouter = express.Router();

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
trabajosRouter.use(express.json());

// Controlador para Trabajos
const trabajosController = require('../controllers/trabajos-c');

//! Creamos las rutas para los Trabajos de Mantenimiento

// Ruta para listar a todos los Trabajos
trabajosRouter.get('/', trabajosController.listar);

// Ruta para listar trabajos por su tipo (Preventivo - Correctivo)
trabajosRouter.get('/:tipoTrab', trabajosController.listarPorTipo);

//Exportamos el router
module.exports = trabajosRouter;