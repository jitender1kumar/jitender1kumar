const pprouterb = require("express")
  .Router()
const ppcontroller = require('../controller/ppcontroller')
pprouterb
  .get('/:selectBaseTypeID', ppcontroller.getppbybasetypeidTasks)
module.exports = pprouterb
