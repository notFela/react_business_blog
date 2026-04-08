import { PencilLine, MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer className="bg-[#101828] text-white">
            {/* Main footer content */}
            <div className="container mx-auto px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <PencilLine className="text-blue-400" size={22} />
                            <span className="text-xl font-bold text-white">BusinessBlog</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Your premier source for business insights, industry trends, and
                            corporate innovation stories. Stay ahead with expert analysis and
                            in-depth reporting.
                        </p>
                    </div>

                    {/* Quick Links column */}
                    <div className="space-y-4">
                        <h3 className="text-blue-400 font-semibold text-base">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Home", to: "/" },
                                { label: "Blog", to: "/blog" },
                                { label: "Contact", to: "/contact" },
                                { label: "Privacy Policy", to: "/privacy" },
                                { label: "Terms of Service", to: "/terms" },
                            ].map(({ label, to }) => (
                                <li key={label}>
                                    <NavLink
                                        to={to}
                                        className="text-gray-300 hover:text-white transition-colors text-sm"
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact column */}
                    <div className="space-y-4">
                        <h3 className="text-blue-400 font-semibold text-base">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-300">
                                <MapPin size={18} className="text-pink-500 mt-0.5 shrink-0" />
                                <span>
                                    123 Business Ave<br />
                                    New York, NY 10001
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <Phone size={18} className="text-pink-500 shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <Mail size={18} className="text-gray-400 shrink-0" />
                                <span>hello@businessblog.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-700/50">
                <div className="container mx-auto px-8 py-5 flex items-center justify-between">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} BusinessBlog. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group"
                    >
                        Back to top
                        <span className="bg-gray-700 hover:bg-gray-600 rounded-full p-1.5 transition-colors">
                            <ArrowUp size={14} />
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;