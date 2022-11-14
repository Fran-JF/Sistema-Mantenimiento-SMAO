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
}

//Exportamos el controlador de los equipos
const equiposController = new Equipo;
module.exports = equiposController;