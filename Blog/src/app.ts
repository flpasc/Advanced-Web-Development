require("dotenv").config();

import express from "express";
import nunjucks from "nunjucks";
import cors from "cors";
import path from "path";
import blogPosts from "./data/blogPosts.json";

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

nunjucks.configure("src/templates/", {
  autoescape: true,
  express: app,
});

const port = process.env.PORT || 3333;

const formatDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get("/about", (req, res) => {
  res.render("about.njk", {
    title: "About",
    headerImage: "/assets/images/about-bg.jpg",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.njk", {
    title: "Contact",
    headerImage: "/assets/images/contact-bg.jpg",
  });
});

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = blogPosts[postId];

  res.render("post.njk", {
    postTitle: post.title,
    postSubheading: post.teaser,
    postAuthor: post.author,
    postDate: post.createdAt,
    headerImage: `/assets/images/${post.image}`,
  });
});

app.get("/", (req, res) => {
  res.render("home.njk", {
    title: "Home",
    headerImage: "/assets/images/home-bg.jpg",
    blogPosts: blogPosts.map((post) => ({
      ...post,
      formatedDate: formatDate(post.createdAt),
    })),
  });
});

app.get("/post", (req, res) => {
  res.render("post.njk", {
    postTitle: "Man must explore, and this is exploration at its greatest",
    postSubheading: "Problems look mighty small from 150 miles up",
    postAuthor: "Start Bootstrap",
    postDate: "August 24, 2023",
    headerImage: "/assets/images/post-bg.jpg",
  });
});
