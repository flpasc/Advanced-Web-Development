import express from "express";
import { entriesListing } from "../controller/adminController";

const router = express.Router();
router.get("/", entriesListing);

export default router;
