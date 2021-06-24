import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const handleErorr =(err)=>{
    console.log(err.message, err.code);
   let errors = {
    firstName:"",
    lastName :"",
    email:"",
    password:""
   }
   if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}
const maxAge  = 3 * 24 * 60 * 60 ;
const createToken =(id)=>{
return jwt.sign({id},"aymanomer",{
    expiresIn: maxAge
})
}

const createNewUser = async (req,res)=>{
console.log(req.body)
const {firstName ,lastName ,email,password}=req.body
try {
   const user = await  User.create({
    firstName,
    lastName ,
    email,
    password
   })
 const token = createToken(user._id)
 res.cookie("jwt",token ,{ httpOnly : true ,maxAge:maxAge * 1000 })
   res.status(201).json({user: user._id})
} catch (err) {
    
    const errors = handleErorr(err);
    res.json({errors})
}

}



export default {createNewUser}