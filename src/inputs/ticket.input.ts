import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateTicketInput {
  @Field()
  userId: number

  @Field()
  planeId: number

  @Field()
  price: number
}
