import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInput } from './inputs/user.input';
import { User } from './interface/user.interface';




@Injectable()
export class UsersService {
  //constructor(@InjectConnection('user') private connection: Connection) {}
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async createQL(createUserDto: UserInput): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}

