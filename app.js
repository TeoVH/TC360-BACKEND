/* IMPORTS */

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./services/db.js');

const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());

/* ROUTERS */
const routerHome = require('./routes/home.js');
app.use('/', routerHome);

const routerAuth = require('./routes/auth.js');
app.use('/auth', routerAuth);

const routerMembers = require('./routes/members.js');
app.use('/members', routerMembers);

/* SERVER */

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
