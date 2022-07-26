import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import usersRouter from './server/routes/users.js';
import authRouter from './server/routes/auth.js';
import menuRouter from './server/routes/menu.js';
import productRouter from './server/routes/product.js';
import categoryRouter from './server/routes/category.js';
import cors from 'cors';
import 'dotenv/config'
import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { swaggerOptions } from './swagger.js';
import unless from 'express-unless';
import authenticateToken from './server/middlewares/authen.js';
import { errorHandler } from './server/middlewares/errors.js';

const swaggerDocs = swaggerJsdoc(swaggerOptions);
const PORT = process.env.PORT;
const URL = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(
      URL,
      { useNewUrlParser: true, useUnifiedTopology: true, name: 'sample_restaurants' }
    )
    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
authenticateToken.unless = unless;
const app = express();
authenticateToken.unless = () => ({path: ['/signin'] });
connectDB();
// config
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));
app.use(errorHandler);
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// load router
app.use("/api/users", usersRouter);
app.use("/api", authRouter)
app.use("/api/menu", menuRouter);
app.use("/api/category", categoryRouter);
app.use("/api/products", productRouter);


app.listen((PORT || 3000), () => console.log(`Server running on port: http://localhost:${PORT}`))