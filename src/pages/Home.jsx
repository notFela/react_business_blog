import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="w-full">

            {/* HERO SECTION */}
            <section className="w-screen min-h-screen flex items-center bg-gradient-to-br from-[#2563eb] via-[#3b2fc9] to-[#4f35d4]">
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-6 ml-24">

        {/* TOP LABEL */}
        <div className="flex items-center gap-2 text-white/70 text-xs font-semibold tracking-widest uppercase">
          <TrendingUp size={14} />
          <span>Top Business Insights</span>
        </div>

        {/* TITLE */}
        <h1 className="text-6xl font-extrabold text-white leading-tight max-w-3xl">
          Discover Industry Leaders <br />
          & Market Trends
        </h1>

        {/* DESCRIPTION */}
        <p className="text-white/80 text-base leading-relaxed max-w-xl">
          Explore in-depth analysis of Fortune 500 companies, emerging startups, and
          the strategies driving global business success.
        </p>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 pt-2">
          <Link className="flex items-center gap-2 bg-white text-blue-700 font-semibold text-sm px-6 py-3 rounded-full hover:bg-blue-50 transition">
            Read Articles <ArrowRight size={16} />
          </Link>

          <Link className="flex items-center gap-2 border border-white text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/10 transition">
            Get in Touch
          </Link>
        </div>

      </div>
    </section>


            {/* FEATURED STORIES */}
            <section className="py-20 px-8 md:px-16 bg-gray-100">
                <h2 className="text-2xl font-bold mb-10">Featured Stories</h2>

                <div className="space-y-8">

                    {[1, 2].map((item) => (
                        <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden md:flex">

                            <img
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                                className="w-full md:w-1/2 h-64 object-cover "
                            />

                            <div className="p-6 space-y-4">
                                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                    Technology
                                </span>

                                <h3 className="text-xl font-bold">
                                    The Future of AI in Enterprise: 2026 Trends
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    Artificial Intelligence continues to reshape how businesses operate...
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">Sarah Chen</span>
                                    <span className="text-blue-600 text-sm cursor-pointer">
                                        Read More →
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </section>

            {/* FEATURED BUSINESSES */}
            <section className="py-20 px-8 md:px-16 bg-gray-50 text-center">
                <h2 className="text-2xl font-bold">Featured Businesses</h2>
                <p className="text-gray-500 mb-10">
                    Leading companies shaping industries
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-xl shadow p-4 text-left">
                            <img
                                src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
                                className="rounded-lg mb-4 h-40 w-full object-cover"
                            />

                            <h3 className="font-semibold">TechCorp Industries</h3>
                            <p className="text-sm text-gray-500">
                                Leading innovation in AI and cloud computing.
                            </p>
                        </div>
                    ))}

                </div>

                <button className="mt-8 text-blue-600 font-medium">
                    View All Businesses →
                </button>
            </section>

            {/* MORE TOP PERFORMERS */}
            <section className="py-20 px-8 md:px-16 bg-gray-100 text-center">
                <h2 className="text-2xl font-bold mb-10">More Top Performers</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-xl shadow overflow-hidden text-left">
                            <img
                                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
                                className="h-40 w-full object-cover"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold">Global Finance Group</h3>
                                <p className="text-sm text-gray-500">
                                    Investment banking services.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="w-screen py-20 flex justify-center text-white bg-gradient-to-r from-purple-600 to-indigo-600">
                <div className="w-full max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Stay Ahead of the Curve
                    </h2>

                    <p className="text-white/80 mb-6">
                        Get weekly insights on market trends and strategies.
                    </p>

                    <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold">
                        Subscribe Now →
                    </button>
                </div>
            </section>
        </div>
    );
}