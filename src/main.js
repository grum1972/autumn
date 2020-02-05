import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills.js";
import "./scripts/parallax.js";
import "./scripts/review.js";
import "./scripts/works.js";
import "./scripts/hamburger.js";