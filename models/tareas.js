const Tarea = require('./tarea')

class Tareas {
  _listado = {}

  constructor() {
    this._listado = {}
  }

  cargarTareasFromArray(tareas = []) {
    tareas.map((tarea) => {
      this._listado[tarea.id] = tarea
    })
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc)
    this._listado[tarea.id] = tarea
  }

  get getListadoArr() {
    const listado = []
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key]
      listado.push(tarea)
    })
    return listado
  }

  listadoCompleto() {
    console.log('')
    this.getListadoArr.forEach((tarea, i) => {
      const idx = i + 1
      const { desc, completadoEn } = tarea
      const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red

      console.log(`${(idx + '.').green} ${desc} :: ${estado}`)
    })
  }

  listarPendientesCompletadas(completadas = true) {
    console.log('')
    let contador = 0
    this.getListadoArr.forEach((tarea, i) => {
      const { desc, completadoEn } = tarea
      const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red
      if (completadas && estado === 'Completada'.green) {
        contador++
        console.log(
          `${(contador + '.').green} ${desc} :: ${completadoEn.green}`
        )
      }
      if (!completadas && estado === 'Pendiente'.red) {
        contador++
        console.log(`${(contador + '.').green} ${desc} :: ${estado}`)
      }
    })
  }

  borrarTarea(id = '') {
    if (this._listado[id]) {
      delete this._listado[id]
    }
  }

  toggleCompletdas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id]
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString()
      }
    })

    this.getListadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null
      }
    })
  }
}

module.exports = Tareas
