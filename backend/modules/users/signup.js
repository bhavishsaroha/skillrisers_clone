import mongoose,{ SchemaTypes } from "mongoose";

const SignupSchema = mongoose.Schema({
  email: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true }
});


export const SignupModel = mongoose.model('Signup', SignupSchema);

