import { motion } from 'framer-motion';
import CruiseCard from '../components/CruiseCard';

const CruisesPage = () => {
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
                        Our Cruises
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-600 text-lg md:text-xl leading-relaxed"
                    >
                        From relaxed weekend leisure cruises to spectacular themed events — there's always something to look forward to on the Vaal River.
                    </motion.p>
                </div>

                {/* Public Packages */}
                <h2 className="text-2xl font-serif text-zinc-700 mb-6">Public Cruises</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <CruiseCard
                        title="Public Lunch Cruises"
                        price="from R 340.00"
                        duration="2 Hours"
                        capacity="Up to 120 Guests"
                        desc="Sunday buffet lunch cruise on the Vaal River. Buffet meal, live entertainment, cash bars — and children (U12) at half price."
                        image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/FB_IMG_1698245288263.jpg?v=1724230929"
                        link="/cruises/lunch-cruises"
                        delay={0.1}
                    />
                    <CruiseCard
                        title="Leisure Cruises"
                        price="from R 125.00"
                        duration="1 Hour"
                        capacity="Up to 120 Guests"
                        desc="Scenic 1-hour Sunday cruise down Millionaires Bend. Relax on deck, enjoy the bar, and take in the gorgeous Vaal scenery."
                        image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment3.png?v=1724232333"
                        link="/cruises/leisure-cruises"
                        delay={0.2}
                    />
                    <CruiseCard
                        title="Soul RnB Cruise"
                        price="from R 800.00"
                        duration="Special Event"
                        capacity="Limited Tickets"
                        desc="Shades of Olive Green dress code. A curated RnB evening on the water — premium dining, signature cocktails and live DJs."
                        image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/WhatsApp_Image_2026-03-02_at_20.33.51.jpg?v=1772476873"
                        link="/cruises/soul-rnb-cruise"
                        delay={0.3}
                    />
                </div>

                {/* Private Charters */}
                <h2 className="text-2xl font-serif text-zinc-700 mb-6">Private Charters</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <CruiseCard
                        title="Lady Elizabeth Charters"
                        price="from R 2,200.00"
                        duration="1 Hour Min."
                        capacity="Up to 12 Guests"
                        desc="Exclusive use of our stunning 12-seater European Sloep. Ideal for intimate celebrations, bachelor parties, or family outings."
                        image="https://cdn.shopify.com/s/files/1/0575/2409/3041/files/Product-Image_79ca45c8-05a3-45da-b76b-b215870ba474.png?v=1718574424"
                        link="/cruises/lady-elizabeth"
                        delay={0.1}
                    />
                </div>

            </div>
        </div>
    );
};

export default CruisesPage;
