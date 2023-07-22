import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userschema = new Schema({
    MovieName:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Year:{
        type:String,
        required:true
    },
    Rating:{
        type:String,
        required:true
    },
   
},{timestamps:true} )
export default mongoose.model('User',userschema)