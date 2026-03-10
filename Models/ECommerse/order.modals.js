
import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema(
    {
        productID : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Product"
        },

        quantity : {
            type :Number,
            required : true,
        }
    }
)

const orderSchema = new mongoose.Schema(

    {
        orderPrice: {
            type : String,
            required : true,
        },

        customer : {
            type : mongoose.Schema.Types.ObjectId,
            ref  : "User"
        },

        orderItems : {
            type : [orderItemsSchema]  // defined as array as thier can be multiple product with differnt quantities.
        },

        address : {
            type : String,
            required : true,
        },

        orderStatus : {
            type : String,
            enum : ["Pending", "Cancelled", "Delivered"], // we can restricted to choose type : String from these three values only.
            default : "Pending"
        }

    },
    { timestamps :  true}
)

export const Order = mongoose.model("Order",orderSchema)

// orderItems should have multiple data fields such as product type, quantity of each 
// product type (an order can contain many products) . Hence we have defined a 
// separate database for the orderItems