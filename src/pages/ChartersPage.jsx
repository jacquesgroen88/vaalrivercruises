import { motion } from 'framer-motion';
import CruiseCard from '../components/CruiseCard';

const ChartersPage = () => {
    return (
        <div className="pt-24 pb-24 min-h-screen bg-zinc-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif text-zinc-900 mb-6"
                    >
                        Private Charters
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-600 text-lg md:text-xl leading-relaxed"
                    >
                        Elevate your next event. Hire our vessels exclusively for corporate functions, birthdays, weddings, or intimate gatherings.
                    </motion.p>
                </div>

                {/* Private Charters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CruiseCard
                        title="Lady Elizabeth"
                        price="R 2,200.00"
                        duration="1 Hour Charter"
                        capacity="Up to 12 Guests"
                        desc="Intimate and luxurious. Our beautiful Lady Elizabeth is the perfect vessel for small bachelor/bachelorettes, executive meetings, or private family outings."
                        image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/Product-Image_79ca45c8-05a3-45da-b76b-b215870ba474.png?v=1718574424"
                        link="/cruises/lady-elizabeth"
                        delay={0.1}
                    />
                    {/* We only have one explicit charter product, but we can add placeholders for others if the user wants them later */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-zinc-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center col-span-1 md:col-span-2 lg:col-span-2 overflow-hidden relative"
                    >
                        <div className="absolute inset-0 opacity-20 MixBlendMode overlay">
                            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Wedding celebration" />
                        </div>
                        <div className="relative z-10 max-w-lg">
                            <h3 className="text-3xl font-serif mb-4 text-primary-300">Custom Events & Large Groups</h3>
                            <p className="text-zinc-300 mb-8 leading-relaxed">
                                Looking to rent the main 120-seater Liquid Lounge cruiser for a massive celebration or corporate gala? We offer bespoke packages tailored entirely to your needs.
                            </p>
                            <a href="/contact" className="inline-block px-8 py-3 bg-white text-zinc-900 rounded-full font-semibold hover:bg-primary-50 transition-colors">
                                Inquire Now
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default ChartersPage;
