import express from "express";
import routes from './routes/index.js';
import db from "../db/connection.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.getConnection();
    this.middlewares();
    this.router();
  }

  getConnection() { }
  middlewares() { }

  router() {
    routes.forEach(({ path, route }) => {
      this.app.use(`/api/${path}`, route)
    })
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log("Server running on port ", this.port)
    );
  }
}

export default Server;
