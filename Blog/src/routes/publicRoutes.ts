import express from "express";
import { aboutController } from "../controller/aboutController";
import { contactController } from "../controller/contactController";
import { homeController } from "../controller/homeController";
import { postsController } from "../controller/postsController";

const router = express.Router();

router
  .get("/", homeController)
  .get("/about", aboutController)
  .get("/contact", contactController)
  .get("/posts/:id", postsController);

export default router;
