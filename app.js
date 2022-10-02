require('colors')
const { triggerAsyncId } = require('async_hooks')
const { inquirerMenu, pausa } = require('./helpers/inquirer')
const Tarea = require('./models/tarea')
const Tareas = require('./models/tareas')

const main = async () => {
  console.log('Hola mundo')
  let opt = ''

  do {
    opt = await inquirerMenu()
    console.log({ opt })
    const tareas = new Tareas()
    console.log(tareas)
    const tarea = new Tarea('Comprar comida')
    console.log(tarea)

    tareas._listado[tarea.id] = tarea
    console.log(tareas)

    await pausa()
  } while (opt !== '0')
}

main()
