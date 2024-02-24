const Express = require('express');

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("WordPress-CTP Inventory API!");
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

// Default response for any other request
app.use(function(req, res){
  res.status(404);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
