import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './app/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './app/cats/cats.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'),
            UsersModule,
            CatsModule,
            GraphQLModule.forRoot({
              autoSchemaFile: 'schema.gql',
            }),
          ],
})
export class AppModule {}
