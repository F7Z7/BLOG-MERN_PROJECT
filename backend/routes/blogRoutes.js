import express from 'express';
import Blog from '../models/Blog.js'; // your Mongoose model

const router = express.Router();

// GET all blogs
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST create new blog
router.post('/', async (req, res) => {
    const { title, author, description } = req.body;
    const blog = new Blog({ title, author, description });

    try {
        const savedBlog = await blog.save();
        res.status(201).json(savedBlog);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
