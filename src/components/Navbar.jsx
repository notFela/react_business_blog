import { PencilLine, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

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

                    {/* Desktop Links */}
                    <div className="hidden md:flex space-x-2">
                        <NavLink to="/" className={navLinkClass} end>Home</NavLink>
                        <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
                        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-all"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col space-y-2">
                    <NavLink to="/" className={navLinkClass} end onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/blog" className={navLinkClass} onClick={() => setMenuOpen(false)}>Blog</NavLink>
                    <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </div>
            )}
        </nav>
    );
}

export default Navbar;