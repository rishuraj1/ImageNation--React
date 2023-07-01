import express from 'express';
import axios from 'axios';
import cors from 'cors';

const router = express.Router();

router.use(cors(
    {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "Content-Type, Authorization, Origin, X-Requested-With, Accept",
    }
));

router.route('/').get(async (req, res) => {
    try {
        const url = "https://openaccess-api.clevelandart.org/api/artworks";

        const params = {
            q: "",
            skip: 0,
            limit: 10,
            has_image: 1,
        }
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        }

        const response = await axios.get(url, { params }, { headers });
        const images = response.data.data;
        res.status(200).json({ success: true, data: images });

    } catch (e) {
        res.status(500).send(error?.response.data.error.message);
    }
})

router.route('/').get((req, res) => {
    res.send("Hello for carousel");
});

export default router;
