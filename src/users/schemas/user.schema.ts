import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  userName:String,
  firstName:String,
  lastName:String,
},{ collection: 'user', versionKey: false },);