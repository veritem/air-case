import { Query, Resolver } from '@nestjs/graphql'

/**
 * This makes apollo server never throw an error on startup.
 */

@Resolver()
export class RootResolver {
  @Query(() => String)
  hello(): string {
    return 'Hello World!'
  }
}
