import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
        <div className="pt-24 pb-24 min-h-screen bg-zinc-50">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif text-zinc-900 mb-6"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-600 text-lg md:text-xl leading-relaxed"
                    >
                        Decades of exceptional river cruising on South Africa's majestic Vaal River.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1542314831-c6a4d14eff50?q=80&w=2000&auto=format&fit=crop"
                                alt="Liquid Lounge History"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative block */}
                        <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-primary-100 rounded-2xl -z-10"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-zinc-900">The Ultimate Vaal River Experience</h2>
                        <p className="text-zinc-600 leading-relaxed text-lg">
                            Since our inception, Liquid Lounge has been the premier river cruiser in the Vaal Triangle. We pride ourselves on delivering an unforgettable mix of spectacular scenery, world-class dining, and impeccable service.
                        </p>
                        <p className="text-zinc-600 leading-relaxed text-lg">
                            Our 120-seater luxury vessel is perfectly equipped to host both massive celebrations and intimate get-togethers. From weddings that take your breath away to our famous Sunday public cruises, we offer a floating venue unlike any other.
                        </p>
                        <div className="pt-6">
                            <a href="/contact" className="inline-block px-8 py-4 bg-zinc-900 text-white rounded-full font-semibold hover:bg-zinc-800 transition-colors">
                                Contact Our Team
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
