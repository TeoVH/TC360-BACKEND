/* IMPORTS */

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
require('dotenv').config();
require('./services/db.js');
const cors = require('cors');

const app = express();
app.use(cors());

// sessions
app.use(session({
  secret: (process.env.URI),
  resave: false,
  saveUninitialized: false,
  name: "secret-name-test"
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, {email: user.email})); //req.user

passport.deserializeUser((email, done) => {
  User.findOne(email, (err, user) => {
    done(err, user);
  });
});

app.use(bodyParser.json());

/* ROUTERS */
const routerHome = require('./routes/home.js');
app.use('/', routerHome);

const routerAuth = require('./routes/auth.js');
app.use('/auth', routerAuth);

const routerMembers = require('./routes/members.js');
const User = require('./models/User.js');
app.use('/members', routerMembers);

const routerEvent = require('./routes/event.js');
const Event = require('./models/Event.js')
app.use('/event', routerEvent);
app.use('event', routerEvent);

const routeInvite = require('./routes/invite.js');
const Invite = require('./models/Invite');
app.use('/invite', routeInvite);

/* SERVER */

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
