import express from "express";
import { aboutController } from "../controller/aboutController";
import { contactController } from "../controller/contactController";
import { homeController } from "../controller/homeController";
import { postsController } from "../controller/postsController";
import {
  adminLogin,
  adminLogout,
  getLoginForm,
} from "../controller/adminController";

const router = express.Router();

router
  .get("/login", getLoginForm)
  .post("/login", adminLogin)
  .get("/logout", adminLogout)
  .get("/", homeController)
  .get("/about", aboutController)
  .get("/contact", contactController)
  .get("/posts/:id", postsController);

export default router;
