import { PencilLine } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {
    // Active link styling function
    const navLinkClass = ({ isActive }) =>
        `px-4 py-2 rounded-lg transition-all duration-300 font-medium ${isActive
            ? "bg-blue-600 text-white shadow-lg transform scale-105"
            : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
        }`;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:scale-105 transition-transform"
                    >
                        <PencilLine className="text-blue-400" size={24} />
                        <span className="text-blue-600">BusinessBlog</span>
                    </NavLink>

                    {/* Navigation Links */}
                    <div className="flex space-x-2">
                        <NavLink to="/" className={navLinkClass} end>
                            Home
                        </NavLink>
                        <NavLink to="/blog" className={navLinkClass}>
                            Blog
                        </NavLink>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;