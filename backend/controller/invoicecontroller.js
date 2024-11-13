
const invoicemodelTask = require('../model/invoicemodel');

  
  exports.createinvoiceTask = async (req, res) => {

    try {
      // get the task from the body
      const taskData = await req.body;
      //create a new task then save
      await invoicemodelTask.create(taskData)
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
  exports.getinvoiceTask = async (req, res) => {
    //get all the data in the model and return it as response
    try {
        invoicemodelTask.find()
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

 
  exports.updateinvoice = async (req, res) => {
    
    try {
     
      const taskData = await req.body;
      const { RecieptNumber } = taskData.invoice;
    //  console.log(RecieptNumber);
     // console.log(taskData.invoice);
     // console.log(taskData.productprice);
      // Ensure that id and updateData are provided
      // if (!RecieptNumber || !taskData) {
      //   return res.status(400).json({
      //     success: false,
      //     message: "Missing id or update data"
      //   });
      // }
        // Perform the update operation
        const result = await invoicemodelTask.updateOne({ RecieptNumber: RecieptNumber }, taskData.invoice);
    
        if (result.nModified === 0) {
          return res.status(404).json({
            success: false,
            message: "Document not found or no changes made"
          });
        }
      
        res.status(200).json({
          success: true,
          message: "Document updated successfully",
          result
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "Internal server error",
          error: error.message
        });
      }
    }
  exports.getinvoicebydateTasks = async (req, res) => {
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
   exports.getinvoicebydateTasks2 = async (req, res) => {
    //const {startDateTime } = req.params.startDateTime;
    //const {endDateTime } = req.params;
  // console.log(req.params);
   // console.log(endDateTime);
    try {                                                              
        const results = await invoicemodelTask.find({
          
            createdAt: { $lte: new Date( req.params) }
        });
        res.json(results);
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
     
   }

   exports.getinvoicebyidTasks = async (req, res) => {
    try {
      //console.log(req.params)
        invoicemodelTask.find(req.params)
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

  