import bodyParser from 'body-parser';
import express from 'express';
import Menu from './model/Menu.js';
import routes from './routes/index.js';
import cors from 'cors';
import data from './model/data.js';

const app = express();

try {
  await data.authenticate();
  Menu.sync({ alter: true });
  console.log('database connected');
} catch (err) {
  console.error(`unable to connect: ${err}`);
}

app.use(cors());
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(routes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});
