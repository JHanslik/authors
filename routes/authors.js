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
        res.json(`${author.name}, ${author.nationality}`);
    } else {
        res.json("Nothing to see here");
    }
});

app.get("/authors/:id/books", (req, res) => {
    const author = authors.find(
        (author) => author.id === Number(req.params.id)
    );
    const books = author.books.join(", ");
    if (author) {
        res.json(books);
    }
});

app.get("json/authors/:id", (req, res) => {
    const author = authors.find(
        (author) => author.id === Number(req.params.id)
    );
    if (author) {
        const jsonAuthor = author;
        console.log(jsonAuthor);
        res.json(jsonAuthor);
    }
});
module.exports = app;
