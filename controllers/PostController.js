import PostModel from "../models/Post.js"


export const getAllPosts = async (req,res, next) => {
    try {
        const posts = await PostModel.find().populate("user").exec();
        res.json(posts);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось получить все статьи"
        })
    }

}

export const getOne = async (req,res, next) => {
    try {
        const postId = req.params.id;
        PostModel.findOneAndUpdate({
            _id: postId
        }, {
            $inc: { viewsCount: 1 }
        }, {
            returnDocument: 'after'
        }, (err, doc) => {
            if(err) {
                console.log(err)
                return res.status(500).json({
                    message: "Не удалось вернуть статью"
                })
            }
            if(!doc) {
                return res.status(500).json({
                    message: "Статья не найдена"
                })
            }

            res.json(doc)
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось получить статью"
        })
    }

}

export const createPost = async (req,res, next) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId
        });
        const post = await doc.save();
        res.json(post._doc);
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось создать статью"
        })
    }
}

export const deletePost = async (req,res, next) => {
    try {
        const postId = req.params.id;
        PostModel.findOneAndDelete({
            _id: postId
        }, (err, doc)=> {
            if(err) {
                console.log(err)
                return res.status(500).json({
                    message: "Не удалось удалить статью"
                })
            }
            if(!doc) {
                return res.status(500).json({
                    message: "Статья не найдена"
                })
            }
            res.json({
                success: true
            });
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось удалить статью"
        })
    }
}

export const updatePost = async (req,res, next) => {
    try {
        const postId = req.params.id;
        await PostModel.updateOne({
            _id: postId
        }, {
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.tags,
            user: req.userId
        })

        res.json({
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "Не удалось изменить статью"
        })
    }
}