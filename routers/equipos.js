//Importamos Express
const express = require('express');

//Llegamos a la carpeta con la información
const {equipo} = require('../datos/data.js').dataSistem;

// Creamos el Router
const routerEquipo = express.Router();

// Procesamos el cuerpo de la solicitud POST --> (Middleware)
routerEquipo.use(express.json())


//! Creamos las rutas para los Equipos Industriales (GET)

// Ruta para listar a todos los Equipos
routerEquipo.get('/', (req, res) => {
    res.send(JSON.stringify(equipo));
})

// Ruta para listar Equipos por (ID único)
routerEquipo.get('/:id', (req, res) => {
    const id = req.params.id;
    const resultados = equipo.filter(equipo => equipo.id === id);
 
    if (resultados.length === 0) {
     return res.status(404).send(`No se encontraron Equipos con el Identificador ( ${id} )`);
    }
 
    res.send(JSON.stringify(resultados));
})


//! Aplicamos (POST, PUT, DELETE) a los Equipos Industriales

// Creamos la funcionalidad POST (Agregar)
routerEquipo.post('/', (req, res) =>{
    let equipoNuevo = req.body;
    equipo.push(equipoNuevo);
    res.send(JSON.stringify(equipo))
})

// Creamos la funcionalidad PUT (Actualizar)
routerEquipo.put('/:id', (req, res) =>{
    const equipoActualizado = req.body;
    const id = req.params.id

    const indice = equipo.findIndex(dato => dato.id == id);
    if (indice >= 0) {
        equipo[indice] = equipoActualizado;
    } 
    res.send(JSON.stringify(equipo))
})

// Creamos la funcionalidad DELETE (Eliminar)
routerEquipo.delete('/:id', (req, res) =>{
    const id = req.params.id
    const indice = equipo.findIndex(dato => dato.id == id);
    
    if (indice >= 0) {
        equipo.splice(indice, 1)
    } 
    res.send(JSON.stringify(equipo))
})

//Exportamos el router
module.exports = routerEquipo;