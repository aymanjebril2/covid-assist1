
import mongoose from "mongoose";
import validator from 'validator';
import bcrypt from 'bcrypt'
const isEmail =validator.isEmail
const Schema = mongoose.Schema;
const User = new Schema({
  firstName: { type: String,  required: [true,'please enter a First Name ' ]},
  lastName:{ type: String,  required: [true,'please enter a Last Name ' ] },
  email:{ type:String , required: [true,'please enter an Email ' ] , unique: true,lowercase:true ,validate:[isEmail,'plase enter valid Email'] },
  password:{ type: String,  required:[true,'please enter a password ' ], minlength:[6 ,"Minimum password length is 6 Characters"]},

},   { timestamps: true })
User.post("save",(doc,next)=>{
console.log("user created and saved" ,doc)
next()
})

User.pre("save",async  function (next){
    const salt =  await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password,salt)
console.log("before user create ",this)
next()
})


export default mongoose.model("user", User);