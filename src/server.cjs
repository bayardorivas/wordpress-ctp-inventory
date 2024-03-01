const express = require("express");
const db = require("../db/connection.cjs");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.getConnection();
    this.middlewares();
    this.routes();
  }

  getConnection() {}
  middlewares() {}

  routes() {
    this.app.get("/api", (req, res) => {
      res.send("WordPress-CTP Inventory API!");
    });

    this.app.get("/api/sites", (req, res) => {
      //  Send all sites in Database
      const sql = "SELECT * from sites";
      let params = [];
      db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: "API hit Sites",
          data: rows,
        });
      });
    });

    this.app.get("/api/cores", (req, res) => {
      // List of Cores installed
      const sql = "SELECT * from cores";
      let params = [];
      db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: "API hit Cores",
          data: rows,
        });
      });
    });

    this.app.get("/api/themes", (req, res) => {
      // List of Themes installed
      const sql = "SELECT * from themes";
      let params = [];
      db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: "API hit Themes",
          data: rows,
        });
      });
    });

    this.app.get("/api/plugins", (req, res) => {
      // List of Plugins installed
      const sql = "SELECT * from plugins";
      let params = [];
      db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({ error: err.message });
          return;
        }
        res.json({
          message: "API hit Plugins",
          data: rows,
        });
      });
    });

    // Default response for any other request
    this.app.use(function (req, res) {
      res.status(404).send("Page not found");
    });
  }

  listen() {
    this.app.listen(this.port, () =>
      console.log("Server running on port ", this.port)
    );
  }
}

module.exports = Server;
