const {
    Schema,
    model,
    mongo
} = require("mongoose");

const MySchema = new Schema({
    ProductId: {
        type: String,
        required: true,
        maxlength: 300
    },
    ProductPrcieId: {
        type: String,
        required: true,
        maxlength: 300
    },
    ProductName: {
        type: String,
        required: true,
        maxlength: 300
    },
    Basetypeid: {
        type: String,
        required: true,
        maxlength: 300
    },
    Basetypename: {
        type: String,
        required: true,
        maxlength: 300
    },
    goodscollections: {
       type:Object
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});


const TaskModel = model("InventoryFoodwithProduct", MySchema)
module.exports = TaskModel //| categoryTask