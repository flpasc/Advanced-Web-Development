"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(cors_1.default);
nunjucks_1.default.configure("src/templates", {
  autoescape: true,
  express: app,
});
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
app.get("/", (req, res) => {
  res.render("home.njk");
});
