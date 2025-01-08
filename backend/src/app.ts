import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import routes from './routes/index';

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use('/api', routes);

connectDB();

export default app;