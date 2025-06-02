import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center bg-[#FF3F33] h-screen px-6 py-12 text-center gap-6 space-y-6 ">
            <h1 className="text-5xl font-bold text-white tracking-wide">
                Welcome to <span className="text-[#FED16A]">Blogsy</span>!
            </h1>

            <p className="text-2xl text-white font-semibold font-light max-w-xl">
                Got thoughts? Words? Stories to share? <br />
                Let it out, let it flow... Write your heart out.
            </p>

            <Link to="/AddBlog">
                <button className="bg-white text-red-500 font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#FED16A] hover:text-white transition duration-300 cursor-pointer">
                    ✍️ Write a Blog
                </button>
            </Link>
        </div>
    );
}

export default Home;
