
const chairsrunningorderemodelTask = require('../model/tablerunningordermodel');

  
  exports.createchairsrunningorderTask = async (req, res) => {

    try {
      // get the task from the body
      const taskData = await req.body;
      //create a new task then save
      console.log(taskData);
      await chairsrunningorderemodelTask.create(taskData)
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
  exports.getcreatechairsrunningorderTask = async (req, res) => {
    //get all the data in the model and return it as response
    try {
        chairsrunningorderemodelTask.find()
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

 

  exports.getcreatechairsrunningorderTasks = async (req, res) => {
  //  console.log(req);
  //  console.log(req.body);
   // console.log(req.params);
  //   try {  
      
  //     // const {createdAt} =  req.body;
  //     // console.log(createdAt);
  //     // const data =  await invoicemodelTask.find({
  //     //     createdAt: { $lte: createdAt }
  //     //   });   
  //     //   console.log(data) 
  //     //   res.json(data);
  //     console.log(req.params)
  //     invoicemodelTask.find($lte,req.params)
  //   .then((allTasks) => {
  //     res.status(200)
  //       .json({
  //         success: true,
  //         allTasks
  //       })
  //    //   invoicemodelTask.find(req.params)
  //     // .then((allTasks) => {
  //     //   res.status(200)
  //     //     .json({                                                               
  //     //       success: true,
  //     //       allTasks
  //     //     })
  //      })
  //     .catch((error) => {
  //       res.status(404)
  //         .json({
  //           success: false,
  //           message: "Cant fined ",
  //           error
  //         })
  //     })
  // } catch (error) {
  //   res.status(500)
  //     .json({
  //       success: false,
  //       message: "Internal server error",
  //       error: error.message
  //     })
  // }
     
   }
   exports.getcreatechairsrunningorderbydateTasks2 = async (req, res) => {
    //const {startDateTime } = req.params.startDateTime;
    const {createdAt } = req.params;
  // console.log(req.params);
   // console.log(endDateTime);
    try {                                                              
        const results = await chairsrunningorderemodelTask.find({
          
            createdAt: { createdAt }
        });
        res.json(results);
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
     
   }
   exports.deletechairsrunningordereTasks = async (req, res) => {
     console.log(req.params);
     const taskData = await req.body;
     //console.log(taskData.createdAt);
     try {
       const result = await chairsrunningorderemodelTask.deleteOne(req.params);
      // console.log(req.params);
       if (result.deletedCount === 0) {
         return res.status(404).json({ message: 'Task not found' });
       }
       res.status(200).json({ message: 'Task deleted successfully' });
     } catch (error) {
       res.status(500).json({ message: 'Internal server error', error: error.message });
       //console.log(taskData);
     }  
   }
   exports.getcreatechairsrunningorderbyidTasks = async (req, res) => {
    try {
      //console.log(req.params)
      chairsrunningorderemodelTask.find(req.params)
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

  