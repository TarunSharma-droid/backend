// Har product ki ek category hoti hai to hum ko refernce dena hoga category model ka.

import mongoose from "mongoose"

const productSchema = new mongoose.Schema(

    {
        name : {
            type : String,
            required : true,
        },

        description : {
            type : String,
            required : true,
        },

        productImage : {
            type : String, // URL de denge image ka or image ko uplode karaadenge AWS bucket ya Clodinary pr...
        },                  // is se ye hoga ki mongoDB pr lode nhi padega.

        prise : {
            type : Number 
        },

        stock : {
            type : Number
        },

        category : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Category",
            required : true
        },

        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },

    {timestamp : true}

    )

export const Product = mongoose.model("Product",productSchema)