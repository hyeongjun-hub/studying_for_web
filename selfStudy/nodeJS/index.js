import express from "express";

const app = express();

const home = (req, res, next) => {
    return res.send("hi")
}

app.get("/", home)

const handleListening = () => console.log("hi")

app.listen(4000, handleListening)
