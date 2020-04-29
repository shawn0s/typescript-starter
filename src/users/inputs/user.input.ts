import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly userName: string;
  @Field(() => Int)
  readonly firstName: string;
  @Field()
  readonly lastName: string;
}
