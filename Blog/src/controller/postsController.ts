import type { Request, Response } from "express";
import blogPosts from "../data/blogPosts.json";
import { formatDate } from "../utils/dateHelper";

export const postsController = (req: Request, res: Response) => {
  const postId = parseInt(req.params.id, 10);
  const post = blogPosts[postId];

  if (!post) {
    return res.render("post.njk", {
      postTitle: "Man must explore, and this is exploration at its greatest",
      postSubheading: "Problems look mighty small from 150 miles up",
      postAuthor: "Start Bootstrap",
      postDate: "August 24, 2023",
      headerImage: "/assets/images/post-bg.jpg",
    });
  }

  res.render("post.njk", {
    postTitle: post.title,
    postSubheading: post.teaser,
    postAuthor: post.author,
    postDate: formatDate(post.createdAt),
    headerImage: `/assets/images/${post.image}`,
  });
};
