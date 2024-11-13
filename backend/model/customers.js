const {
    Schema,
    model,
    mongo
  } =require("mongoose");
  
  const Customers = new Schema({

      
      Name: {
        type: String,
        maxlength: 50
      }, MobileNo: {
        type: String,
        
        maxlength: 20
      }, DOB: {
        type: String,
        
        maxlength: 20
      },
      tag: {
        type: String,
        
        maxlength: 20
      },DueAmount: {
        type: Number,
        
        maxlength: 50
      },Anniversary: {
        type: String,
        
        maxlength: 50
      },Paymentstatus: {
        type: Number,
        
        maxlength: 50
        },RecieptNumber: {
        type: Number,
        
        maxlength: 50
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const TaskCustomers= model("Customers", Customers)
  
  module.exports = TaskCustomers 