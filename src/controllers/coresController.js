import db from "../../db/connection.js";

export const getAllCores = (req, res) => {
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
}
