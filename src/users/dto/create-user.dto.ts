import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

export class CreateUserDto {
    readonly userName: String;
    readonly firstName: String;
    readonly lastName: String;
}

@ObjectType()
export class UserType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly userName: string;
  @Field(() => Int)
  readonly firstName: number;
  @Field()
  readonly lastName: string;
}