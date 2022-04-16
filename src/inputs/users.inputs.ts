import { Field, InputType } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'

@InputType()
export class SignupInput {
  @Field()
  names: string

  @Field()
  @IsEmail()
  email: string

  @Field()
  password: string
}
