require("dotenv").config();
const Server = require("./server.cjs");
const app = new Server();

app.listen();
