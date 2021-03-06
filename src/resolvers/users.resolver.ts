import { HttpException, HttpStatus, Inject } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { SignupInput } from '../inputs/users.inputs'
import { User } from '../models/user.model'
import { PrismaService } from '../prisma.service'
import { hashPassword, validatePassword } from '../utils/util-funcs'

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => [User], { name: 'users' })
  async Allusers() {
    return this.prismaService.user.findMany()
  }

  @Query(() => User, { name: 'user' })
  async User(@Args('id') id: number) {
    return this.prismaService.user.findUnique({ where: { id } })
  }

  @Mutation(() => User, { name: 'signup' })
  async Signup(@Args('data') data: SignupInput) {
    const userExists = await this.prismaService.user.findFirst({
      where: {
        email: data.email,
      },
    })

    if (userExists) {
      throw new HttpException('Email already Exists', HttpStatus.BAD_REQUEST)
    }

    return this.prismaService.user.create({
      data: {
        names: data.names,
        email: data.email,
        password: await hashPassword(data.password),
      },
    })
  }

  @Mutation(() => User, { name: 'login' })
  async Login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user = await this.prismaService.user.findFirst({
      where: {
        email,
      },
    })

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    const isValid = validatePassword(password, user.password)

    if (!isValid) {
      throw new HttpException('Invalid Password', HttpStatus.BAD_REQUEST)
    }

    return user
  }

  @Mutation(() => User, { name: 'updateUser' })
  async UpdateUser(@Args('id') id: number, @Args('data') data: SignupInput) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    })

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        names: data.names,
        email: data.email,
        password: await hashPassword(data.password),
      },
    })
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async DeleteUser(@Args('id') id: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    })

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return this.prismaService.user.delete({
      where: {
        id,
      },
    })
  }

  @Mutation(() => User, { name: 'updatePassword' })
  async UpdatePassword(
    @Args('id') id: number,
    @Args('password') password: string,
  ) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    })

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    return this.prismaService.user.update({
      where: {
        id,
      },
      data: {
        password: await hashPassword(password),
      },
    })
  }
}
