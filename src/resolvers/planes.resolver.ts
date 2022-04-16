import { Inject } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'
import { Planet } from 'src/models/plane.model'
import { PrismaService } from 'src/prisma.service'

@Resolver(Planet)
export class PlanesResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(returns => [Planet], { name: 'planes' })
  async Allplanets() {
    return this.prismaService.plane.findMany()
  }
}
