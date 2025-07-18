import { BlogEntries, BlogEntry } from "../types/models";
import { getDB } from "../database";

export async function getAllBlogEntries(): Promise<BlogEntries> {
  const db = getDB();

  return new Promise((resolve, reject) => {
    db.all<BlogEntry>(
      `SELECT * FROM blog_entries`,
      [],
      (error: Error | null, rowData: BlogEntries) => {
        if (error) reject(error);
        else {
          resolve(rowData);
        }
      },
    );
  });
}

export async function getBlogEntryById(postId: number): Promise<BlogEntry> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM blog_entries WHERE id = ?`,
      [postId],
      (error, rowData: BlogEntry) => {
        if (error) {
          reject(error);
        } else {
          resolve(rowData);
        }
      },
    );
  });
}

export async function updateBlogEntry(
  postId: number,
  data: Partial<BlogEntry>,
): Promise<void> {
  const db = getDB();
  const createdAt = data.createdAt ?? Math.floor(Date.now() / 1000);

  return new Promise((resolve, reject) => {
    db.run(
      `UPDATE blog_entries SET title = ?,image = ?, author = ?, teaser = ?, content = ?, createdAt = ? WHERE id = ?`,
      [
        data.title,
        data.image,
        data.author,
        data.teaser,
        data.content,
        createdAt,
        postId,
      ],
      function (error) {
        if (error) reject(error);
        else resolve();
      },
    );
  });
}

export async function deleteBlogEntryById(postId: number): Promise<void> {
  const db = getDB();
  return new Promise((resolve, reject) => {
    db.run(
      `DELETE FROM blog_entries WHERE id = ? `,
      [postId],
      function (error) {
        if (error) reject(error);
        else resolve();
      },
    );
  });
}

export async function addBlogEntry(entry: Partial<BlogEntry>) {
  const db = getDB();
  const createdAt = Math.floor(Date.now() / 1000);

  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO blog_entries (title, image, author, teaser, content, createdAt) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        entry.title,
        entry.image,
        entry.author,
        entry.teaser,
        entry.content,
        createdAt,
      ],
      function (error) {
        if (error) reject(error);
        else resolve({ id: this.lastID });
      },
    );
  });
}
