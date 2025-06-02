// components/BlogCard.jsx
import React from 'react';

export default function BlogCard({ title, author, description }) {
    return (
        <div className="bg-[#FED16A]  shadow-md rounded-lg p-6  hover:scale-105 transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 font-bold tracking-wide">{title}</h2>
            <p className="text-sm text-black mb-4 font-semibold tracking-wide">By {author}</p>
            <p className="text-gray-700 font-serif ">{description.slice(0, 120)}...</p>
            <button className="bg-red-400 p-3 mt-4 rounded-full hover:bg-white hover:text-black">
                Read more
            </button>
        </div>
    );
}
