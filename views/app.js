console.log("PACKAGES");

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sequelize = require('./config/database')
const cors = require('cors');
const session = require('express-session');
const Store = session.Store;

console.log("ROUTES");

const auth = require('./routes/auth');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');
const workoutsRouter = require('./routes/Workouts');
const usersWorkoutsRouter = require('./routes/users_workouts');
const workoutsExercisesRouter = require('./routes/workouts_exercises');

console.log("WORKOUT");
const Workouts = require('./models/workouts');
console.log("EXERCISES");
const Exercises = require('./models/exercises');
console.log("USERS");
const Users = require('./models/users');

Workouts.belongsToMany(Exercises, { through: 'Workout_Exercises' });
Exercises.belongsToMany(Workouts, { through: 'Workout_Exercises' });
Users.belongsToMany(Workouts, { through: 'Users_Workouts' });
Workouts.belongsToMany(Users, { through: 'Users_Workouts' });

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  maxAge: 500,

}));

app.use('/', indexRouter);
app.use('/auth', auth);
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






sequelize.sync({ alter: true }).then(() => {
  console.log("Database structure updated")
  app.listen(3000, () => {
    console.log("Server started on port 3000")
  });
})

module.exports = app;