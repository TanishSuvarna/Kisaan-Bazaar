import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        trim:true,
        required:true
    },
    productOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Seller",
        required:true
    },
    basePrice:{
        type:String,
        required:true,
    },
    currentBid:{
        type:String,
        default:0
    },
    currentBidWinner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Buyer"
    },
    AuctionStartTime:{
        type:Date,
        required:true
    },
    AuctionEndTime:{
        type:Date,
        required:true
    },
    bidEnded:{
        type:Boolean,
        default:false
    }
    
},{timestamps:true});

buyerSchema.virtual("fullName")
.get(function () {return `${this.firstName} ${this.lastName}`});

//Create Hash For The Password On Receiving And Store it in Database

// userSchema.virtual("password")
// .set(function(){
//     bcrypt.hash(password , 10 , function (err , hash){
//         this.hash_password = hash;
//     }); 
// })

//Verify Password
buyerSchema.methods = {
    authenticate:async function (password){
        return await bcrypt.compare(password, this.hash_password);
    }
}

export default mongoose.model("Product", productSchema);