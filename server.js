import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes/index'
import dotenv from 'dotenv';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 4000;
const serverHandler = () => {
  console.log('서버 가동 ON PORT: ', PORT);
};

app.use(cors({
  origin: '*',
  credentials: false,
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(helmet());
router(app);

app.listen(PORT, serverHandler);