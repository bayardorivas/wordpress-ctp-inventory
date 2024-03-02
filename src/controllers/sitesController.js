import db from "../../db/connection.js";

export const getAllSites = (req, res) => {
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
}
