const express = require(`express`);
const app = express();

app.get("/", (req, res) => {
    res.json("Authors API");
});

module.exports = app;
