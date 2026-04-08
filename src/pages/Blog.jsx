import { useState, useEffect } from 'react'
import { FileX } from 'lucide-react'
import { BeatLoader } from 'react-spinners'
import BlogCard from '../components/BlogCard'
import SearchBar from '../components/SearchBar'
import blogsData from '../data/blogs.json'

const CATEGORIES = ['All', 'Technology', 'Sustainability', 'Workplace', 'Finance', 'Operations', 'Marketing', 'Healthcare', 'Governance']

export default function Blog() {
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 700)
        return () => clearTimeout(timer)
    }, [])

    const filtered = blogsData.filter((blog) => {
        const matchCategory = activeCategory === 'All' || blog.category === activeCategory
        const q = search.toLowerCase()
        const matchSearch =
            !q ||
            blog.title.toLowerCase().includes(q) ||
            blog.author.toLowerCase().includes(q) ||
            blog.category.toLowerCase().includes(q) ||
            blog.excerpt.toLowerCase().includes(q)
        return matchCategory && matchSearch
    })

    return (
        <div>
            {/* Header */}
            <section className="bg-white border-b border-gray-100 py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
                        <FileX className="w-4 h-4" /> Business Insights
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Latest Articles &amp; Analysis</h1>
                    <p className="text-gray-500 max-w-lg text-sm leading-relaxed">
                        Explore our collection of in-depth business articles, market analysis, and industry trends from leading experts.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="bg-gray-50 py-10">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <SearchBar
                            value={search}
                            onChange={setSearch}
                            placeholder="Search by title, author, or keywords..."
                        />

                        {/* Category Tabs */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <p className="text-xs text-gray-400 mt-4 text-center">
                            Showing {filtered.length} of {blogsData.length} articles
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <BeatLoader color="#2563eb" size={12} />
                    </div>
                ) : filtered.length === 0 ? (
                    <div className="text-center py-20 text-gray-400">
                        <FileX className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <p className="text-lg font-semibold">No blogs found</p>
                        <p className="text-sm mt-1">Try adjusting your search or filters</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filtered.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}