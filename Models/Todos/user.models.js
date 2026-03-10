// we have defined the name of this file as the user.models.js
// this suggests that this file denotes about model.
// This is a standard practise of writting the name of file in industries level.

import mongoose from "mongoose" // importing moongose library from node.js

const userSchema = new mongoose.Schema( // defining the schema

    {    name : {             // required , unique , lowercase are fields of moongoes
            type : String,
            required : true, // it means compulsory to fill
            unique : true,   // it means cannot take the repeated value
            lowercase : true, 
        } ,

        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true, // automatically converted
        },

        password : {
            type : String,
            required : [true, "password is required"], // required also accept array // this message will appear if password is not filled.
            unique : true,
            }
    },
      
    {timestamps : true} // repesents createdAt and updatedAt
)

export const User = mongoose.model("User",userSchema) // making model and connecting the model with databse
// User is the name model and it is based on the schema useerSchema
// Note the name of the model is User but in the database it is stored as Users.. it is basic practise of mongoDB.
// that means the name becomes plural by its own. But in case we take the name as plural by default then while saving in
// the database it does not becomes { i.e Users agage namm hai to vo Users he rahega , Userss nhi hoga }