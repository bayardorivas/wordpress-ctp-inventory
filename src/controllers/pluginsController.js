import db from "../../db/connection.js";

export const getAllPlugins = (req, res) => {
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
}
