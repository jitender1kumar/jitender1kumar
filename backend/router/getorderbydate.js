const invoiceouter = require("express")
  .Router()
const invoicecontroller = require('../controller/invoicecontroller')
invoiceouter
  
  .get('/:createdAt', invoicecontroller.getinvoicebydateTasks2)
module.exports = invoiceouter