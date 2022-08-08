const express = require("express");
const app = express();
const port = 5000;
const homePage = require("./routes/homepage");
const authorsRoutes = require("./routes/authors");
const jsonRoutes = require("./routes/json");
// const booksRoutes = require("./routes/authors");

app.use("/", homePage);
app.use("/authors", authorsRoutes);
app.use("/json", jsonRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
