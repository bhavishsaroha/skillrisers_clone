import mongoose,{ SchemaTypes } from "mongoose";

const UserSchema = mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true }
});

export const LoginModel = mongoose.model('Login', UserSchema);

