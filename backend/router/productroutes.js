const productouter = require("express")
  .Router()
const productscontroller = require('../controller/productcontroller')
productouter
  .post('/', productscontroller.createproductTask)
  .get('/', productscontroller.getproductTask)
  
  .get('/:_id', productscontroller.getproductbyidTasks2)
  //.get('/:selectcategoryID', productscontroller.getproductbyidTasks)
  .delete('/:_id',productscontroller.deleteproductTasks)
  .put('/',productscontroller.updateproduct)
module.exports = productouter