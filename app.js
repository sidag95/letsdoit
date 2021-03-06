require('dotenv').load();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var uglifyJs = require("uglify-js");
var fs = require('fs');
var passport = require('passport');
require('./app_api/models/db');
require('./app_api/config/passport');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

// var users = require('./app_server/routes/users');
app.use(passport.initialize());
var routesApi = require('./app_api/routes/route.api.tasks');

// app.use('/', routes);
// app.use('/users', users);
app.use('/api', routesApi);

app.use('*',function(req, res) {
res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});


var appClientFiles = [
  'app_client/app.js',
  'app_client/common/services/letsdoitData.service.js',
  'app_client/lists/lists.controller.js',
  'app_client/common/directives/footerGeneric/footerGeneric.directive.js',
  'app_client/common/directives/navigation/navigation.directive.js',
  'app_client/common/directives/pageHeader/pageHeader.directive.js',
  'app_client/about/about.controller.js',
  'app_client/common/filters/addHtmlLineBreaks.filter.js',
  'app_client/taskDetailsEdit/taskDetailsEdit.controller.js',
  'app_client/addTaskModal/addTaskModal.controller.js',
  'app_client/common/services/authentication.service.js',
  'app_client/auth/register/register.controller.js',
  'app_client/auth/login/login.controller.js',
  'app_client/common/directives/navigation/navigation.controller.js'
];

var uglified = uglifyJs.minify(appClientFiles, {compress : false});

fs.writeFile('public/angular/letsdoit.min.js', uglified.code, function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log('Script generated and saved : letsdoit.min.js')
  }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
if (err.name === 'UnauthorizedError') {
res.status(401);
res.json({"message" : err.name + ": " + err.message});
}
});
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      title: err.message,
      content: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: err.message,
    content: {}
  });
});


module.exports = app;
