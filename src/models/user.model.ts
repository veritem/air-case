import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => ID)
  id: string

  @Field(() => String)
  email: string

  @Field(() => String)
  names: string

  @Field(() => String, { nullable: true })
  password: string

  @Field(() => String)
  createdAt: Date

  @Field(() => String)
  updatedAt: Date
}
