require("dotenv").config();
const express = require("express");
const {
  notFound: notFoundMiddleware,
  errorHandler: errorHandlerMiddleware,
} = require("./middlewares");
const mainRouter = require("./routes/main");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1", mainRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

app.listen(PORT, () => console.log("Listening on server", PORT));
