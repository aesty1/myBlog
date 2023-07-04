import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import UserModel from "./models/User.js";
import bcrypt from "bcrypt";

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose
    .connect("mongodb+srv://kadirovdenis:denis123@cluster0.vlae7ht.mongodb.net/blog?retryWrites=true&w=majority")
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



app.post("/auth/login", async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });

        if(!user) {
            return res.status(400).json({
                message: "Пользователь не найден"
            })
        }

        const isValidPassword = await bcrypt.compare(req.body.password, user._doc.passwordHash);

        if(!isValidPassword) {
            return req.status(404).json({
                message: "Неверный логин или пароль"
            })
        }

        const token = jwt.sign(
            {
                _id: user._id
            },
            "KadirovDenis123"
        )

        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось авторизироваться"
        })
    }
})

app.post("/auth/register", registerValidation, async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email: req.body.email,
            passwordHash: hash,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl
        })

        const user = await doc.save();


        const token = jwt.sign(
            {
                _id: user._id
            },
            "KadirovDenis123"
        )

        const { passwordHash, ...userData } = user._doc

        res.json({
            ...userData,
            token
        });
    } catch(err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось зарегестрироваться"
        })
    }
})

app.listen(3333, (err) => {
    if(err) {
        return console.log(err)
    }
    else {
        console.log("server is running");
    }
});