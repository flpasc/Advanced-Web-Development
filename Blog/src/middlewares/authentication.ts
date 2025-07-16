import type { NextFunction, Request, Response } from "express";

// @ts-ignore
export function authentication(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // @ts-ignore
  if (req.session && req.session.isAdmin) {
    return next();
  }
  res.redirect("/login");
}
