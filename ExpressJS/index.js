// Server
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Helo, I'm Vito!</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Helo, I'm Vito!</h1> <h2>You're at the contact page!</h2>")
})

app.get("/about", (req, res) => {
    res.send("<h1>Helo, I'm Vito!</h1> <h2>You're at the about page!</h2>")
})

app.listen(port, () => {
console.log(`Server running on port ${port}.`)
});