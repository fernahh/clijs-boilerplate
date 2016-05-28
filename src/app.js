'use strict'

const supportsColor = require('supports-color')
const chalk = require('chalk')

const app = (str, color) => {
  if (supportsColor || color) {
    process.stdout.write(chalk.blue(`Option without color: ${str} \n`))
  } else {
    process.stdout.write(`Option with color: ${str} \n`)
  }
}

module.exports = app
