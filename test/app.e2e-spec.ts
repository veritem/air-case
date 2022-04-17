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

    it('should return a ticket by id', async () => {
      const query = `
      query {
        ticket(id: 1) {
          id
          userId
          planeId
          price
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })

    it('should create a ticket', async () => {
      const query = `
      mutation {
        createTicket(data: {
          userId: 1,
          planeId: 1,
          price: 100
        }) {
          id
          userId
          planeId
          price
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })

    it('should update a ticket', async () => {
      const query = `
      mutation {
        updateTicket(id: 1, data: {
          userId: 1,
          planeId: 1,
          price: 100
        }) {
          id
          userId
          planeId
          price
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })

    it('should delete a ticket', async () => {
      const query = `
      mutation {
        deleteTicket(id: 1) {
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

    it('should return a user by id', async () => {
      const query = `
      query {
        user(id: 1) {
          id
          names
          email
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })

    it('should create user', async () => {
      const query = `
      mutation {
        signup(data: {
          names: "John Doe"
          email: "john@doe.doe"
          password: "123456"
        }) {
          id
          names
          email
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })

    it('should update user', async () => {
      const query = `
      mutation {
        updateUser(id: 1, data: {
          names: "John Doe"
          email: "johndoe@gmail.com"
          password: "123456"
        }) {
          id
          names
          email
        }
      }
    `

      return request(app.getHttpServer()).post(gql).send({ query }).expect(200)
    })

    it('should delete user', async () => {
      const query = `
      mutation {
        deleteUser(id: 5) {
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

    it('should return a plane by id', async () => {
      const query = `
      query {
        plane(id: 1) {
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

    it('should create plane', async () => {
      const query = `
      mutation {
        createPlane(data: {
          arrivalDate: "2019-12-03T09:54:33Z"
          arrivalAirPort: "Bogota"
          departureAirPort: "Kanombe"
          name: "Airbus A320"
          departureDate: "2019-12-03T09:54:33Z"
        }) {
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

    it('should update plane', async () => {
      const query = `
      mutation {
        updatePlane(id: 1, data: {
          arrivalDate: "2019-12-03T09:54:33Z"
          arrivalAirPort: "Bogota"
          departureAirPort: "Kanombe"
          name: "Airbus A320"
          departureDate: "2019-12-03T09:54:33Z"
        }) {
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

    it('should delete plane', async () => {
      const query = `
      mutation {
        deletePlane(id: 7) {
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
