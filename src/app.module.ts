import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { RootResolver } from './resolvers/RootResolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      playground: true,
      introspection: true,
      driver: ApolloDriver,
    }),
  ],
  controllers: [],
  providers: [RootResolver],
})
export class AppModule {}
