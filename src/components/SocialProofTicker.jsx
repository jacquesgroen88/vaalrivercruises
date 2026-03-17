import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const NOTIFICATIONS = [
    { name: 'Thabo M.', location: 'Vereeniging', product: 'Sunday Lunch Cruise', time: '2 min ago' },
    { name: 'Sarah K.', location: 'Johannesburg', product: 'Leisure Cruise', time: '5 min ago' },
    { name: 'David & Emma', location: 'Pretoria', product: 'Lady Elizabeth Charter', time: '12 min ago' },
    { name: 'Priya R.', location: 'Vanderbijlpark', product: 'Sunday Lunch Cruise', time: '18 min ago' },
    { name: 'Leandri P.', location: 'Centurion', product: 'Soul RnB Cruise', time: '25 min ago' },
    { name: 'Michael S.', location: 'Alberton', product: 'Soul RnB Cruise (Couple)', time: '31 min ago' },
    { name: 'Zanele N.', location: 'Johannesburg', product: 'Leisure Cruise', time: '44 min ago' },
    { name: 'Ruan B.', location: 'Klerksdorp', product: 'Lady Elizabeth Charter', time: '52 min ago' },
];

const SocialProofTicker = () => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [visible, setVisible] = useState(true);
    const intervalRef = useRef(null);

    const cycle = () => {
        setVisible(false);
        setTimeout(() => {
            setCurrentIdx(prev => (prev + 1) % NOTIFICATIONS.length);
            setVisible(true);
        }, 400);
    };

    useEffect(() => {
        intervalRef.current = setInterval(cycle, 5000);
        return () => clearInterval(intervalRef.current);
    }, []);

    const notif = NOTIFICATIONS[currentIdx];

    return (
        <div className="fixed bottom-6 left-6 z-50 pointer-events-none">
            <AnimatePresence mode="wait">
                {visible && (
                    <motion.div
                        key={currentIdx}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="bg-white rounded-2xl shadow-2xl border border-zinc-100 px-4 py-3 flex items-center gap-3 pointer-events-auto max-w-xs"
                    >
                        {/* Avatar */}
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0 text-primary-700 font-bold text-sm">
                            {notif.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs text-zinc-500 font-medium truncate">
                                <span className="text-zinc-800 font-semibold">{notif.name}</span> from {notif.location}
                            </p>
                            <p className="text-xs text-zinc-700 flex items-center gap-1 mt-0.5">
                                <ShoppingBag className="w-3 h-3 text-primary-500 shrink-0" />
                                Just booked <span className="font-semibold text-primary-700 ml-0.5 truncate">{notif.product}</span>
                            </p>
                            <p className="text-xs text-zinc-400 mt-0.5">{notif.time}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SocialProofTicker;
