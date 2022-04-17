import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { UserResolver } from '../resolvers/users.resolver'

@Module({
  imports: [],
  providers: [UserResolver, PrismaService],
})
export class UsersModule {}
