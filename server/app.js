const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

//ROUTERS
const globalErrorHandler = require('./controllers/errorController');
const requestRouter = require('./routes/requestRoutes');
const userRouter = require('./routes/userRoutes');

app.use("/api/v1/user", userRouter);
app.use("/api/v1/requests", requestRouter);

// If the route does not match any of the above routes, code will reach here.
// Then call this func for all HTTP method
app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}`, 404));
});

// Need to add err to catch it
app.use(globalErrorHandler);


module.exports = app;