import sqlite3 from "sqlite3";
import { access, constants } from "fs";

const dbSource = "./db/wp-ctp.db";

access(dbSource, constants.F_OK, (err) => {
  if (err) {
    console.error(`Database file does not exist at ${dbSource}`);
    return;
  }
});

let db = new sqlite3.Database(dbSource, sqlite3.OPEN_READWRITE, (err) => {
  if (err || dbSource == "") {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log(`Connected to the SQLite ${dbSource} Database.`);
  }
});

export default db;
