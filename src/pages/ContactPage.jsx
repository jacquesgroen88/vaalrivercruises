import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-zinc-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif text-zinc-900 mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-600 text-lg"
                    >
                        Whether you want to book a Sunday cruise or plan a private charter event, our team is ready to assist you.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Details & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="text-primary-600 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 text-xl mb-2 font-serif">Location</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    Emerald Resort & Casino<br />
                                    777 Frikkie Meyer Blvd<br />
                                    Vanderbijlpark, 1900<br />
                                    South Africa
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0">
                                <Phone className="text-primary-600 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 text-xl mb-2 font-serif">Call Us</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    Office: 016 982 3411<br />
                                    Mobile: 083 664 3394
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center shrink-0">
                                <Mail className="text-primary-600 w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 text-xl mb-2 font-serif">Email</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    info@liquidlounge.co.za
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-zinc-100"
                    >
                        <h2 className="text-2xl font-serif text-zinc-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">Inquiry Type</label>
                                <select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow">
                                    <option>Public Cruise Booking</option>
                                    <option>Private Charter</option>
                                    <option>Corporate Event</option>
                                    <option>Wedding</option>
                                    <option>General Question</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-semibold py-4 rounded-lg transition-colors">
                                <Send className="w-5 h-5" /> Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
