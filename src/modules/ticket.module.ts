import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TicketResolver } from 'src/resolvers/tickets.resolver'

@Module({
  imports: [],
  providers: [TicketResolver, PrismaService],
})
export class TicketModule {}
