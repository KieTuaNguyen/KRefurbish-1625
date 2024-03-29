require('dotenv').config();
const express = require('express');
const app = express();

require('./database/Connect');
const users = require('./models/userSchema');
const cors = require('cors');
const router = require('./routes/router');

const port = process.env.PORT || 7703;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});