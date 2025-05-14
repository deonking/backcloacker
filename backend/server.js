import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';
import cloakerRoutes from './routes/cloakerRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado com sucesso.'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/cloaker', cloakerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
