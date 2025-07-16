import type { Request, Response } from "express";
import { formatDate } from "../utils/dateHelper";
import { getAllBlogEntries } from "../models/blogEntriesModel";

export const postsController = async (req: Request, res: Response) => {
  const postSlug = req.params.id;
  const blogPosts = await getAllBlogEntries();
  let postId = blogPosts.findIndex((blogPost) => blogPost.slug === postSlug);

  if (postId === -1) postId = 1;

  const post = blogPosts[postId];
  res.render("post.njk", {
    postTitle: post.title,
    postSubheading: post.teaser,
    postAuthor: post.author,
    postDate: formatDate(post.createdAt),
    headerImage: `/assets/images/${post.image}`,
    content: post.content,
  });
};
