require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const routes = require('./routes');
const startBot = require('./bot');
const Database = require('./db');

app.use('/api', routes);
app.use(bodyParser.json());
app.listen(process.env.PORT, async () => {
  console.log(`HTTP Server listening on ${process.env.PORT}`);
  await Database.connect();
  console.log(`Connected to MongoDB: ${process.env.DATABASE_NAME}`);
  startBot();
});