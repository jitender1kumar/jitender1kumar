const {
    Schema,
    model,
    mongo
  } =require("mongoose");
  
  const Chairsrunningorder = new Schema({

    Chairsrunningorder:
      {
        type: Object,
      },
    createdAt: {
      type: String,
      default: Date.now,
    },
  });

  const TaskChairsrunningorder = model("Chairsrunningorder", Chairsrunningorder)
  
  module.exports = TaskChairsrunningorder