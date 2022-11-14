//! De cada equipo debe registrar:
// - Nombre
// - Descripción
// - Serial
// - Fecha inicial de puesta en marcha
// - Última fecha de puesta en marcha (Después de un mantenimiento)
// - Última fecha de mantenimiento
// - ID único del último trabajo de mantenimiento
// - Otros que considere necesarios

//! De cada trabajo se quiere almacenar:
// - ID único del equipo que se trabajó
// - fecha planificada para el mantenimiento
// - fecha de inicio del mantenimiento
// - fecha final del mantenimiento
// - estatus del mantenimiento
// - Otros que considere necesarios

//! Toda la información almacenada de (Equipos Industriales - Trabajos de Mantenimiento)

let dataSistem = {
  "equipo": [
    {
      nombre: "Turbina",
      descripcion: "Por esta pasa un fluido en forma continua y entrega su energía cinética a través de un rodete con paletas o álabes.",
      serial: "ac2356mn",
      fecha_inicial: "2019-05-13",
      ultima_fecha_marcha: "2022-01-10",
      ultima_fecha_mantenimiento: "2022-01-09",
      id_ultimo_trabajo: "4"
    },
    {
      nombre: "Bomba",
      descripcion: "Pone en movimiento o cambia la dirección de los fluidos incompresibles.",
      serial: "ch45645ki",
      fecha_inicial: "2018-06-15",
      ultima_fecha_marcha: "2019-09-28",
      ultima_fecha_mantenimiento: "2019-09-28",
      id_ultimo_trabajo: "2"
    },
    {
      nombre: "Ventilador",
      descripcion: "Produce una corriente de aire.",
      serial: "ls0270ft",
      fecha_inicial: "2019-07-21",
      ultima_fecha_marcha: "2020-02-09",
      ultima_fecha_mantenimiento: "2020-02-08",
      id_ultimo_trabajo: "3"
    }
  ],
  "trabajo": [
    {
      id_trabajo: "1",
      id_equipo: "ac2356mn",
      fecha_planificada: "2019-07-14",
      fecha_inicio: "2019-07-14",
      fecha_final: "2019-07-17",
      estatus: "Finalizado",
      tipo_trabajo: "preventivo"

    },
    {
      id_trabajo: "2",
      id_equipo: "ch45645ki",
      fecha_planificada: "2019-09-20",
      fecha_inicio: "2019-09-20",
      fecha_final: "2019-09-28",
      estatus: "Finalizado",
      tipo_trabajo: "correctivo"
    },
    {
      id_trabajo: "3",
      id_equipo: "ls0270ft",
      fecha_planificada: "2020-02-03",
      fecha_inicio: "2020-02-03",
      fecha_final: "2020-02-08",
      estatus: "Finalizado",
      tipo_trabajo: "preventivo"
    },
    {
      id_trabajo: "4",
      id_equipo: "ac2356mn",
      fecha_planificada: "2022-01-05",
      fecha_inicio: "2022-01-05",
      fecha_final: "2022-01-09",
      estatus: "Finalizado",
      tipo_trabajo: "correctivo"
    },
    {
      id_trabajo: "5",
      id_equipo: "ls0270ft",
      fecha_planificada: "2022-10-30",
      fecha_inicio: "2022-10-30",
      estatus: "En Proceso",
      tipo_trabajo: "preventivo"
    },
    {
      id_trabajo: "6",
      id_equipo: "ch45645ki",
      fecha_planificada: "2022-11-03",
      fecha_inicio: "2022-11-04",
      estatus: "En Proceso",
      tipo_trabajo: "correctivo",
    }
  ]
}
module.exports.dataSistem = dataSistem;