import Express from 'express';
import db from './db/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import models from './models/index.js';
import routes from './routes/index.js';
const app = Express();
const PORT = 8080;

app.use(
  cors({
    origin: 'https://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  }),
);

app.use(Express.json());

app.use(cookieParser());

app.use((req,res,next) => {
  res.header('Content-Type', 'application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use("/api", routes);

db.sync({ force: false }).then(() => {
  console.log('db Connected');
  const server = app.listen(PORT, () =>
    console.log(`Server listening at port ${PORT}`),
  );
  server.on('error', (error) => console.log('Error', error));
});
