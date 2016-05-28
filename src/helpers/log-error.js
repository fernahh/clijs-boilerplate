'use strict'

const logError = str => {
  process.stderr.write(`${str} \n`)
  process.exit(1)
}

module.exports = logError
