import type { Request, Response } from "express";
import { getAllBlogEntries } from "../models/blogEntriesModel";
import { formatDate } from "../utils/dateHelper";

export const homeController = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const offset = (page - 1) * limit;

  const blogPosts = await getAllBlogEntries(limit, offset);
  res.render("home.njk", {
    title: "Home",
    headerImage: "/assets/images/home-bg.jpg",
    blogPosts: blogPosts.map((post) => ({
      ...post,
      formatedDate: formatDate(post.createdAt),
    })),
    currentPage: page,
    limit,
  });
};
