import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <div className="flex flex-col items-start justify-center">
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}