const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const AppError = require("./utils/appError");

const app = express();

app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  credentials: true,
}));

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
app.all('*splat', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}`, 404));
});

// Need to add err to catch it
app.use(globalErrorHandler);


module.exports = app;