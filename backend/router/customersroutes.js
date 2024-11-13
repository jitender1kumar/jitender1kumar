const customersouter = require("express")
  .Router()
const customerscontroller = require('../controller/customerscontroller')
customersouter
  .post('/', customerscontroller.createcustomersTask)
  .get('/', customerscontroller.getcustomersTask)
  .get('/:_id', customerscontroller.getcustomersbyidTasks)
  .delete('/:_id', customerscontroller.deletecustomersTasks)
  .put('/',customerscontroller.updatecustomers)
module.exports = customersouter