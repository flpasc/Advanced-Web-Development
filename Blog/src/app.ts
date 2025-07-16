require("dotenv").config();

import express from "express";
import nunjucks from "nunjucks";
import cors from "cors";
import path from "path";
import publicRouter from "./routes/publicRoutes";
import adminRouter from "./routes/adminRoutes";
import session from "express-session";

const app = express();
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

const port = process.env.PORT || 3333;

app.use(publicRouter).use("/admin", adminRouter); // let router manage auth inside

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
