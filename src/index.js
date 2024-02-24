import Express from "express";

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sites", (req, res) => {
  res.send("sites zone");
});

app.get("/cores", (req, res) => {
  res.send("core zone");
});

app.get("/themes", (req, res) => {
  res.send("themes zone");
});

app.get("/plugins", (req, res) => {
  res.send("plugins zone");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
