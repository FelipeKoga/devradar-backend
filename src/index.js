const express = require("express");
const moongose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");
const { setupWebSocket } = require("./websocket");

const app = express();
const server = http.Server(app);
setupWebSocket(server);

const driver =
  "mongodb+srv://koga:password@cluster-wt5xn.mongodb.net/week10?retryWrites=true&w=majority";

moongose.connect(driver, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);
server.listen(3333);
