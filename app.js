/* IMPORTS */

const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./services/db.js');
const app = express();
app.use(bodyParser.json());

/* ROUTERS */
const routerHome = require('./routes/home.js');
app.use('/', routerHome)

const routerAuth = require('./routes/auth.js');
app.use('/auth', routerAuth);

/* SERVER */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});