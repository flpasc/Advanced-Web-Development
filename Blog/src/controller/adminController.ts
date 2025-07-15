import type { Request, Response } from "express";

export const entriesListing = (req: Request, res: Response) => {
  res.render("dashboard.njk", {
    title: "About",
  });
};
