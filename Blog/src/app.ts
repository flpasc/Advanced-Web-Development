require("dotenv").config();

import express from "express";
import nunjucks from "nunjucks";
import cors from "cors";
import path from "path";
import publicRouter from "./routes/publicRoutes";
import adminRouter from "./routes/adminRoutes";

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

nunjucks.configure("src/views/", {
  autoescape: true,
  express: app,
});

const port = process.env.PORT || 3333;

app.use(publicRouter).use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
