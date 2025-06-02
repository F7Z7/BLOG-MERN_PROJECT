import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';

export default function ViewBlogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const res = await fetch("http://localhost:5000/api/blogs");
                if (!res.ok) throw new Error('Failed to fetch blogs');
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        }
        fetchBlogs();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">All Blogs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {blogs.map(blog => (
                    <BlogCard
                        key={blog._id}
                        title={blog.title}
                        author={blog.author}
                        description={blog.description}
                    />
                ))}
            </div>
        </div>
    );
}
