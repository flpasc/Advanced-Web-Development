import sqlite3 from "sqlite3";
import path from "path";

const dbInstance = sqlite3.verbose();

const DB_FILE = path.join(__dirname, "../blog.db");

let db: sqlite3.Database | null = null;

export function connectDB(): Promise<sqlite3.Database> {
  return new Promise((resolve, reject) => {
    db = new dbInstance.Database(
      DB_FILE,
      sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
      (err: Error | null) => {
        if (err) {
          console.error("Error connecting to database:", err.message);
          reject(err);
        } else {
          console.log("Connected to the SQLite database.");
          // Posts table
          db!.run(
            `
                    CREATE TABLE IF NOT EXISTS blog_entries (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        title TEXT NOT NULL,
                        teaser TEXT NOT NULL,
                        author_id INTEGER NOT NULL,
                        createdAt TEXT NOT NULL,
                        image TEXT NOT NULL,
                        content TEXT NOT NULL,
                        FOREIGN KEY (author_id) REFERENCES blog_authors(id) ON DELETE CASCADE
                    )
                `,
            (createErr: Error | null) => {
              if (createErr) {
                console.error("Error creating table:", createErr.message);
                reject(createErr);
              } else {
                console.log("Blog table checked/created.");
                resolve(db as sqlite3.Database);
              }
            },
          );
          // Author table
          db!.run(
            `
                    CREATE TABLE IF NOT EXISTS blog_authors (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT NOT NULL
                    )
                `,
            (createErr: Error | null) => {
              if (createErr) {
                console.error("Error creating table:", createErr.message);
                reject(createErr);
              } else {
                console.log("Blog table checked/created.");
                resolve(db as sqlite3.Database);
              }
            },
          );
        }
      },
    );
  });
}

export function getDB(): sqlite3.Database {
  if (!db) {
    throw new Error("Database not connected. Call connectDB() first.");
  }
  return db;
}

export function closeDB(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (db) {
      db.close((err: Error | null) => {
        if (err) {
          console.error("Error closing database:", err.message);
          reject(err);
        } else {
          console.log("Database connection closed.");
          db = null;
          resolve();
        }
      });
    } else {
      console.log("No database connection to close.");
      resolve();
    }
  });
}
