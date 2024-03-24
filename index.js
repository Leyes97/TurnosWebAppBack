import Express from 'express';
import db from './db/index.js';
import models from './models/index.js';
const app = Express();
const PORT = 8080;

db.sync({ force: false }).then(() => {
  console.log('db Connected');
  const server = app.listen(PORT, () =>
    console.log(`Server listening at port ${PORT}`),
  );
  server.on('error', (error) => console.log('Error', error));
});
