var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sequelize = require('./config/database')
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var exercisesRouter = require('./routes/exercises');
var workoutsRouter = require('./routes/workouts');
var usersWorkoutsRouter = require('./routes/users_workouts');
var workoutsExercisesRouter = require('./routes/workouts_exercises');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);
app.use('/workouts', workoutsRouter);
app.use('/users_workouts', usersWorkoutsRouter);
app.use('/workouts_exercises', workoutsExercisesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

sequelize.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("ERROR : " + err));

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

Workouts = require('./models/workouts');
Exercises = require('./models/exercises');
Users = require('./models/users');
Workouts.belongsToMany(Exercises, { through: 'Workout_Exercises' });
Exercises.belongsToMany(Workouts, { through: 'Workout_Exercises' });
Users.belongsToMany(Workouts, { through: 'Users_Workouts' });
Workouts.belongsToMany(Users, { through: 'Users_Workouts' });

sequelize.sync({ alter: true }).then(() => {
  console.log("Database structure updated")
})

module.exports = app;