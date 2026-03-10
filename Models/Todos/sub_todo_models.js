// subtodo.model.js stores small tasks inside a todo.

import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema(
    {
        content : {
            type : String,
            required : true,
        },

        complete : {
            type : Boolean,
            default : false,
        },

        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },

    { timestamp : true}
)

export const subTodo = mongoose.model("subTodo",subTodoSchema)
