import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { ClipLoader } from 'react-spinners'

const TOPICS = ['General Inquiry', 'Partnership', 'Advertising', 'Press & Media', 'Technical Support', 'Other']

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitting, setSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Name is required'
        if (!form.email.trim()) e.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
        if (!form.subject) e.subject = 'Please select a topic'
        if (!form.message.trim()) e.message = 'Message is required'
        return e
    }

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }))
        if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
    }

    const handleSubmit = async () => {
        const e = validate()
        if (Object.keys(e).length > 0) { setErrors(e); return }
        setSubmitting(true)
        await new Promise((r) => setTimeout(r, 1500))
        setSubmitting(false)
        setSubmitted(true)
    }

    return (
        <div>
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white text-center py-16">
                <div className="max-w-2xl mx-auto px-6">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <Mail className="w-7 h-7 text-white" />
                    </div>
                    <h1 className="text-4xl font-extrabold mb-3">Get in Touch</h1>
                    <p className="text-blue-100 text-sm">Have a question or want to collaborate? We'd love to hear from you.</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            <h2 className="font-bold text-gray-900 text-lg mb-5">Contact Information</h2>
                            <div className="space-y-5">
                                {[
                                    {
                                        icon: <Mail className="w-4 h-4 text-blue-600" />,
                                        bg: 'bg-blue-50',
                                        label: 'Email',
                                        lines: ['hello@businessblog.com', 'support@businessblog.com'],
                                    },
                                    {
                                        icon: <Phone className="w-4 h-4 text-green-600" />,
                                        bg: 'bg-green-50',
                                        label: 'Phone',
                                        lines: ['+1 (555) 123-4567', 'Mon-Fri 9am-6pm EST'],
                                    },
                                    {
                                        icon: <MapPin className="w-4 h-4 text-purple-600" />,
                                        bg: 'bg-purple-50',
                                        label: 'Office',
                                        lines: ['123 Business Ave', 'New York, NY 10001'],
                                    },
                                ].map(({ icon, bg, label, lines }) => (
                                    <div key={label} className="flex items-start gap-3">
                                        <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center shrink-0`}>
                                            {icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-800 mb-0.5">{label}</p>
                                            {lines.map((l) => (
                                                <p key={l} className="text-xs text-gray-500">{l}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:col-span-2">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-500 text-sm mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                    <button
                                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                                        className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="font-bold text-gray-900 text-lg mb-6">Send us a Message</h2>
                                    <div className="space-y-5">
                                        {/* Name + Email */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Your Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={form.name}
                                                    onChange={(e) => handleChange('name', e.target.value)}
                                                    placeholder="John Doe"
                                                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                                                        }`}
                                                />
                                                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    value={form.email}
                                                    onChange={(e) => handleChange('email', e.target.value)}
                                                    placeholder="john@example.com"
                                                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                                                        }`}
                                                />
                                                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Subject <span className="text-red-500">*</span>
                                            </label>
                                            <select
                                                value={form.subject}
                                                onChange={(e) => handleChange('subject', e.target.value)}
                                                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none bg-no-repeat ${errors.subject ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                                                    }`}
                                            >
                                                <option value="">Select a topic...</option>
                                                {TOPICS.map((t) => <option key={t} value={t}>{t}</option>)}
                                            </select>
                                            {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                value={form.message}
                                                onChange={(e) => handleChange('message', e.target.value)}
                                                placeholder="Tell us how we can help you..."
                                                rows={6}
                                                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'
                                                    }`}
                                            />
                                            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                                        </div>

                                        {/* Submit */}
                                        <button
                                            onClick={handleSubmit}
                                            disabled={submitting}
                                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200"
                                        >
                                            {submitting ? (
                                                <><ClipLoader size={14} color="#fff" /> Sending...</>
                                            ) : (
                                                <><Send className="w-4 h-4" /> Send Message</>
                                            )}
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="max-w-6xl mx-auto px-6 pb-16">
                <div className="bg-blue-50 rounded-2xl border border-blue-100 flex flex-col items-center justify-center py-20 gap-3 text-center">
                    <MapPin className="w-10 h-10 text-blue-500" />
                    <p className="font-semibold text-gray-800">123 Business Ave, New York, NY</p>
                    <p className="text-sm text-gray-400">Interactive map would be here</p>
                </div>
            </section>
        </div>
    )
}