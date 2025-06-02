import React, { useState } from 'react';

export default function BlogForm() {
    const [blogData, setBlogData] = useState({
        title: '',
        author: '',
        description: ''
    });

    function handleChange(e) {
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(blogData);
        alert(`A new blog "${blogData.title}" is now updated.`);
    }

    return (
        <div className="min-h-screen  flex items-center justify-center px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-xl bg-white p-8 rounded-xl shadow space-y-6 ">
                <h2 className="text-2xl font-bold text-center text-gray-800">Create New Blog</h2>

                <div className="flex flex-col">
                    <label htmlFor="title" className="mb-1 text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={blogData.title}
                        onChange={handleChange}
                        required
                        placeholder="Enter the blog title"
                        className="p-3 border rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-500 border-black focus:border-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="author" className="mb-1 text-sm font-medium text-gray-700">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={blogData.author}
                        onChange={handleChange}
                        required
                        placeholder="Enter the author's name"
                        className="p-3 border rounded-md focus:outline-none focus:ring-2  text-black focus:ring-blue-500  border-black focus:border-none"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description" className="mb-1 text-sm font-medium text-gray-700">Blog Content</label>
                    <textarea
                        id="description"
                        name="description"
                        value={blogData.description}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Enter your blog content"
                        className="p-3 border rounded-md resize-none focus:outline-none focus:ring-2  text-black focus:ring-blue-500  border-black focus:border-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-[#FF3F33] hover:bg-[#FED16A] hover:text-black text-white rounded-md transition duration-300"
                >
                    Submit Blog
                </button>
            </form>
        </div>
    );
}
