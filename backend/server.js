import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();

const app = express();

connectDB();  // Connect to MongoDB before starting server

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
