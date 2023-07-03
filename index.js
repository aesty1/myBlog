import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose
    .connect("mongodb+srv://kadirovdenis:denis123@cluster0.vlae7ht.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Mongoose ok"))
    .catch((err) => console.log(err));

const posts = [
    {
        title: "Hello world",
        text: "If you are using the .btn class on its own, remember to at least define some explicit :focus and/or :focus-visible styles."
    },
    {
        title: "Hello world!",
        text: "Bootstrap has a base .btn class that sets up basic styles such as padding and content alignment. By default, .btn controls have a transparent border and background color, and lack any explicit focus and hover styles."
    },
    {
        title: "Variants",
        text: "Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control."
    }
];

app.get("/posts", (req, res) => {
    return res.send(posts);
});
app.get("/", (req, res) => {
    return res.send("HELLO WORLD!");
});
app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    return res.send(posts[id]);
});
app.post("/posts", (req, res) => {
    const data = req.body;
    console.log(data);
    posts.push(data);
    return res.send(posts);
});
app.post("/auth/login", (req, res) => {
   console.log(req.body);
   const token = jwt.sign({
       email: req.body.email,
       password: req.body.password
   }, "denis123");
   return res.json({
       success: true,
       token
   });
});
app.post("/auth/register", registerValidation,(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    res.json({
        success: true
    })
})
app.listen(3333, (err) => {
    if(err) {
        return console.log(err)
    }
    else {
        console.log("server is running");
    }
});