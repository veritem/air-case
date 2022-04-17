import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { TicketResolver } from 'src/resolvers/ticket.resolver'

@Module({
  imports: [],
  providers: [TicketResolver, PrismaService],
})
export class TicketModule {}
