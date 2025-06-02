import React from 'react';
import BlogForm from "../components/BlogForm.jsx";

function AddBlog() {
    return (
        <div className="min-h-screen flex flex-col flex-wrap bg-[#FED16A] p-8 text-white">
            <h1 className="text-3xl font-bold text-center text-black mb-4">Welcome to the Blog Section</h1>
            <p className="text-center mb-8 text-black font-semibold">Write your blogs and share your ideas with the world!</p>
            <BlogForm />
        </div>
    );
}

export default AddBlog;
