import type { Request, Response } from "express";

export const contactController = (req: Request, res: Response) => {
  res.render("contact.njk", {
    title: "Contact",
    headerImage: "../assets/images/contact-bg.jpg",
  });
};
