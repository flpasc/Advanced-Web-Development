import { Author, Authors } from "../types/authors";
import { getDB } from "../database";
import { BlogEntries } from "../types/models";

export async function getAllAuthors(): Promise<Authors> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM blog_authors`, [], (error, rowData: Authors) => {
      if (error) reject(error);
      else resolve(rowData);
    });
  });
}

export async function getAuthorById(id: number): Promise<Author> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM blog_authors WHERE id = ?`,
      [id],
      (error, rowData: Author) => {
        if (error) reject(error);
        else resolve(rowData);
      },
    );
  });
}

export async function deleteAuthorById(id: number): Promise<void> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.run(`SELECT * FROM blog_authors WHERE id= ?`, [id], (error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}

export async function addAuthor(author: string): Promise<void> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO blog_authors (name) VALUES (?)`, [author], (error) => {
      if (error) reject(error);
      else resolve();
    });
  });
}
