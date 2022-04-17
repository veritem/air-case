import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Plane } from './plane.model'
import { User } from './user.model'

@ObjectType()
export class Ticket {
  @Field(() => ID)
  id: string

  @Field(() => String)
  userId: number

  @Field(() => String)
  planeId: number

  @Field(() => Number)
  price: number

  @Field(() => Plane)
  plane: Plane

  @Field(() => User)
  user: User

  @Field(() => String, { nullable: true })
  createdAt: Date

  @Field(() => String)
  updatedAt: Date
}
