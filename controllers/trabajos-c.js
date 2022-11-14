//Llegamos a la carpeta con la información
const { trabajo } = require('../data/data.js').dataSistem;

class Trabajo {
    listar(req, res) {
        res.send(trabajo);
    }
}

//Exportamos el controlador de los trabajos
const trabajosController = new Trabajo;
module.exports = trabajosController;