import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  email: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String, { nullable: true })
  password: string;

  @Field((type) => String)
  createdAt: Date;

  @Field((type) => String)
  updatedAt: Date;
}
