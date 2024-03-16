const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const errorHandler = require("errorhandler");
const mongoose = require("mongoose");

function configureExpress(app) {
  // Middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(errorHandler());
  // app.use(morgan("combined"));
  app.use(helmet());

  return app;
}

module.exports = configureExpress;
