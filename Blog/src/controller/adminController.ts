import sanitizeHtml from "sanitize-html";
import type { Request, Response } from "express";
import {
  addBlogEntry,
  deleteBlogEntryById,
  getAllBlogEntries,
  getBlogEntryById,
  updateBlogEntry,
} from "../models/blogEntriesModel";
import { formatDate } from "../utils/dateHelper";

export const entriesListing = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const offset = (page - 1) * limit;

  const blogEntries = await getAllBlogEntries(limit, offset);
  res.render("dashboard.njk", {
    title: "Admin Dashboard",
    blogEntries: blogEntries.map((post) => ({
      ...post,
      formatedDate: formatDate(post.createdAt),
    })),
    currentPage: page,
  });
};

export const editEntry = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const blogPost = await getBlogEntryById(id);
  if (!blogPost) return res.status(404).send("entry not found");

  res.render("edit-post.njk", {
    title: blogPost.title,
    image: blogPost.image,
    author: blogPost.author,
    teaser: blogPost.teaser,
    content: blogPost.content,
    id,
  });
};

export const updateEntry = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await updateBlogEntry(id, {
    ...req.body,
    content: sanitizeHtml(req.body.content),
  });
  res.redirect("/admin");
};

export const deleteEntry = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await deleteBlogEntryById(id);
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
