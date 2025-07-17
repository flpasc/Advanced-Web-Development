import express from "express";
import {
  entriesListing,
  editEntry,
  updateEntry,
  deleteEntry,
  addNewEntry,
  showNewEntryForm,
} from "../controller/adminController";
import { authentication } from "../middlewares/authenticationMiddleware";

const router = express.Router();
router
  .use(authentication)
  .get("/", entriesListing)
  .get("/edit-post/:id", editEntry)
  .post("/edit-post/:id", updateEntry)
  .post("/delete-post/:id", deleteEntry)
  .post("/add-new-entry/", addNewEntry)
  .get("/add-new-entry", showNewEntryForm);

export default router;
