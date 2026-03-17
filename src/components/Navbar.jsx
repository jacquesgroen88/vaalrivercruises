import { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Cruises', path: '/cruises' },
        { name: 'Private Charters', path: '/charters' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-light py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="flex items-center group relative">
                        {/* Glow effect for visibility on light backgrounds */}
                        <div className={`absolute inset-0 bg-black/40 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none ${isScrolled ? 'opacity-100' : 'opacity-0'}`}></div>
                        <img
                            src="/src/Liquid-Lounge-sml (2).png"
                            alt="Liquid Lounge Logo"
                            className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium tracking-wide transition-colors ${isScrolled
                                    ? 'text-zinc-600 hover:text-primary-600'
                                    : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/book"
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${isScrolled
                                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg'
                                : 'bg-white text-primary-900 hover:bg-white/90'
                                }`}
                        >
                            Book Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors ${isScrolled || isOpen ? 'text-zinc-900' : 'text-white'
                                }`}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-light border-t border-zinc-200 shadow-xl overflow-hidden animate-in slide-in-from-top-2">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="block px-3 py-4 text-base font-medium text-zinc-800 border-b border-zinc-100 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/book"
                            className="block mt-4 w-full text-center px-6 py-3 rounded-full bg-primary-600 text-white font-semibold shadow-md hover:bg-primary-700 transition-colors"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
