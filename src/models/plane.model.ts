import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Plane {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String, { nullable: true })
  createdAt: Date

  @Field(() => String)
  updatedAt: Date

  @Field(() => String)
  departureAirPort: string

  @Field(() => String)
  arrivalAirPort: string

  @Field(() => String)
  departureDate: string

  @Field(() => String)
  arrivalDate: string
}
