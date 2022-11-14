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

  // Utilizada en la clase Trabajo
  buscarEquipo(trabajo, res) {
    const id = trabajo.id_equipo;
    const miEquipo = equipo.findIndex(dato => dato.serial == id);

    // Si el id (serial) no existe
    if (miEquipo < 0) {
      res.status(404).send(`No se completó la solicitud. No se encontraron Equipos con el Identificador: ${id}`);
      return false;
    }
    return true;
  }

  // Utilizada en la clase Trabajo en el método agregar
  editarPorNuevoTrabajo(trabajoNuevo) {
    const id = trabajoNuevo.id_equipo;
    const ultimaFecha = trabajoNuevo.fecha_final;

    // Si existe el valor de la ultima fecha de mantenimiento en el dato del nuevo trabajo, entonces se actualizará esa fecha y el ID del trabajo en el equipo
    if (ultimaFecha != null) {
      const indice = equipo.findIndex(dato => dato.serial == id);
      equipo[indice].ultima_fecha_mantenimiento = ultimaFecha;
      equipo[indice].id_ultimo_trabajo = trabajoNuevo.id_trabajo;
    }
  }
}

//Exportamos el controlador de los equipos
const equiposController = new Equipo;
module.exports = equiposController;