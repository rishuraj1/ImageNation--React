import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import imageRoutes from './routes/imageRoutes.js';

dotenv.config();

const app = express();

app.use(cors(
    {
        origin: ["https://imagenation.vercel.app/"],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    }
));
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/images', imageRoutes);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from dalle!');
});

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server is running on port 8080'));
    } catch (e) {
        console.log(e);
    }
}

startServer();
