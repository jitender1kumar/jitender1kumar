const pprouter = require("express")
  .Router()
const ppcontroller = require('../controller/ppcontroller')
pprouter
  .post('/', ppcontroller.createppTask)
  .get('/', ppcontroller.getppTask)
  .get('/:selectcategoryID', ppcontroller.getppbyidTasks)
  .get('/:selectBaseTypeID', ppcontroller.getppbyidTasks2)
  .get('/:SelectProductId', ppcontroller.getproductbyidTasks2)
  //.get('/:selectQtypeID', ppcontroller.getppbyidTasks3)
  .get('/:SelectProductId/:selectBaseTypeID/:selectQtypeID/:selectcategoryID', ppcontroller.getppbyidTasks2)
  .delete('/:_id',ppcontroller.deleteppTasks)
  .put('/',ppcontroller.updatepp)
module.exports = pprouter

///:selectcategoryID/:selectQtypeID