'use strict'

const test = require('ava')
const help = require('../src/modules/help.js')

test('should help to be defined', t => {
  t.not(help, undefined)
})
