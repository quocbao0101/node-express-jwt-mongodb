export const swaggerOptions = {
  definition: {
    openapi: '3.0.3',
    info: {
      title:'Shop Management API',
      version:'snapshot',
    },
    // servers: [
    //   {
    //     url: `http://computershop1234.herokuapp.com`
    //   }
    // ],
    host: 'computershop0101.herokuapp.com',
    schemes: ['http'],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },
    },
    security: {
      bearerAuth: [],
  }
  },
  apis: ['./server/config/*.js'],
}