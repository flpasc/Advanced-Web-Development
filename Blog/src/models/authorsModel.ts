import { Author, Authors } from "../types/authors";
import { getDB } from "../database";
import { BlogEntries } from "../types/models";

export async function getAllAuthors(): Promise<Authors> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM blog_authors`,
      [],
      function (error, rowData: Authors) {
        if (error) reject(error);
        else resolve(rowData);
      },
    );
  });
}

export async function getAuthorById(id: number): Promise<Author> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM blog_authors WHERE id = ?`,
      [id],
      function (error, rowData: Author) {
        if (error) reject(error);
        else resolve(rowData);
      },
    );
  });
}

export async function addAuthor(author: string): Promise<void> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO blog_authors (name) VALUES (?)`,
      [author],
      function (error) {
        if (error) reject(error);
        else resolve();
      },
    );
  });
}
