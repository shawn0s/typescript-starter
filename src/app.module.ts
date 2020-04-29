import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'),
            UsersModule,
            GraphQLModule.forRoot({
              autoSchemaFile: 'schema.gql',
            }),
          ],
})
export class AppModule {}
