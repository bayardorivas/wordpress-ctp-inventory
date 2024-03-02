import db from "../../db/connection.js";

export const getAllThemes = (req, res) => {
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
}
