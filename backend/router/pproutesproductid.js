const pprouter = require("express")
  .Router()
const ppcontroller = require('../controller/ppcontroller')
pprouter
  
  .get('/:SelectProductId', ppcontroller.getproductbyidTasks2)
  //.get('/:selectQtypeID', ppcontroller.getppbyidTasks3)
module.exports = pprouter

///:selectcategoryID/:selectQtypeID