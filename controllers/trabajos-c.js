//Llegamos a la carpeta con la información
const { trabajo } = require('../data/data.js').dataSistem;

// Controlador para Equipos usada en la clase Trabajo
const equiposController = require('./equipos-c.js');

//! Funciones utilizadas en los métodos de la clase Trabajo
function buscarIndiceDelDato(req) {
  const id = req.params.id;
  const indice = trabajo.findIndex(dato => dato.id_trabajo == id);
  return indice;
}

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

  editar(req, res) {
    const trabajoActualizado = req.body;

    const indice = buscarIndiceDelDato(req);
    // Si el valor existe
    if (indice >= 0) {
        const idNuevo = trabajoActualizado.id_trabajo;
        const indiceNuevo = trabajo.findIndex(dato => dato.id_trabajo == idNuevo);

        // Verificar que el equipo exista
        if (!equiposController.buscarEquipo(trabajoActualizado, res)) { return; }

        // No permitir actualizar por duplicación del ID
        if (indiceNuevo >= 0 && indice != indiceNuevo) {
            return res.status(405).send("No se actualizó el trabajo, el ID ingresado le pertenece a otro trabajo de mantenimiento.");
        }

        // El tipo de trabajo debe ser correctivo o preventivo
        if (!validarTipoTrab(trabajoActualizado, res)) { return; }

        // Actualizar y mostrar trabajos
        trabajo[indice] = trabajoActualizado;
        return res.send(trabajo);
    }
    // Si no se encuentra
    res.status(404).send(`No se actualizó el trabajo de mantenimiento. No se encontro el trabajo con el Identificador: ${req.params.id}`);
}
}

//Exportamos el controlador de los trabajos
const trabajosController = new Trabajo;
module.exports = trabajosController;