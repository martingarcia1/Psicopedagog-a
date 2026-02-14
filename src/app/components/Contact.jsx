import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [status, setStatus] = useState('idle')

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')
        // Simulate API call
        setTimeout(() => {
            setStatus('success')
            setFormData({ name: '', email: '', phone: '', message: '' })
        }, 1500)
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <section id="contact" className="py-20 school-pattern-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold bg-green-100 px-4 py-1 rounded-full text-sm tracking-wide">
                        CONTACTO
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
                        Empecemos a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-500">Trabajar Juntos</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-yellow-400 w-16 h-16 rounded-bl-full opacity-50 transition-transform group-hover:scale-110" />
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover/item:bg-blue-600 transition-colors">
                                        <Mail className="w-5 h-5 text-blue-600 group-hover/item:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold">Email</p>
                                        <p className="text-gray-700">contacto@</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover/item:bg-green-600 transition-colors">
                                        <Phone className="w-5 h-5 text-green-600 group-hover/item:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold">Teléfono / WhatsApp</p>
                                        <p className="text-gray-700">+54 11 1234-5678</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center group-hover/item:bg-red-600 transition-colors">
                                        <MapPin className="w-5 h-5 text-red-600 group-hover/item:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-bold">Consultorio</p>
                                        <p className="text-gray-700">San Miguel de Tucumán/ Argentina</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform duration-500">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a6?q=80&w=2068"
                                alt="Stationery"
                                className="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                <p className="text-white font-bold text-lg flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5" /> Consultas presenciales y online
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative">
                        <div className="absolute -top-4 -right-4 text-6xl animate-bounce-slow">✏️</div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Nombre</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1">Teléfono</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="Tu número"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all placeholder:text-gray-400"
                                    placeholder="tucorreo@ejemplo.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 ml-1">Mensaje</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none placeholder:text-gray-400"
                                    placeholder="¿En qué puedo ayudarte?"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {status === 'sending' ? (
                                    'Enviando...'
                                ) : status === 'success' ? (
                                    '¡Mensaje Enviado!'
                                ) : (
                                    <>Enviar Mensaje <Send className="w-5 h-5" /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
