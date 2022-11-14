//Llegamos a la carpeta con la información
const { trabajo } = require('../data/data.js').dataSistem;

// Controlador para Equipos usada en la clase Trabajo
const equiposController = require('./equipos-c.js');

//! Función utilizada en los métodos de la clase Trabajo
function validarTipoTrab(trabajo, res) {
  const tipoTrab = trabajo.tipo_trabajo;
  if (tipoTrab != "correctivo" && tipoTrab != "preventivo") {
    res.status(405).send("No se procesó la solicitud, tipo de trabajo no válido.");
    return false;
  }
  return true;
}

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

  agregar(req, res) {
    let trabajoNuevo = req.body;

    // Validar el ingreso del nuevo dato: Propiedades obligatorias
    if (!trabajoNuevo.id_trabajo || !trabajoNuevo.id_equipo || !trabajoNuevo.fecha_planificada || !trabajoNuevo.estatus || !trabajoNuevo.tipo_trabajo) {
      return res.status(405).send("No se agregó el trabajo de mantenimiento, el trabajo debe contener: id_trabajo, id_equipo, fecha_planificada, estatus, tipo_trabajo.");
    }

    // Ver si valor el id_trabajo ya existe en la data
    const id = trabajoNuevo.id_trabajo;
    const indice = trabajo.findIndex(dato => dato.id_trabajo == id);

    // Si el ID ya existe en la data:
    if (indice >= 0) {
      return res.status(405).send("No se agregó el trabajo, el ID ya existe.");
    }

    // El tipo de trabajo debe ser correctivo o preventivo
    if (!validarTipoTrab(trabajoNuevo, res)) { return; }

    // Verificar que el equipo exista
    if (!equiposController.buscarEquipo(trabajoNuevo, res)) { return; }

    // Modificar id_ultimo_trabajo y ultima_fecha_mantenimiento del equipo
    equiposController.editarPorNuevoTrabajo(trabajoNuevo);

    // Agregar y mostrar trabajos 
    trabajo.push(trabajoNuevo);
    res.status(201).send(trabajo);
  }
}

//Exportamos el controlador de los trabajos
const trabajosController = new Trabajo;
module.exports = trabajosController;