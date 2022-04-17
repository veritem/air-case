import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Plane {
  @Field(type => ID)
  id: string

  @Field(type => String)
  name: string

  @Field(type => String, { nullable: true })
  createdAt: Date

  @Field(type => String)
  updatedAt: Date

  @Field(type => String)
  departureAirPort: string

  @Field(type => String)
  arrivalAirPort: string

  @Field(type => String)
  departureDate: string

  @Field(type => String)
  arrivalDate: string
}
