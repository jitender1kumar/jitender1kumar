const itemsrouter = require("express")
  .Router()
const itemscontroller = require('../controller/itemcontroller')
itemsrouter
  .post('/', itemscontroller.createitemsTask)
  .get('/', itemscontroller.getitemTask)
  .get('/:Invoiceid', itemscontroller.getiitembyidTasks)
  .put('/', itemscontroller.updateitems)
  .delete('/:Invoiceid/:Productid', itemscontroller.deleteItemsTasks)
module.exports = itemsrouter