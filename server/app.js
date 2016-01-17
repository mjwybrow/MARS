var express = require('express')
  , path = require('path')
  , favicon = require('serve-favicon')
  , log = require('./utils/log')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , session = require('express-session')
  , MongoStore = require('connect-mongo')(session)
  , passport = require('passport')
  , passportSocketIo = require('passport.socketio');


/**
 * Express
 */
var app = express();

/**
 * MARS version info
 */
log.info('MARS 0.3.0');

/**
 * Logging using tracer
 */
log.debug('Using \'tracer\' instead of \'express\' for logging');
app.use(require('morgan')('dev', { stream: log.stream }));

/**
 * Mongoose
 */
mongoose.connect('mongodb://localhost/mars');
mongoose.Promise = require('bluebird');

/**
 * Models
 */
var Poll = require('./models/poll'),
    PollCollection = require('./models/poll-collection'),
    PollGroup = require('./models/poll-group'),
    Result = require('./models/result'),
    User = require('./models/user');

/**
 * Parsers
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


/**
 * Session using connect-mongo
 */
var sessionSecret = 'Lg\NHAfa$F%%`1:eQMD6 QiHYO*kW7b-c6#+' // CHANGE THIS ON PRODUCTION SERVER
var sessionStore = new MongoStore({ mongooseConnection: mongoose.connection });
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

/**
 * Passport
 */
app.use(passport.initialize());
app.use(passport.session());
require('./utils/passport.local.js')(User);

/**
 * Socket.io
 */
var io = require('socket.io')();
app.io = io;

/**
 * Passport Socket.io
 */
io.use(passportSocketIo.authorize({
  cookieParser: cookieParser,
  key: 'connect.sid',
  secret: sessionSecret,
  store: sessionStore,
  onAuthorizeFail: function (data, message, error, accept){
    log.error('data = ', data);
    log.error('message = ', message);
    log.error('error = ', error);
  }
}));

/**
 * View engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
 
/**
 * Routes 
 */
var pollsSocket = require('./routes/polls-socket')(
      io, 
      Poll, 
      PollCollection, 
      PollGroup,
      Result, 
      User
    ),
    auth = app.use('/', require('./routes/auth')(
      User
    ));  
    
/** 
 * Express boilerplate
 *
 */
    
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'client')));

//app.use('/polls', polls);
//app.use('/results', results);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/**
 * Error handlers
 */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;