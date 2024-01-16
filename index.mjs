import express from 'express'
import PostRoutes from './routes/posts.mjs'
import AuthRoutes from './routes/AuthRoutes.mjs'
import dbConnection from './db/index.mjs'
import cors from "cors";

dbConnection.on('error', () => console.log('DB connect error'));
dbConnection.on('connected', () => console.log('DB connect'));

const app = express()
const port = 4000

app.use(express.json());
app.use(cors({ origin: process.env.CORS_ALLOW }));


app.get('/', (req, res) => {
    res.send('<h3>Hello World!</h3>')
});

app.use('', PostRoutes);
app.use('', AuthRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

