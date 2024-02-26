const sqlite3 = require("sqlite3").verbose();
const md5 = require("md5");
const { OPEN_READWRITE } = require("sqlite3");
const fs = require("fs");

const dbSource = "./db/wp-ctp.db";

fs.access(dbSource, fs.constants.F_OK, (err) => {
  if (err) {
    console.error(`Database file does not exist at ${dbSource}`);
    return;
  }
});

let db = new sqlite3.Database(dbSource, sqlite3.OPEN_READWRITE, (err) => {
  if (err || dbSource=="") {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log(`Connected to the SQLite ${dbSource} Database.`);
  }
});

module.exports = db;
