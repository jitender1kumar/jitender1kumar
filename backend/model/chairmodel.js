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
    status:
    {
      type: Boolean,
      maxlength: 10
    },
    table_id:{
        type: String,
        maxlength: 300
      },
      chairorderstatus:
      {
        type: String,
        maxlength: 5
      },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });
  
  
  const TaskModel = model("chair", MySchema)
  module.exports = TaskModel //| categoryTask