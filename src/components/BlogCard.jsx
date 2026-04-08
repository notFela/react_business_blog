import { Clock, User } from 'lucide-react'

const categoryColors = {
    Technology: 'bg-blue-100 text-blue-700',
    Sustainability: 'bg-green-100 text-green-700',
    Workplace: 'bg-purple-100 text-purple-700',
    Finance: 'bg-yellow-100 text-yellow-700',
    Operations: 'bg-orange-100 text-orange-700',
    Marketing: 'bg-pink-100 text-pink-700',
    Healthcare: 'bg-teal-100 text-teal-700',
    Governance: 'bg-gray-100 text-gray-700',
}

export default function BlogCard({ blog }) {
    const { title, excerpt, category, readTime, author, date, image } = blog
    const colorClass = categoryColors[category] || 'bg-gray-100 text-gray-700'

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
            {/* Image */}
            <div className="h-44 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = `https://placehold.co/600x300/e2e8f0/94a3b8?text=${encodeURIComponent(category)}`
                    }}
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
                        {category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readTime}
                    </span>
                </div>

                <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                    {title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                    {excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-700">{author}</span>
                    </div>
                    <span className="text-xs text-gray-400">{date}</span>
                </div>
            </div>
        </div>
    )
}