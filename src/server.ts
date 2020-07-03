import express from 'express';
import routes from './routes';

const app = express();

app.get('/', (request, response) =>
  response.json({ message: 'hello world!!!' }),
);

app.listen(3333, () => {
  console.log('Servidor subiu');
});
