//Llegamos a la carpeta con la información
const { trabajo } = require('../data/data.js').dataSistem;

class Trabajo {
  listar(req, res) {
    res.send(trabajo);
  }

  listarPorTipo(req, res) {
    const tipoTrab = req.params.tipoTrab;

    // Buscar los trabajos con el tipo de trabajo solicitado
    const resultados = trabajo.filter(trabajo => trabajo.tipo_trabajo === tipoTrab);

    // Si no se encuentra ningún trabajo:
    if (resultados.length === 0) {
      return res.status(404).send(`No se encontraron trabajos de tipo: ${tipoTrab}`);
    }
    //Mostrar trabajos enconctrados
    res.send(resultados);
  }
}

//Exportamos el controlador de los trabajos
const trabajosController = new Trabajo;
module.exports = trabajosController;