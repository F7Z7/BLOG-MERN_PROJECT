import Blog from '../models/Blog.js';

// Get all blogs
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new blog
export const createBlog = async (req, res) => {
    const { title, author, description } = req.body;

    if (!title || !author || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newBlog = new Blog({ title, author, description });
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
