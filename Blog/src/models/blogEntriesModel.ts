import { FILE } from "node:dns";
import { readFile } from "node:fs/promises";
import * as path from "path";
import { BlogEntries } from "../types/models";

const FILE_PATH = path.join(__dirname, "..", "data", "blogPosts.json");

export async function getAllBlogEntries(): Promise<BlogEntries> {
  try {
    const blogEntries = await readFile(FILE_PATH, { encoding: "utf-8" });
    if (!blogEntries) return [];
    return JSON.parse(blogEntries);
  } catch (error) {
    console.error("Error retriving block entries", error);
    return [];
  }
}
