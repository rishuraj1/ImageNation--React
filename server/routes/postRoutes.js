import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import cors from 'cors';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();

router.use(cors(
    {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "Content-Type, Authorization, Origin, X-Requested-With, Accept",
    }
));


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//get all posts

router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Failed fetching posts! Please try again." });
    }
})

//create a post

router.route('/').post(async (req, res) => {
    try { 
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);

        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        });

        res.status(200).json({ success: true, data: newPost });
    } catch (e) {
        console.log(e);
        res.status(500).json({ success: false, message: "Failed creating post! Please try again." });
    }
})

export default router;

