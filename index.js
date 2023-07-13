import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as validations from "./validations.js";
import multer from "multer";
import { UserController, PostController } from "./controllers/index.js";
import { handleValidationErrors, checkAuth } from "./utils/index.js";
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose
    .connect("mongodb+srv://kadirovdenis:denis123@cluster0.vlae7ht.mongodb.net/blog?retryWrites=true&w=majority")
    .then(() => console.log("Mongoose ok"))
    .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (_,__, cb) => {
        cb(null, "uploads");
    },
    filename: (_,file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage });

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
    return res.send("HELLO WORLD!");
});

app.get("/auth/me", checkAuth, UserController.getProfileInformation);
app.post("/auth/login", validations.loginValidation, handleValidationErrors, UserController.login);
app.post("/auth/register", validations.registerValidation, handleValidationErrors, UserController.register);
 
app.get("/posts", PostController.getAllPosts);
app.get("/posts/:id", PostController.getOne);
app.post("/posts", checkAuth, validations.postCreateValidation, handleValidationErrors, PostController.createPost);
app.delete("/posts/:id", checkAuth, PostController.deletePost);
app.patch("/posts/:id", checkAuth, PostController.updatePost);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
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