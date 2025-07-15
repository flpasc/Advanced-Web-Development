import type { Request, Response } from "express";
import blogPosts from "../data/blogPosts.json";
import { formatDate } from "../utils/dateHelper";

export const homeController = (req: Request, res: Response) => {
  res.render("home.njk", {
    title: "Home",
    headerImage: "/assets/images/home-bg.jpg",
    blogPosts: blogPosts.map((post) => ({
      ...post,
      formatedDate: formatDate(post.createdAt),
    })),
  });
};
