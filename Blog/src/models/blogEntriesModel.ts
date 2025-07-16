import { readFile, writeFile } from "node:fs/promises";
import * as path from "path";
import { BlogEntries, BlogEntry } from "../types/models";
import { createSlug } from "../utils/createSlug";
import { formatDate } from "../utils/dateHelper";

const FILE_PATH = path.join(__dirname, "..", "data", "blogPosts.json");

export async function getAllBlogEntries(): Promise<BlogEntries> {
  try {
    const blogEntries = await readFile(FILE_PATH, { encoding: "utf-8" });
    if (!blogEntries) return [];
    return JSON.parse(blogEntries).map((entry: BlogEntry) => ({
      ...entry,
      slug: entry.slug || createSlug(entry.title),
      formatedDate: entry.formatedDate || formatDate(entry.createdAt),
    }));
  } catch (error) {
    console.error("Error retriving block entries", error);
    return [];
  }
}

export async function saveAllBlogEntries(entries: BlogEntries): Promise<void> {
  try {
    await writeFile(FILE_PATH, JSON.stringify(entries));
  } catch (error) {
    console.error("Couldnt save due to error: ", error);
  }
}

export async function updateBlogEntry(
  slug: string,
  data: Partial<BlogEntry>,
): Promise<void> {
  try {
    const entries = await getAllBlogEntries();
    const index = entries.findIndex((entry) => entry.slug === slug);

    entries[index] = { ...entries[index], ...data };

    await saveAllBlogEntries(entries);
  } catch (error) {}
}

export async function deleteBlogEntry(slug: string): Promise<void> {
  try {
    const blogPosts = await getAllBlogEntries();
    const updatedPosts = blogPosts.filter((post) => post.slug !== slug);

    await saveAllBlogEntries(updatedPosts);
  } catch (error) {}
}

export async function addBlogEntry(entry: Partial<BlogEntry>) {
  const createdAt = Math.floor(Date.now() / 1000);

  try {
    const entries = await getAllBlogEntries();
    const newEntry: BlogEntry = {
      title: entry.title || "Unknown",
      image: entry.image || "default-bg",
      author: entry.author || "Unknown author",
      teaser: entry.teaser || "",
      content: entry.content || "",
      slug: createSlug(entry.title || ""),
      createdAt: createdAt,
      formatedDate: formatDate(createdAt),
    };

    entries.push(newEntry);
    await saveAllBlogEntries(entries);
  } catch (error) {
    console.error("Canot save new post: ", error);
  }
}
