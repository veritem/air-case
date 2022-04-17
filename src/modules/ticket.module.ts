import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { TicketResolver } from '../resolvers/tickets.resolver'

@Module({
  imports: [],
  providers: [TicketResolver, PrismaService],
})
export class TicketModule {}
