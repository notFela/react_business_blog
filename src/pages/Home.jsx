import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, User, ChevronRight, Mail, Award } from 'lucide-react'
import { BeatLoader } from 'react-spinners'
import BusinessCard from '../components/BusinessCard'
import blogsData from '../data/blogs.json'
import businessesData from '../data/business.json'

export default function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 700)
        return () => clearTimeout(timer)
    }, [])

    const featuredBlogs = blogsData.filter((b) => b.featured)
    const featuredBusinesses = businessesData.filter((b) => b.featured)
    const moreBusinesses = businessesData.filter((b) => !b.featured)

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <BeatLoader color="#2563eb" size={12} />
            </div>
        )
    }

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <p className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-5">
                        <TrendingUp className="w-3.5 h-3.5" /> Top Business Insights
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 max-w-2xl">
                        Discover Industry Leaders &amp; Market Trends
                    </h1>
                    <p className="text-blue-100 text-base max-w-xl mb-8 leading-relaxed">
                        Explore in-depth analysis of Fortune 500 companies, emerging startups, and the strategies driving global business success.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            to="/blog"
                            className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors duration-200 text-sm"
                        >
                            Read Articles <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/contact"
                            className="flex items-center gap-2 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors duration-200 text-sm"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Stories */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="flex items-center gap-2 mb-8">
                    <Award className="text-yellow-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Featured Stories</h2>
                </div>

                <div className="space-y-4">
                    {featuredBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer group flex flex-col md:flex-row"
                        >
                            <div className="md:w-64 h-44 md:h-auto overflow-hidden shrink-0">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    onError={(e) => {
                                        e.target.src = `https://placehold.co/600x300/e2e8f0/94a3b8?text=${encodeURIComponent(blog.category)}`
                                    }}
                                />
                            </div>
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                                            {blog.category}
                                        </span>
                                        <span className="text-xs text-gray-400 flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> {blog.readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{blog.excerpt}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center">
                                            <User className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800">{blog.author}</p>
                                            <p className="text-xs text-gray-400">{blog.authorRole}</p>
                                        </div>
                                    </div>
                                    <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read More <ChevronRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Businesses */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Businesses</h2>
                        <p className="text-gray-500 text-sm">Leading companies shaping industries and driving innovation across sectors.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {featuredBusinesses.map((biz) => (
                            <BusinessCard key={biz.id} business={biz} />
                        ))}
                    </div>
                    <div className="text-center">
                        <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 mx-auto hover:gap-2 transition-all">
                            View All Businesses <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* More Top Performers */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">More Top Performers</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {moreBusinesses.map((biz) => (
                        <BusinessCard key={biz.id} business={biz} />
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white py-20 text-center">
                <div className="max-w-2xl mx-auto px-6">
                    <h2 className="text-3xl font-extrabold mb-3">Stay Ahead of the Curve</h2>
                    <p className="text-blue-100 mb-8 text-sm leading-relaxed">
                        Get weekly insights on market trends, business strategies, and industry analysis delivered to your inbox.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors duration-200 text-sm"
                    >
                        <Mail className="w-4 h-4" /> Subscribe Now <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    )
}