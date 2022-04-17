import { Inject } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreatePlaneInput } from 'src/inputs/plane.inputs'
import { Plane } from 'src/models/plane.model'
import { PrismaService } from 'src/prisma.service'

@Resolver(Plane)
export class PlanesResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => [Plane], { name: 'planes' })
  async Allplanes() {
    return this.prismaService.plane.findMany()
  }

  @Query(() => Plane, { name: 'plane' })
  async Planed(@Args('id') id: number) {
    return this.prismaService.plane.findUnique({ where: { id } })
  }

  @Mutation(() => Plane, { name: 'createPlane' })
  async CreatePlane(@Args('data') data: CreatePlaneInput) {
    return this.prismaService.plane.create({
      data: {
        name: data.name,
        departureAirPort: data.departureAirPort,
        arrivalAirPort: data.arrivalAirPort,
        departureDate: data.departureDate,
        arrivalDate: data.arrivalDate,
      },
    })
  }

  @Mutation(() => Plane, { name: 'updatePlane' })
  async UpdatePlane(
    @Args('id') id: number,
    @Args('data') data: CreatePlaneInput,
  ) {
    return this.prismaService.plane.update({
      where: { id },
      data: {
        name: data.name,
        departureAirPort: data.departureAirPort,
        arrivalAirPort: data.arrivalAirPort,
        departureDate: data.departureDate,
        arrivalDate: data.arrivalDate,
      },
    })
  }

  @Mutation(() => Plane, { name: 'deletePlane' })
  async DeletePlane(@Args('id') id: number) {
    return this.prismaService.plane.delete({ where: { id } })
  }
}
