import { Document } from 'mongoose';


export interface User extends Document{
    readonly userName:String,
    readonly firstName:String,
    readonly lastName:String,
}

