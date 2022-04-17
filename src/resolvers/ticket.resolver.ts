import { Inject } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateTicketInput } from 'src/inputs/ticket.input'
import { Ticket } from 'src/models/ticket.model'
import { PrismaService } from 'src/prisma.service'

@Resolver(Ticket)
export class TicketResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => [Ticket])
  async tickets() {
    return this.prismaService.ticket.findMany({
      include: {
        plane: true,
        user: true,
      },
    })
  }

  @Query(() => Ticket)
  async ticket(@Args('id') id: number) {
    return this.prismaService.ticket.findUnique({
      where: { id },
      include: {
        plane: true,
        user: true,
      },
    })
  }

  @Mutation(() => Ticket)
  async createTicket(@Args('data') data: CreateTicketInput) {
    return this.prismaService.ticket.create({
      data: {
        userId: data.userId,
        planeId: data.planeId,
        price: data.price,
      },
      include: {
        plane: true,
        user: true,
      },
    })
  }

  @Mutation(() => Ticket)
  async updateTicket(
    @Args('id') id: number,
    @Args('data') data: CreateTicketInput,
  ) {
    return this.prismaService.ticket.update({
      where: { id },
      data: {
        userId: data.userId,
        planeId: data.planeId,
        price: data.price,
      },
      include: {
        plane: true,
        user: true,
      },
    })
  }

  @Mutation(() => Ticket)
  async deleteTicket(@Args('id') id: number) {
    return this.prismaService.ticket.delete({
      where: { id },
      include: { plane: true, user: true },
    })
  }
}
