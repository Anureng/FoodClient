import { Schema , model , models } from "mongoose";

const UserSchema = new Schema({
    email:{type: "string",require:true , unique : true} ,
    name:{type: "string",require:true },
    image:{type: "string"}
})

const User =  models.User || model('User',UserSchema)

export default User