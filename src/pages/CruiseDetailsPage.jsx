import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Navigation, CheckCircle2, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

// Full verified data from vaalrivercruises.co.za
const cruiseData = {
    'lunch-cruises': {
        title: 'Public Lunch Cruises on the Vaal River',
        variants: [
            { label: 'Adult', price: 'R 680.00' },
            { label: 'Child (U12)', price: 'R 340.00' },
            { label: 'Babies', price: 'Free' },
        ],
        duration: '2 Hours',
        capacity: 'Up to 120 Guests',
        images: [
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/FB_IMG_1698245288263.jpg?v=1724230929',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/IMG-20211126-WA0048.jpg?v=1724230929',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20210410_160833.jpg?v=1724231529',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/IMG-20201012-WA0005.jpg?v=1724230929',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/IMG-20240107-WA0009.jpg?v=1724230929',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/IMG-20231219-WA0005.jpg?v=1724230929',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20210410_160118.jpg?v=1724231003',
        ],
        description: 'Enjoy a delightful Sunday Lunch Cruise on the Vaal River! Perfect for a day outdoors, cruising the tranquil waters with family and friends. Take in the beautiful scenery while enjoying a buffet meal and drinks on our stunning 120-seater Liquid Lounge river cruiser.',
        highlights: [
            'Welcome drink on arrival',
            'Extensive gourmet buffet lunch',
            'Live onboard entertainment / DJ',
            'Two fully stocked cash bars',
            'Scenic 2-hour leisurely cruise',
            'Children (U12) half price',
        ],
        bookLink: 'https://vaalrivercruises.co.za/products/lunch-cruises',
    },
    'leisure-cruises': {
        title: 'Public Leisure Cruises on the Vaal River',
        variants: [
            { label: 'Adult', price: 'R 250.00' },
            { label: 'Child', price: 'R 125.00' },
            { label: 'Babies', price: 'Free' },
        ],
        duration: '1 Hour',
        capacity: 'Up to 120 Guests',
        images: [
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment3.png?v=1724232333',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment7.png?v=1724232768',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment4.png?v=1724232333',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment2.png?v=1724232333',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment5.png?v=1724232383',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment.png?v=1772476873',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment22.png?v=1724233776',
        ],
        description: 'Come chill with us! We offer 1-hour Sunday leisure cruises — perfect for a day outdoors, cruising the gentle waters of the Vaal River with family and friends. Take in the sights and sounds of nature along beautiful Millionaires Bend.',
        highlights: [
            '1-hour scenic cruise',
            'Upper and lower viewing decks',
            'Fully stocked cash bar',
            'Great for families & friends',
            'Children half price',
        ],
        bookLink: 'https://vaalrivercruises.co.za/products/leisure-cruises',
    },
    'lady-elizabeth': {
        title: 'Lady Elizabeth Charters',
        variants: [
            { label: 'Charter (1 hour minimum)', price: 'R 2,200.00' },
        ],
        duration: '1 Hour Minimum',
        capacity: 'Up to 12 Guests',
        images: [
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/Product-Image_79ca45c8-05a3-45da-b76b-b215870ba474.png?v=1718574424',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/Lady-Elizabeth--e1707227306289.jpg?v=1718457682',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/WhatsApp-Image-2024-02-01-at-16.47.34.jpg?v=1718574445',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20231202_150213-scaled.jpg?v=1718574445',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20231202_171225-scaled.jpg?v=1718574445',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20231115_120545-scaled.jpg?v=1718574445',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20231115_124546-Large-rotated.jpg?v=1718574445',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20231115_155127-scaled.jpg?v=1718574445',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20240106_161223-scaled.jpg?v=1718574445',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/LE-1-rotated.jpg?v=1718457611',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/L-E-2-rotated.jpg?v=1718457611',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/L-E-3-rotated.jpg?v=1718457611',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/L-E-4-rotated.jpg?v=1718457611',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/L-E-5-rotated.jpg?v=1718457690',
        ],
        description: 'A brand new and stunning addition to our fleet — welcome Lady Elizabeth. She is a 12-seater European Sloep boat, equipped with an awesome sound system and plush upholstery for comfortable seating. Perfect for intimate celebrations, bachelor/bachelorette parties, family outings or private events on the water.',
        highlights: [
            'Exclusive 12-seater luxury vessel',
            'Premium European Sloep design',
            'Awesome onboard sound system',
            'Plush, comfortable seating',
            'Dedicated Skipper',
            'Perfect for intimate events',
        ],
        bookLink: 'https://vaalrivercruises.co.za/products/lady-elizabeth',
    },
    'soul-rnb-cruise': {
        title: 'Soul RnB Cruise | Shades of Olive Green',
        variants: [
            { label: 'Couple', price: 'R 1,600.00' },
            { label: 'Single', price: 'R 800.00' },
        ],
        duration: 'Special Event',
        capacity: 'Limited Tickets',
        images: [
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/WhatsApp_Image_2026-03-02_at_20.33.51.jpg?v=1772476873',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/20250110_180124.jpg?v=1772476873',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/IMG-20201113-WA0003.jpg?v=1772476873',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/Gmediaent_-_Liquid_Lounge-159_8ca63604-9994-42f5-9b8d-cededdbe53e3.jpg?v=1772476873',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/Gmediaent_-_Liquid_Lounge-33_bd0f0743-cebd-4630-9269-bbf1f9f657e8.jpg?v=1772476873',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0010_Moment.png?v=1772476873',
            'https://cdn.shopify.com/s/files/1/0575/2409/3041/files/DJI_0049_1.jpg?v=1772476539',
        ],
        description: 'Set sail on a smooth Soul & RnB Cruise on the Vaal River, where soulful beats, sunset views, and great company create the perfect evening. Dress in your finest Shades of Olive Green and join us for premium dining, signature cocktails, and live DJs.',
        highlights: [
            'Shades of Olive Green dress code',
            'Curated RnB / Soul DJ set',
            'Premium dinner experience',
            'Signature cocktails & drinks menu',
            'Vibrant, intimate atmosphere',
            'Ticketed — couple or single options',
        ],
        bookLink: 'https://vaalrivercruises.co.za/products/soul-rnb-cruise',
    },
};

const CruiseDetailsPage = () => {
    const { handle } = useParams();
    const cruise = cruiseData[handle];
    const [activeImg, setActiveImg] = useState(0);

    if (!cruise) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center pt-20">
                <h1 className="text-4xl font-serif mb-4">Cruise Not Found</h1>
                <Link to="/cruises" className="text-primary-600 hover:text-primary-800 flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Back to Cruises
                </Link>
            </div>
        );
    }

    const prevImg = () => setActiveImg((i) => (i === 0 ? cruise.images.length - 1 : i - 1));
    const nextImg = () => setActiveImg((i) => (i === cruise.images.length - 1 ? 0 : i + 1));

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#fdfcfb]">
            <div className="max-w-7xl mx-auto px-4">

                {/* Back */}
                <Link to="/cruises" className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary-600 mb-10 transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="text-base font-medium">Back to All Cruises</span>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Gallery */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        {/* Main image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px] mb-4 group">
                            <img
                                key={activeImg}
                                src={cruise.images[activeImg]}
                                alt={cruise.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Arrows */}
                            <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-zinc-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all z-10">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-zinc-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all z-10">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                                {activeImg + 1} / {cruise.images.length}
                            </div>
                        </div>
                        {/* Thumbnails */}
                        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                            {cruise.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImg(idx)}
                                    className={`w-20 h-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${activeImg === idx ? 'border-primary-500 shadow-md scale-95' : 'border-transparent opacity-70 hover:opacity-100'}`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-serif text-zinc-900 leading-tight mb-4">{cruise.title}</h1>
                            <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
                                <div className="flex items-center gap-1.5 bg-zinc-100 px-3 py-1.5 rounded-full">
                                    <Clock className="w-4 h-4 text-primary-600" />
                                    <span className="font-medium">{cruise.duration}</span>
                                </div>
                                <div className="flex items-center gap-1.5 bg-zinc-100 px-3 py-1.5 rounded-full">
                                    <Users className="w-4 h-4 text-primary-600" />
                                    <span className="font-medium">{cruise.capacity}</span>
                                </div>
                            </div>
                        </div>

                        {/* Highlights (What to Expect) - Moved up */}
                        <div className="bg-primary-50 px-6 py-7 rounded-2xl border border-primary-100">
                            <h3 className="text-xl font-serif text-zinc-900 mb-5 flex items-center gap-2">
                                <Navigation className="w-5 h-5 text-primary-600" /> What to Expect
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                {cruise.highlights.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-zinc-700 text-sm leading-snug">
                                        <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-zinc-600 text-lg leading-relaxed">{cruise.description}</p>

                        {/* Condensed Pricing and Book CTA */}
                        <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
                            <div className="flex-grow w-full sm:w-auto">
                                <h3 className="text-xs uppercase tracking-widest text-zinc-400 mb-3 font-bold">Pricing Guide</h3>
                                <div className="space-y-2">
                                    {cruise.variants.map((v, i) => (
                                        <div key={i} className="flex justify-between items-center py-1 border-b border-zinc-50 last:border-0 last:pb-0">
                                            <span className="text-zinc-600 text-sm">{v.label}</span>
                                            <span className="text-zinc-900 font-bold">{v.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="w-full sm:w-auto shrink-0">
                                <a
                                    href={cruise.bookLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-lg shadow-lg shadow-primary-600/30 hover:bg-primary-500 hover:-translate-y-1 active:scale-95 transition-all"
                                >
                                    Book This Cruise
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default CruiseDetailsPage;
