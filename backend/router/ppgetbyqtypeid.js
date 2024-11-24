const pprouterq = require("express")
  .Router()
const ppcontroller = require('../controller/ppcontroller')
pprouterq
  
  .get('/:selectQtypeID', ppcontroller.getppbyQtypeidTasks)
module.exports = pprouterq
