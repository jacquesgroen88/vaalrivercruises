import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CruiseCard = ({ title, price, duration, capacity, image, desc, link, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay }}
            className="group bg-white rounded-2xl overflow-hidden shadow-md border border-zinc-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            {/* Entire image area is clickable */}
            <Link to={link} className="relative h-64 overflow-hidden block">
                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-zinc-900/10 transition-colors z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Price badge */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                    <span className="font-semibold text-primary-900 text-sm">{price}</span>
                </div>
                {/* "View Details" hover overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 backdrop-blur-sm text-zinc-900 font-semibold px-6 py-2.5 rounded-full shadow-lg flex items-center gap-2">
                        View Details <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </Link>

            <div className="p-8 flex flex-col flex-grow">
                <Link to={link}>
                    <h3 className="text-2xl font-serif text-zinc-900 mb-3 group-hover:text-primary-700 transition-colors">{title}</h3>
                </Link>
                <p className="text-zinc-600 mb-6 flex-grow leading-relaxed">{desc}</p>

                <div className="flex items-center gap-6 mb-8 text-sm text-zinc-500 font-medium">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary-500" />
                        <span>{duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary-500" />
                        <span>{capacity}</span>
                    </div>
                </div>

                <Link
                    to={link}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-zinc-50 hover:bg-primary-600 text-zinc-900 hover:text-white rounded-xl font-semibold transition-all group-hover:border-transparent border border-zinc-200"
                >
                    Explore Details <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
};

export default CruiseCard;
