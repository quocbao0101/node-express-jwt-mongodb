export const swaggerOptions = {
  definition: {
    openapi: '3.0.3',
    info: {
      title:'Users Management API',
      version:'snapshot',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`
      }
    ],
  },
  apis: ['./server/config/*.js'],
}