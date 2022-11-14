//Importamos Express
const express = require('express');

//Llegamos a la carpeta con la información
const {trabajo} = require('../datos/data.js').dataSistem;

// Creamos el Router
const routerTrabajo = express.Router();

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
routerTrabajo.use(express.json())

//! Creamos las rutas para los Trabajos de Mantenimiento

// Ruta para listar a todos los Trabajos
routerTrabajo.get('/', (req, res) => {
    res.send(JSON.stringify(trabajo));
})

// Ruta para listar trabajos por su tipo (Preventivo - Correctivo)
routerTrabajo.get('/:tipoTrab', (req, res) => {
   const tipoTrab = req.params.tipoTrab;
   const resultados = trabajo.filter(trabajo => trabajo.tipoTrab === tipoTrab);

   if (resultados.length === 0) {
    return res.status(404).send(`No se encontraron trabajos de tipo ${tipoTrab}`);
   }

   res.send(JSON.stringify(resultados));
})

//! Aplicamos (POST, PUT, DELETE) a los Trabajos de Mantenimiento

// Creamos la funcionalidad POST (Agregar)
routerTrabajo.post('/', (req, res) =>{
    let trabajoNuevo = req.body;
    trabajo.push(trabajoNuevo);
    res.send(JSON.stringify(trabajo))
})

// Creamos la funcionalidad PUT (Actualizar)
routerTrabajo.put('/:id', (req, res) =>{
    const trabajoActualizado = req.body;
    const id = req.params.id

    const indice = trabajo.findIndex(dato => dato.id == id);
    if (indice >= 0) {
        trabajo[indice] = trabajoActualizado;
    } 
    res.send(JSON.stringify(trabajo))
})

// Creamos la funcionalidad DELETE (Eliminar)
routerTrabajo.delete('/:id', (req, res) =>{
    const id = req.params.id
    const indice = trabajo.findIndex(dato => dato.id == id);
    
    if (indice >= 0) {
        trabajo.splice(indice, 1)
    } 
    res.send(JSON.stringify(trabajo))
})

//Exportamos el router
module.exports = routerTrabajo;