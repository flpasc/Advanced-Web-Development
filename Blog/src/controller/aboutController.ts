import type { Request, Response } from "express";

export const aboutController = (req: Request, res: Response) => {
  res.render("about.njk", {
    title: "About",
    headerImage: "../assets/images/about-bg.jpg",
  });
};
