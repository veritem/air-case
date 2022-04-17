import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Plane } from './plane.model'
import { User } from './user.model'

@ObjectType()
export class Ticket {
  @Field(type => ID)
  id: string

  @Field(type => String)
  userId: number

  @Field(type => String)
  planeId: number

  @Field(type => Number)
  price: number

  @Field(type => Plane)
  plane: Plane

  @Field(type => User)
  user: User

  @Field(type => String, { nullable: true })
  createdAt: Date

  @Field(type => String)
  updatedAt: Date
}
