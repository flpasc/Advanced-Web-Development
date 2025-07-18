import type { Request, Response } from "express";
import { getAllBlogEntries } from "../models/blogEntriesModel";

export const homeController = async (req: Request, res: Response) => {
  const blogPosts = await getAllBlogEntries();
  res.render("home.njk", {
    title: "Home",
    headerImage: "/assets/images/home-bg.jpg",
    blogPosts: blogPosts.map((post) => ({
      ...post,
    })),
  });
};
