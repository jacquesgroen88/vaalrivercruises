import { motion } from 'framer-motion';
import { ChevronRight, Calendar, Users, Wine, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import CruiseCard from '../components/CruiseCard';
const HomePage = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-900/90 z-10" />
                    <img
                        src="http://vaalrivercruises.co.za/cdn/shop/files/DJI_0015_Moment2-e1599902021325_0761d2a7-f3e2-42d5-bdc4-49dc49354515.webp?v=1719916111"
                        alt="Liquid Lounge Vaal River Luxury Cruise"
                        className="w-full h-full object-cover object-center animate-image-pan"
                    />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-lg"
                    >
                        Escape to the <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-100 italic font-medium">Vaal River</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-2xl text-zinc-200 mb-10 max-w-2xl mx-auto font-light"
                    >
                        Experience ultimate luxury on South Africa's finest inland cruises. Join us for an unforgettable journey along the lush shores of Millionaires Bend.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link to="/cruises" className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] flex items-center gap-2">
                            View Our Cruises <ChevronRight className="w-5 h-5" />
                        </Link>
                        <Link to="/charters" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-lg transition-all">
                            Private Charters
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro / Quick Features */}
            <section className="py-24 bg-zinc-50 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-6">A Premier River Experience</h2>
                        <p className="text-zinc-600 text-lg md:text-xl leading-relaxed">
                            Nestled in the deep south of Gauteng, less than one hour's drive from Jo'burg central, Liquid Lounge makes its presence known along the scenic Vaal River.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Calendar className="w-8 h-8 text-primary-600" />,
                                title: "Public Cruises",
                                desc: "Join our famous Sweet Sunday lunch cruises and scenic leisure afternoon boat rides."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-primary-600" />,
                                title: "Private Events",
                                desc: "The perfect floating venue for corporate functions, weddings, and milestone celebrations."
                            },
                            {
                                icon: <Wine className="w-8 h-8 text-primary-600" />,
                                title: "Luxury Amenities",
                                desc: "Enjoy delicious buffet meals, fully stocked cash bars, and top-tier entertainment."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow group"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-3 font-serif">{feature.title}</h3>
                                <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Cruises */}
            <section className="py-24 bg-white px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-6">Our Signature Experiences</h2>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                From relaxing Sunday lunches to exclusive private charters, discover the perfect way to experience the Vaal River.
                            </p>
                        </div>
                        <Link to="/cruises" className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors group">
                            View All Packages <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <CruiseCard
                            title="Sunday Lunch Cruise"
                            price="from R 340"
                            duration="2 Hours"
                            capacity="Up to 120 Guests"
                            desc="Experience a beautiful Sunday afternoon with a magnificent buffet spread, live entertainment, and fully stocked cash bars."
                            image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/FB_IMG_1698245288263.jpg?v=1724230929"
                            link="/cruises/lunch-cruises"
                            delay={0.1}
                        />
                        <CruiseCard
                            title="Leisure Cruise"
                            price="from R 125"
                            duration="1 Hour"
                            capacity="Up to 120 Guests"
                            desc="A perfect afternoon scenic cruise. Relax on the upper deck or enjoy drinks from the bar while taking in the views."
                            image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment3.png?v=1724232333"
                            link="/cruises/leisure-cruises"
                            delay={0.2}
                        />
                        <CruiseCard
                            title="Lady Elizabeth"
                            price="R 2,200 / hour"
                            duration="1 Hour Charter"
                            capacity="Up to 12 Guests"
                            desc="Intimate and luxurious. Our Lady Elizabeth is the perfect vessel for small bachelor/bachelorettes or private family outings."
                            image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/Product-Image_79ca45c8-05a3-45da-b76b-b215870ba474.png?v=1718574424"
                            link="/cruises/lady-elizabeth"
                            delay={0.3}
                        />
                        <CruiseCard
                            title="Soul RnB Cruise"
                            price="from R 800"
                            duration="Special Event"
                            capacity="Limited Tickets"
                            desc="Shades of Olive Green dress code. Join us for a curated RnB experience on the water with premium dining and live DJs."
                            image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/WhatsApp_Image_2026-03-02_at_20.33.51.jpg?v=1772476873"
                            link="/cruises/soul-rnb-cruise"
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>
            {/* The Experience Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Full-bleed background image — clearly visible */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/FB_IMG_1698245288263.jpg?v=1724230929"
                        alt="Dining on the Liquid Lounge cruise"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Semi-transparent gradient — left side dark for text, right side clear for image */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
                </div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl font-serif mb-6 text-white drop-shadow-md"
                        >
                            Not Just a Cruise. <br /><span className="text-primary-400 italic font-medium">An Experience.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-zinc-200 text-lg leading-relaxed mb-8"
                        >
                            For over 20 years, we have been running the finest river cruiser in South Africa. We pride ourselves on creating a unique atmosphere where luxury dining meets the tranquil waters of the Vaal River. Whether celebrating a milestone or simply unwinding with family, every moment on Liquid Lounge is crafted for perfection.
                        </motion.p>
                        <motion.ul
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-3 mb-10 text-zinc-200"
                        >
                            {['120 Seater Luxury Cruiser', 'Fully Stocked Cash Bars', 'Live Entertainment & DJ Setups', 'Gourmet Buffet Dining'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-400 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </motion.ul>
                        <Link to="/about" className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-primary-900/40">
                            Discover Our Story
                        </Link>
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section className="py-24 bg-zinc-50 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-serif text-zinc-900 mb-4">What Our Guests Say</h2>
                    <p className="text-zinc-600 text-lg mb-16 max-w-2xl mx-auto">Don't just take our word for it. Read about the unforgettable moments our guests have experienced.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah M.",
                                text: "Absolutely incredible! We hosted our corporate end-of-year function here. The food was spectacular, the staff was attentive, and the views along Millionaires Bend were breathtaking.",
                                type: "Corporate Event"
                            },
                            {
                                name: "David & Emma",
                                text: "The perfect venue for our anniversary. We booked the Sunday Lunch Cruise and were blown away by the live music and atmosphere. A truly world-class experience right here in Gauteng.",
                                type: "Public Cruise"
                            },
                            {
                                name: "Michelle K.",
                                text: "Booked the Lady Elizabeth for a private bachelorette. The team accommodated all our requests, making it intimate, luxurious, and completely stress-free.",
                                type: "Private Charter"
                            }
                        ].map((review, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 flex flex-col"
                            >
                                <div className="flex justify-center gap-1 mb-6 text-gold-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-zinc-700 italic mb-8 flex-grow">"{review.text}"</p>
                                <div>
                                    <h4 className="font-bold text-zinc-900">{review.name}</h4>
                                    <p className="text-sm text-primary-600 font-medium">{review.type}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
