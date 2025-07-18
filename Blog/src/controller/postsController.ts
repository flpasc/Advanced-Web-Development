import type { Request, Response } from "express";
import { formatDate } from "../utils/dateHelper";
import { getBlogEntryById } from "../models/blogEntriesModel";

export const postsController = async (req: Request, res: Response) => {
  const postId = Number(req.params.id);
  const post = await getBlogEntryById(postId);

  res.render("post.njk", {
    postTitle: post.title,
    postSubheading: post.teaser,
    postAuthor: post.author,
    postDate: formatDate(post.createdAt),
    headerImage: `/assets/images/${post.image}`,
    content: post.content,
  });
};
