    import mongoose from "mongoose";

 export const todo = mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    task: {
        type: String,
        required: true
    }
    
}, 
   
);

const Todo = mongoose.model("Todo", todo);

export default Todo;