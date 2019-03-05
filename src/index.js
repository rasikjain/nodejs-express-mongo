import 'dotenv/config';
import express from 'express';
import cors from 'cors';

var port = parseInt(process.env.PORT_NUMBER) || 4000;
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('App listening on port: ' + port);
});
