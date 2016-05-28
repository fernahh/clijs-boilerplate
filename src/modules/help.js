'use strict'

const path = require('path').join
const read = require('fs').readFileSync

const help = read(path(__dirname, '../../doc/help.txt'))

module.exports = help
