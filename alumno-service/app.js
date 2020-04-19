var createError = require('http-errors' );
var express = require('express' );
var path = require('path');
var cookieParser = require('cookie-parser' );
var logger = require('morgan' );
var app = express();
var MongoDBUtil = require('./modules/mongodb/mongodb.module' ).MongoDBUtil ;
var AlumnoController = require('./modules/Alumno/Alumno.module' )().AlumnoController ;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded ({ extended: false }));
app.use(cookieParser ());
MongoDBUtil .init();
app.use('/alumnos' , AlumnoController );
app.get('/', function (req, res) {
var pkg = require(path.join(__dirname , 'package.json' ));
res.json({
name: pkg.name,
version: pkg.version,
status: 'up'
});
});
module.exports = app;