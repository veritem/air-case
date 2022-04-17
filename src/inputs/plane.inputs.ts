import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreatePlaneInput {
  @Field()
  name: string

  @Field()
  departureAirPort: string

  @Field()
  arrivalAirPort: string

  @Field()
  departureDate: Date

  @Field()
  arrivalDate: Date
}
