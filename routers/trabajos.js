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

//! Aplicamos (POST, PUT, DELETE) a los Trabajos de Mantenimiento

// Creamos la funcionalidad POST (Agregar)
trabajosRouter.post('/', trabajosController.agregar);

//Exportamos el router
module.exports = trabajosRouter;