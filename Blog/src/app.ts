require("dotenv").config();

import express from "express";
import nunjucks from "nunjucks";
import cors from "cors";
import path from "path";
import publicRouter from "./routes/publicRoutes";
import adminRouter from "./routes/adminRoutes";
import session from "express-session";
import { closeDB, connectDB } from "./database";

const app = express();
const port = process.env.PORT || 3333;
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "AdminPassword",
    resave: false,
    saveUninitialized: false,
  }),
);

nunjucks.configure("src/views/", {
  autoescape: true,
  express: app,
});

connectDB()
  .then(() => {
    app.use(publicRouter).use("/admin", adminRouter); // let router manage auth inside

    app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Could not start DB: ", error);
  });

process.on("SIGINT", async () => {
  console.log("SIGINT received. Closing database connection...");
  await closeDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Closing database connection...");
  await closeDB();
  process.exit(0);
});
