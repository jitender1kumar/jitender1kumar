
const itemmodellTask = require('../model/itemmodel');

  
  exports.createitemsTask = async (req, res) => {

    try {
      // get the task from the body
      const taskData = await req.body;
      //create a new task then save
      await itemmodellTask.create(taskData)
        .then((createdTask) => {
          if (!createdTask) return res.status(404)
            .json({
              success: false,
              message: "Task creation failed",
              error: "Unable get created task"
            })
          res.status(201)
            .json({
              success: true,
              createdTask
            })
        })
        .catch((error) => {
          res.status(404)
            .json({
              success: false,
              error: error.message
            })
        })
    } catch (error) {
      res.status(500)
        .json({
          success: false,
          message: "Internal server error"
        })
    }
  }
  exports.getitemTask = async (req, res) => {
    //get all the data in the model and return it as response
    try {
      itemmodellTask.find()
        .then((allTasks) => {
          res.status(200)
            .json({
              success: true,
              allTasks
            })
        })
        .catch((error) => {
          res.status(404)
            .json({
              success: false,
              message: "Cant fined ",
              error
            })
        })
    } catch (error) {
      res.status(500)
        .json({
          success: false,
          message: "Internal server error",
          error: error.message
        })
    }
  }
                      
 

  exports.getiitembyidTasks = async (req, res) => {
    try {
    //  console.log(req.params);
      itemmodellTask.find(req.params)
      .then((allTasks) => {
        res.status(200)
          .json({
            success: true,
            allTasks
          })
      })
      .catch((error) => {
        res.status(404)
          .json({
            success: false,
            message: "Cant fined ",
            error
          })
      })
  } catch (error) {
    res.status(500)
      .json({
        success: false,
        message: "Internal server error",
        error: error.message
      })
  }
     
   }
   exports.updateitems = async (req, res) => {
    
    try {
     
      const taskData = await req.body;
      const { Invoiceid } = taskData.items[0];
      const { Productid } = taskData.items[0];
     // console.log(taskData.items.length);
      console.log(taskData.items[0]);
     // console.log(taskData.productprice);
      // Ensure that id and updateData are provided
      // if (!RecieptNumber || !taskData) {
      //   return res.status(400).json({
      //     success: false,
      //     message: "Missing id or update data"
      //   });
      // }
        // Perform the update operation
        const result = await itemmodellTask.updateOne({Invoiceid:Invoiceid , Productid:Productid},taskData.items[0]);
    
        if (result.nModified === 0) {
          return res.status(404).json({
            success: false,
            message: "Document not found or no changes made"
          });
        }
      
        res.status(200).json({
          success: true,
          message: "Document updated successfully",
          Invoiceid
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal server error",
          error: error.message
        });
      }
    }

    exports.deleteItemsTasks = async (req, res) => {
       console.log(req.params);
      
       try {
         const result = await itemmodellTask.deleteOne({Invoiceid:req.params.Invoiceid , Productid:req.params.Productid});
        
         if (result.deletedCount === 0) {
           return res.status(404).json({ message: 'Task not found' });
         }
         res.status(200).json({ message: 'Task deleted successfully' });
       } catch (error) {
         res.status(500).json({ message: 'Internal server error', error: error.message });
       }  
     }
   