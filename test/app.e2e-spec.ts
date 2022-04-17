import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('Graphql App Resolver', () => {
  let app: INestApplication
  const gql = '/graphql'

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  describe('Tickets', () => {
    it('should return all tickets', async () => {
      const query = `
      query {
        tickets {
          id
          userId
          planeId
          price
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })
  })

  describe('Users', () => {
    it('should return all users', async () => {
      const query = `
      query {
        users {
          id
          names
          email
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })
  })

  describe('Planes', () => {
    it('should return all planes', async () => {
      const query = `
      query {
        planes {
          id
          arrivalDate
          updatedAt
          arrivalAirPort
          departureDate
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })
  })
})
