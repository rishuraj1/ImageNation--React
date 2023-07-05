import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import cors from 'cors'

dotenv.config();

const router = express.Router();

router.use(cors(
    {
        origin: "*",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        allowedHeaders: "Content-Type, Authorization, Origin, X-Requested-With, Accept",
    }
));

router.route('/').post(async (req, res) => {
    try {
        const { api_key, prompt } = req.body;

        const configuration = new Configuration({
            apiKey: api_key,
        });

        const openai = new OpenAIApi(configuration);

        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        }

        const aiRes = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json',
        }, {headers});

        const image = aiRes.data.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (e) {
        console.log(e);
        res.status(500).send(error?.response.data.error.message);
    }
})

router.route('/').get((req, res) => {
    res.send('Hello from dalle!');
});

export default router;









