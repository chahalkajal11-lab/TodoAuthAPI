import Todo from "../Module/TodoModule.js";

export const getAllTodos = async(req,res)=>{
    try {
        const AllTodos = await Todo.find()
        
        res.status(200).json({
            status:"Success",
            message:"Todos aree here....",
            data:AllTodos
        })
        
    } catch (error) {
          res.status(400).json({
          status: "Fail",
          message: `Error:${error.message}`
    });
    }
}

export const addTodos = async(req,res)=>{
    try {
        const {task,title} = req.body
        const addTodos = await Todo.insertOne({
            title,
            task
        })
        res.status(200).json({
            status:"Success",
            message:"Todos successfully added....",
            data:addTodos
        })
        
    } catch (error) {
          res.status(400).json({
          status: "Fail",
          message: `Error:${error.message}`
    });
    }
}

export const deleteTodos = async(req,res)=>{
    try {
      
        const {id} = req.params

          const deleteTodos = await Todo.findByIdAndDelete(id)

        if(!deleteTodos){
         return res.status(400).json({
            status:"Fail",
            message:`Todo not found...`,
        })  
        }
        res.status(200).json({
            status:"Success",
            message:"Todos successfully deleted...",
            delete: deleteTodos
        })
        
    } catch (error) {
          res.status(400).json({
          status: "Fail",
          message: `Error:${error.message}`
    });
    }
}

export const updateTodos = async(req,res)=>{
    try {
        const {id} = req.params
        const {task,title} = req.body
        const updateTodos = await Todo.findByIdAndUpdate(id,{
            title,
            task
        },
        {
            returnDocument:true
        }
    )
      if(!updateTodos){
        return res.status(400).json({
            status:"Fail",
            message:"Todo not found"
        })
        
      }
        res.status(200).json({
            status:"Success",
            message:"Todos successfully updated...",
            data: updateTodos
        })
        
    } catch (error) {
          res.status(400).json({
          status: "Fail",
          message: `Error:${error.message}`
    });
    }
}