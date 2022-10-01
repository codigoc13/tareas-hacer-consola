const inquirer = require('inquirer')
const colors = require('colors')

const preguntas = [
  {
    type: 'list',
    name: 'opción',
    message: '¿Qué deseas hacer?',
    choices: ['opt1', 'opt2', 'opt3'],
  },
]

const inquirerMenu = async () => {
  //   console.clear()
  console.log(colors.green('========================='))
  console.log('  Seleccione una opción'.green)
  console.log(colors.green('=========================\n'))

  const opt = await inquirer.prompt(preguntas)

  return opt
}

module.exports = {
  inquirerMenu,
}
