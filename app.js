require('colors')

const { mostrarMenu, pausa } = require('./helpers/mensajes')
console.clear()

const main = async () => {
  console.log('Hola mundo')
  let opt = ''

  do {
    opt = await mostrarMenu()
    // console.log({ opt })
    if (opt !== '0') await pausa()
  } while (opt !== '0')
}

/**
 * ¿Qué pasaría si queremos que el usuario pudiera navegar con las
 *  teclas de dirección por las diferentes opciones?
 * Ya vemos lo tedioso que sería.
 * Para ello, reconstruiremos todo esto con una librería que ya alguien
 * ha creado.
 */

main()
