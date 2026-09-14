const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything inside /public as static files (index.html, style.css, script.js)
app.use(express.static(path.join(__dirname, "public")));

// Fallback: always hand back index.html for the root route
app.get("/", (req, res) => {
  res.sendFile
    ? res.sendFile(path.join(__dirname, "public", "index.html"))
    : res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
