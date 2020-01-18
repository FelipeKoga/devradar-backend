const express = require("express");
const moongose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();

const driver = "mongodb+srv://koga:<password>@cluster-wt5xn.mongodb.net/test?retryWrites=true&w=majority";

moongose.connect(driver, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(routes);
app.listen(3333);
