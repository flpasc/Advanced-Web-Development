import sanitizeHtml from "sanitize-html";
import type { Request, Response } from "express";
import {
  addBlogEntry,
  deleteBlogEntry,
  getAllBlogEntries,
  updateBlogEntry,
} from "../models/blogEntriesModel";

export const entriesListing = async (req: Request, res: Response) => {
  const blogEntries = await getAllBlogEntries();
  res.render("dashboard.njk", {
    title: "Admin Dashboard",
    blogEntries,
  });
};

export const editEntry = async (req: Request, res: Response) => {
  const slug = req.params.id;
  const blogEntries = await getAllBlogEntries();
  const blogPost = blogEntries.find((entry) => entry.slug === slug);

  if (!blogPost) return res.status(404).send("entry not found");

  res.render("edit-post.njk", {
    title: blogPost.title,
    image: blogPost.image,
    author: blogPost.author,
    createdAt: blogPost.formatedDate,
    teaser: blogPost.teaser,
    content: blogPost.content,
    slug: blogPost.slug,
  });
};

export const updateEntry = async (req: Request, res: Response) => {
  const slug = req.params.id;
  console.log(req.body);
  await updateBlogEntry(slug, {
    ...req.body,
    content: sanitizeHtml(req.body.content),
  });
  res.redirect("/admin");
};

export const deleteEntry = async (req: Request, res: Response) => {
  const slug = req.params.id;
  await deleteBlogEntry(slug);
  res.redirect("/admin");
};

export const addNewEntry = async (req: Request, res: Response) => {
  const entryData = req.body;
  await addBlogEntry({
    ...entryData,
    content: sanitizeHtml(entryData.content),
  });
  res.redirect("/admin");
};

export const showNewEntryForm = async (req: Request, res: Response) => {
  res.render("add-post.njk");
};

export const getLoginForm = async (req: Request, res: Response) => {
  res.render("login.njk");
};

export const adminLogin = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (
    username === process.env.ADMIN &&
    password === process.env.ADMIN_PASSWORD
  ) {
    // @ts-ignore
    req.session.isAdmin = true;
    res.redirect("/admin");
    console.log(req.session);
  } else {
    res.redirect("/admin/login");
  }
};

export const adminLogout = async (req: Request, res: Response) => {
  req.session.destroy((error) => {
    if (error) {
      console.error("Error destroying session", error);
    }
    res.redirect("/login");
  });
};
