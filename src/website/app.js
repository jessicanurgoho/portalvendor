require('dotenv').config({
  path: `./env-files/${process.env.NODE_ENV || 'development'}.env`,
});

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const RedisStore = require('connect-redis')(session);

// const initAuthMiddleware = require('./features/login/init-auth-middleware');

// INII
var indexRouter = require('./routes/index');
// var kebutuhan_Router = require('./routes/manage-kebutuhan');
// var registrasivendorRouter = require('./routes/registrasivendor');
// var registrasivendorRouter = require('./routes/registrasivendor1');

// const redisStoreConfig = {
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
// };

// if (process.env.REDIS_URL) {
//   redisStoreConfig.url = process.env.REDIS_URL; // this will use the REDIS_URL required for logging into the Redis addon provided by Heroku
// }

// if (process.env.REDIS_PASSWORD) {
//   redisStoreConfig.password = process.env.REDIS_PASSWORD; // this will use the REDIS_PASSWORD if required
// }

// const redisStore = new RedisStore(redisStoreConfig);

//const staticFolder = process.env.NODE_ENV === 'development' ? 'public' : 'dist';
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// const { COOKIE_EXPIRATION_MS } = process.env;
// app.use(
//   session({
//     store: redisStore,
//     secret: 'keyboard cat',
//     name: process.env.SESSION_COOKIE_NAME,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: process.env.NODE_ENV === 'production',
//       expires: Date.now() + parseInt(COOKIE_EXPIRATION_MS, 10),
//       maxAge: parseInt(COOKIE_EXPIRATION_MS, 10),
//     },
//   })
// );

// initAuthMiddleware(app);

// Middleware used for setting error and success messages as available in _ejs_ templates
// app.use((req, res, next) => {
//   if (req.session) {
//     res.locals.messages = req.session.messages;
//     res.locals.userInfo = req.session.userInfo;
//     req.session.messages = {};
//   }
//   next();
// });

//INIII
app.use('/', indexRouter);
// app.use('/kebutuhan', kebutuhan_Router);
// app.use('/registrasivendor', registrasivendorRouter);
// app.use('/registrasivendor1', registrasivendorRouter);

// catch 404 and forward to error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(404).render('pages/404');
});

module.exports = app;
