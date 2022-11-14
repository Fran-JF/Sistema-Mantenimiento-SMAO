//Llegamos a la carpeta con la información
const { equipo } = require('../data/data.js').dataSistem;

class Equipo {
  listar(req, res) {
    res.send(equipo);
  }
}

//Exportamos el controlador de los equipos
const equiposController = new Equipo;
module.exports = equiposController;