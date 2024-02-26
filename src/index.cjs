const Express = require('express');
const db = require("../db/connection.cjs")

const app = Express();
const port = 3000;


app.get("/api", (req, res) => {
  res.send("WordPress-CTP Inventory API!");
});

app.get("/api/sites", (req, res) => {
  //  Send all sites in Database
  const sql = "SELECT * from sites";
  let params = [];
  db.all(sql,params, (err,rows) => {
    if (err) {
      res.status(400).json({"error": err.message})
      return;
    } 
    res.json({
      "message": "API hit Sites",
      "data": rows
    })
  })
});

app.get("/api/cores", (req, res) => {
  // List of Cores installed
  const sql = "SELECT * from cores";
  let params = [];
  db.all(sql,params, (err,rows) => {
    if (err) {
      res.status(400).json({"error": err.message})
      return;
    } 
    res.json({
      "message": "API hit Cores",
      "data": rows
    })
  })

});

app.get("/api/themes", (req, res) => {
  // List of Themes installed
  const sql = "SELECT * from themes";
  let params = [];
  db.all(sql,params, (err,rows) => {
    if (err) {
      res.status(400).json({"error": err.message})
      return;
    } 
    res.json({
      "message": "API hit Themes",
      "data": rows
    })
  })
});

app.get("/api/plugins", (req, res) => {
  // List of Plugins installed
  const sql = "SELECT * from plugins";
  let params = [];
  db.all(sql,params, (err,rows) => {
    if (err) {
      res.status(400).json({"error": err.message})
      return;
    } 
    res.json({
      "message": "API hit Plugins",
      "data": rows
    })
  })
});

// Default response for any other request
app.use(function(req, res){
  res.status(404);
});


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
