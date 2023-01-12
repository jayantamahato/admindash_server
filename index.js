import express from 'express'
import cors from 'cors'
import router from './routes/route.js';
import connection from './database/dbConfig.js';
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', router);
connection();
const PORT = 8500
app.listen(PORT, () => { console.log(`App is runing on port no : ${PORT}`) })