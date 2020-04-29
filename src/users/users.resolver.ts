
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from "./users.service";
import { UserType } from "./dto/create-user.dto";
import { UserInput } from "./inputs/user.input";

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}
    
    @Query(() => String)
    async hello() {
      return 'hello';
    }

    @Query(() => [UserType])
    async cats() {
        return this.usersService.findAll();
    }

    @Mutation(() => UserType)
    async createCat(@Args('input') input: UserInput) {
        return this.usersService.createQL(input);
    }

}