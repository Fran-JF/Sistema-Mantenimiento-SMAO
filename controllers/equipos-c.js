//Llegamos a la carpeta con la información
const { equipo } = require('../data/data.js').dataSistem;

class Equipo {
  listar(req, res) {
    res.send(equipo);
  }

  mostrarEquipo(req, res) {
    const id = req.params.id;

    // Buscar con el ID el equipo en la data
    const resultado = equipo.filter(equipo => equipo.serial === id);

    // Si no se encuentra el equipo:
    if (resultado.length === 0) {
      return res.status(404).send(`No se encontraron Equipos con el Identificador: ${id}`);
    }
    //Mostrar el equipo
    res.send(resultado);
  }

  agregar(req, res) {
    let equipoNuevo = req.body;

    // Validar el ingreso del nuevo dato: Propiedades obligatorias
    if (!equipoNuevo.nombre || !equipoNuevo.descripcion || !equipoNuevo.serial || !equipoNuevo.fecha_inicial) {
      return res.status(405).send("No se agregó el equipo, se requiere del equipo: nombre, descripción, serial, fecha_inicial.");
    }

    // Ver si valor el id (serial) ya existe en la data
    const id = equipoNuevo.serial;
    let indice = equipo.findIndex(dato => dato.serial == id);

    // Si el ID (serial) ya existe en la data:
    if (indice >= 0) {
      return res.status(405).send("No se agregó el equipo, el ID (serial) ya existe.");
    }

    // Agregar y mostrar equipos
    equipo.push(equipoNuevo);
    res.status(201).send(equipo);
  }
}

//Exportamos el controlador de los equipos
const equiposController = new Equipo;
module.exports = equiposController;