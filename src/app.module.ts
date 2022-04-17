import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { PlanesModule } from './modules/plane.module'
import { TicketModule } from './modules/ticket.module'
import { UsersModule } from './modules/users.module'
import { RootResolver } from './resolvers/RootResolver'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      playground: true,
      introspection: true,
      driver: ApolloDriver,
    }),
    UsersModule,
    PlanesModule,
    TicketModule,
  ],
  controllers: [],
  providers: [RootResolver],
})
export class AppModule {}
