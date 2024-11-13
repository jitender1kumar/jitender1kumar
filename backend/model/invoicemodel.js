const {
    Schema,
    model,
    mongo
  } =require("mongoose");
  
  const Invoice = new Schema({

      Taxes:
      {
        type: Object,                                                           
        
      },
      Chairs:
      {
        type: Object,                                                           
        
      },
      DiscountId: {
        type: String,
       
        maxlength: 50
      }, Discountvalue: {
        type: Number,
       
        maxlength: 50
      }, Discountperstage: {
        type: Number,
       
        maxlength: 50
      },AdditionaldiscountAmount: {
        type: Number,
       
        maxlength: 50
      },Totalvaue: {
        type: Number,
       
        maxlength: 50
      },grandtotal: {
        type: Number,
       
        maxlength: 50
        },RecieptNumber: {
        type: Number,
       
        maxlength: 50
      },
      PendingAmount:
      {
type:Number,

maxlength:20
      },
      PaidAmount:
      {
type:Number,

maxlength:20
      },
      AmountPaidstatus:
      {
type:Boolean,

maxlength:10
      },
      Orderstatus:
      {
type:String,

maxlength:10
      },   
      TotalTaxAmount:
      {       
type:Number,

maxlength:10
      },  
      TotalItemsAmount:
      {                          
type:Number,
maxlength:10                               
      },
      OrderTypeName:
      {                          
type:String,
maxlength:50                              
      },   
    createdAt: {
      type: String,
      default: Date.now,
    },
  });

  const TaskInvoice = model("Invoice", Invoice)
  
  module.exports = TaskInvoice 