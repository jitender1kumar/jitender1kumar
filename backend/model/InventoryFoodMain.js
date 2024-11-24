const {
    Schema,
    model,
    mongo
  } = require("mongoose");
  
  const MySchema = new Schema({
    name: {
      type: String,
      required: true,
      maxlength: 50
    },
    description:
    {
      type: String,
      maxlength: 300
    },
    quantitytypeID:
    {
        type: String,
        maxlength: 300
    },
    quantitytypename:
    {
        type: String,
        maxlength: 50
    },
    quantitytypevalue:
    {
        type: Number,
        maxlength: 50
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });
  
  
  const TaskModel = model("InventoryFoodMain", MySchema)
  module.exports = TaskModel //| categoryTask