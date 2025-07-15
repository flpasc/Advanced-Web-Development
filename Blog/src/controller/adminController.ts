import type { Request, Response } from "express";
import { getAllBlogEntries } from "../models/blogEntriesModel";

export const entriesListing = async (req: Request, res: Response) => {
  const blogEntries = await getAllBlogEntries();
  res.render("dashboard.njk", {
    title: "Admin Dashboard",
    blogEntries,
  });
};
