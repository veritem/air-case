import { Inject } from '@nestjs/common'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { PrismaService } from 'src/prisma.service'
import { User } from '../models/user.model'

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(returns => [User], { name: 'users' })
  async Allusers() {
    return this.prismaService.user.findMany()
  }

  @Query(returns => User, { name: 'user' })
  async User(@Args('id') id: number) {
    return this.prismaService.user.findUnique({ where: { id } })
  }
}
