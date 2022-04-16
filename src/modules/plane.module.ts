import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { PlanesResolver } from '../resolvers/planes.resolver'

@Module({
  imports: [],
  providers: [PlanesResolver, PrismaService],
})
export class PlanesModule {}
