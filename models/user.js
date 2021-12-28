const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  lastName: {type: String, required: true},
  country: {type: String, requiere: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  age: {type: Number, required: true},
  gender: {type: String, required: true},
  uniqueString:{type: String, required: true},
  emailVerified:{type: Boolean,required: true},
  image: {type: String, required: true},
  google: {type: Boolean, default: false},
  admin: {type: Boolean, default: false},
})

const User = mongoose.model("user", userSchema)

module.exports = User
