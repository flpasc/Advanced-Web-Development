import type { Request, Response } from "express";
import {
  getAllBlogEntries,
  getAllBlogEntriesByAuthor,
} from "../models/blogEntriesModel";
import { formatDate } from "../utils/dateHelper";
import { getAllAuthors } from "../models/authorsModel";

export const homeController = async (req: Request, res: Response) => {
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const offset = (page - 1) * limit;
  const authors = await getAllAuthors();
  const filter = req.query.author_filter
    ? Number(req.query.author_filter)
    : undefined;
  let blogPosts;

  if (!filter) {
    blogPosts = await getAllBlogEntries(limit, offset);
  } else {
    blogPosts = await getAllBlogEntriesByAuthor(filter);
  }

  console.log(blogPosts);
  res.render("home.njk", {
    title: "Home",
    headerImage: "/assets/images/home-bg.jpg",
    blogPosts: blogPosts.map((post) => ({
      ...post,
      formatedDate: formatDate(post.createdAt),
    })),
    currentPage: page,
    limit,
    authors,
  });
};
