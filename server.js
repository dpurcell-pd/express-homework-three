const express = require("express");
const app = express();
const port = 3000;

const favorites = [
  "working out",
  "trying new foods",
  "video games",
  "creating applications",
];

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to the Homepage!</h1>`);
});

app.get("/greeting", (req, res) => {
  res.send(`<h3>My name is Darrell. Thank you for exploring my site!</h3>`);
});

app.get("/greeting/:name", (req, res) => {
  res.send(`You said your name is ${req.params.name}, right?
    Sorry, I'm working on being better with names...😅`);
});

app.get("/picture", (req, res) => {
    res.send(`<h1>Here's a nice picture for you:</h1>
    <img src="https://i.insider.com/6304cadfc9a2da0018092dd4?width=700" alt="a light-brown puppy">`);
});

app.get("/favorites", (req, res) => {
  res.send(`<h3>One of my favorite things? Let's see...
    <li>${favorites[0]}</li>
    <li>${favorites[1]}</li>
    <li>${favorites[2]}</li>
    </h3>`);
});

app.get("/random", (req, res) => {
    const random = Math.floor(Math.random() * (50 - 10) + 10);
    res.send(`<h1>Here's a random number: ${random}</h1>`);
});

app.get("/wiki", (req, res) => {
    res.send(`Do you like to read? I hear this site is pretty good...
    <a href="https://en.wikipedia.org/wiki/Main_Page">Check out Wikipedia</a>`);
});

app.get("/watch", (req, res) => {
    res.send(`YouTube more your thing? Well, <a href="http://www.youtube.com">here you go!</a>`);
});

app.get("/goodnight/:name", (req, res) => {
    res.send(`I hope you have a great night, ${req.params.name}!`);
});

app.get("/:color", (req, res) => {
    res.send(`<h1>Oh, your favorite color is ${req.params.color}? Mine too!</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
