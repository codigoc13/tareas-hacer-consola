require('colors')

const { guardarDB, leerDB } = require('./helpers/guardarLeerArchivo')
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoChecklist,
} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

const main = async () => {
  let opt = ''
  const tareas = new Tareas()

  const tareasDB = leerDB()
  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB)
  }

  do {
    opt = await inquirerMenu()

    switch (opt) {
      case '1':
        const desc = await leerInput('Descripción: ')
        tareas.crearTarea(desc)
        break
      case '2':
        tareas.listadoCompleto()
        break
      case '3':
        tareas.listarPendientesCompletadas(true)
        break
      case '4':
        tareas.listarPendientesCompletadas(false)
        break
      case '5':
        const ids = await mostrarListadoChecklist(tareas.getListadoArr)
        // console.log({ ids })
        tareas.toggleCompletdas(ids)
        break
      case '6':
        const id = await listadoTareasBorrar(tareas.getListadoArr)
        // console.log({ id })
        if (id !== '0') {
          const resp = await confirmar('¿Está seguro?')
          // console.log({ resp })
          if (resp) {
            tareas.borrarTarea(id)
            console.log('Tarea borrada')
          }
        }
        break
    }

    guardarDB(tareas.getListadoArr)
    await pausa()
  } while (opt !== '0')
}

main()
