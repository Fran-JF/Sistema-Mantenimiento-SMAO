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
            descripcion:"Por esta pasa un fluido en forma continua y entrega su energía cinética a través de un rodete con paletas o álabes",
            serial:"ac2356mn",
            fechaInTr:"2019-05-13",
            fechaUlTr:"2022-01-10",
            fechaUlMt:"2022-01-08",
            id: "1"           
        },
        {
            nombre: "Bomba",
            descripcion:"Pone en movimiento o cambia la dirección de los fluidos incompresibles",
            serial:"ch45645ki",
            fechaInTr:"2018-06-15",
            fechaUlTr:"2022-03-25",
            fechaUlMt:"2022-03-20",
            id: "2"
        },
        {
            nombre: "Ventilador",
            descripcion:"Produce una corriente de aire",
            serial:"ls0270ft",
            fechaInTr:"2021-07-21",
            fechaUlTr:"2022-10-12",
            fechaUlMt:"2022-10-05",
            id: "3"
        }
    ],
    "trabajo": [
        {
            id: "1",
            fechaPlMt:"2019-07-14",
            fechaInMt:"2019-07-14",
            fechaFinMt:"2019-07-17",
            estatus: "Finalizado",
            tipoTrab: "preventivo",
            idEquipo: "ac2356mn"
        },
        {
            id: "2",
            fechaPlMt:"2019-09-20",
            fechaInMt:"2019-09-20",
            fechaFinMt:"2019-09-28",
            estatus: "Finalizado",
            tipoTrab: "correctivo",
            idEquipo: "ac2356mn"
        },
        {
            id: "3",
            fechaPlMt:"2020-02-03",
            fechaInMt:"2020-02-03",
            fechaFinMt:"2020-02-08",
            estatus: "Finalizado",
            tipoTrab: "preventivo",
            idEquipo: "ac2356mn"
        },
        {
            id: "4",
            fechaPlMt:"2022-03-20",
            fechaInMt:"2022-03-20", 
            estatus: "En proceso",
            tipoTrab: "correctivo",
            idEquipo: "ch45645ki"
        },
        {
            id: "5",
            fechaPlMt:"2022-01-08",
            fechaInMt:"2022-01-08",
            fechaFinMt:"2022-01-08",
            estatus: "Finalizado",
            tipoTrab: "correctivo",
            idEquipo: "ac2356mn"
        },
        {
            id: "6",
            fechaPlMt:"2022-10-05",
            fechaInMt:"2022-10-05",
            estatus: "En Proceso",
            tipoTrab: "preventivo",
            idEquipo: "ls0270ft"
        },
    ]
}
module.exports.dataSistem = dataSistem;