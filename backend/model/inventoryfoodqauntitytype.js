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
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });
  
  
  const TaskModel = model("InventoryFoodQuantityType", MySchema)
  module.exports = TaskModel //| categoryTask