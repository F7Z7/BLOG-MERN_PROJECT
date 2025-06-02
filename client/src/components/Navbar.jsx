import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex flex-col items-start justify-center">
            <Link to="/">Home</Link>
            <Link to="/AddBlog">Add A Blog</Link>
            <Link to="/ViewBlogs">View Blogs</Link>
        </div>
    )
}