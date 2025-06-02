import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex flex-row items-center justify-evenly px-6 py-4 bg-[#FF3F33] shadow-md w-full text-white text-lg font-medium">
            <Link to="/" className="hover:text-[#FED16A] transition-colors duration-200">
                Home
            </Link>
            <Link to="/AddBlog" className="hover:text-[#FED16A] transition-colors duration-200">
                Add A Blog
            </Link>
            <Link to="/ViewBlogs" className="hover:text-[#FED16A] transition-colors duration-200">
                View Blogs
            </Link>
            <Link to="/" className="hover:text-[#FED16A] transition-colors duration-200">
                Sign In
            </Link>
        </div>
    );
}
