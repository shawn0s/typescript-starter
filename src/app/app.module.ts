import { Module,NestModule, MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../app/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from '../app/cats/cats.module';
import { AuthGuard } from './auth/auth.guard';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest'),
            UsersModule,
            CatsModule,
            GraphQLModule.forRoot({
              autoSchemaFile: 'schema.gql',
            }),
          ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthGuard)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }

}
