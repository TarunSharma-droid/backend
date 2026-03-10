import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
    { 
        content : {
            type : String,
            required : true,

        },

        complete : {
            type : Boolear,
            default : false , // default ko kahi bhi laga skte hain ji.
        },

        createdBy : {
            type : mongoose.Schema.Types.ObjectID,    // use to make reference
            ref : "User" // reference diya hai
        },

        subTodos : { // Array of subTodos
            type : [ {tyre : mongoose.Schema.Types.ObjectID, 
                      ref : "subTodo" }]
        }
    },

    { timestamp : true}
)

export const Todo = mongoose.model("Todo",todoSchema)


// SubTodo belongs to Todo and Todo belongs to User.
/* User
    └── Todo
        └── SubTodo */