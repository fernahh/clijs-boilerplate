'use strict'

const app = require('./src/app.js')
const logError = require('./src/helpers/log-error.js')
const help = require('./src/modules/help.js')
const pkg = require('./package.json')

const run = argvs => {
  const version = argvs.version || argvs.v
  const helpOption = argvs.help || argvs.h
  const arg = argvs._[0]

  if (helpOption) {
    process.stderr.write(help)
    return
  }

  if (version) {
    process.stderr.write(`${pkg.name} v${pkg.version} \n`)
    return
  }

  if (arg !== undefined && arg.length) {
    app(argvs._, argvs.color)
  } else {
    logError('You must provide a valid argument')
  }
}

exports.run = argvs => run(argvs)
