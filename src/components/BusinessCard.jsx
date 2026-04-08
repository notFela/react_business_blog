import { MapPin, DollarSign, Users, Star } from 'lucide-react'

const categoryColors = {
    Technology: 'bg-blue-100 text-blue-700',
    Energy: 'bg-green-100 text-green-700',
    Healthcare: 'bg-teal-100 text-teal-700',
    Finance: 'bg-yellow-100 text-yellow-700',
    Retail: 'bg-pink-100 text-pink-700',
    Construction: 'bg-orange-100 text-orange-700',
}

export default function BusinessCard({ business }) {
    const { name, category, description, revenue, employees, location, featured, image } = business
    const colorClass = categoryColors[category] || 'bg-gray-100 text-gray-700'

    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
            {/* Image */}
            <div className="h-36 overflow-hidden relative">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                        e.target.src = `https://placehold.co/600x240/e2e8f0/94a3b8?text=${encodeURIComponent(name)}`
                    }}
                />
                {featured && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
                        {category}
                    </span>
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-1.5 group-hover:text-blue-600 transition-colors duration-200">
                    {name}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                    {description}
                </p>

                <div className="border-t border-gray-50 pt-3 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                            <DollarSign className="w-3.5 h-3.5 text-green-500" />
                            {revenue}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Users className="w-3.5 h-3.5 text-blue-500" />
                            {employees}
                        </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-red-400" />
                        {location}
                    </div>
                </div>
            </div>
        </div>
    )
}