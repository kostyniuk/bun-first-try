import { SQL } from "bun";
import { Database } from "bun:sqlite";

const db = new Database("db.sqlite", { create: true }); // create a new database file if it doesn't exist
const sqlite = new SQL("sqlite://db.sqlite"); // create a new SQL instance
db.query(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL
)
`).run();

db.query(`
CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL
)
`).run();

export { db, sqlite };