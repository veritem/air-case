import { Inject } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma.service';
import { User } from '../models/user.model';

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  //   @Query(() => [User], { nullable: false, name: 'getAllusers' })
  //   async Allusers(@Context() ctx) {
  //     return this.prismaService.user.findMany();
  //   }
}
