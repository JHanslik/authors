const { json } = require("express");
const express = require(`express`);
const app = express();

const authors = [
    {
        id: 1,
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"],
    },
    {
        id: 2,
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"],
    },
    {
        id: 3,
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"],
    },
    {
        id: 4,
        name: "Oscar Wilde",
        nationality: "UK",
        books: [
            "The Picture of Dorian Gray",
            "The Importance of Being Earnest",
        ],
    },
];

app.get("/authors/:id", (req, res) => {
    const author = authors.find(
        (author) => author.id === Number(req.params.id)
    );
    if (author) {
        const jsonAuthor = {
            name: author.name,
            nationality: author.nationality,
        };
        console.log(jsonAuthor);
        res.json(jsonAuthor);
    }
});
app.get("/authors/:id/books", (req, res) => {
    const author = authors.find(
        (author) => author.id === Number(req.params.id)
    );
    if (author) {
        const jsonBooks = {
            books: author.books,
        };
        res.json(jsonBooks);
    }
});

module.exports = app;
