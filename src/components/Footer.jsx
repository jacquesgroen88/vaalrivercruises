import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-300 py-16 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <img
                        src="//vaalrivercruises.co.za/cdn/shop/files/Liquid-Lounge-sml_1.png"
                        alt="Liquid Lounge Logo"
                        className="h-16 w-auto object-contain mb-2"
                    />
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        Experience the ultimate luxury on the Vaal River. Whether it's a relaxing Sunday cruise or a private celebration, we create unforgettable moments on the water.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <a
                            href="https://www.facebook.com/liquidloungevaal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="p-2 bg-zinc-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/liquidlounge_vaal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-2 bg-zinc-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://twitter.com/liquidliving"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter / X"
                            className="p-2 bg-zinc-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6 tracking-wide uppercase text-sm">Experiences</h4>
                    <ul className="space-y-3">
                        <li><Link to="/cruises/lunch-cruises" className="hover:text-primary-400 transition-colors text-sm">Sunday Lunch Cruises</Link></li>
                        <li><Link to="/cruises/leisure-cruises" className="hover:text-primary-400 transition-colors text-sm">Leisure Cruises</Link></li>
                        <li><Link to="/cruises/soul-rnb-cruise" className="hover:text-primary-400 transition-colors text-sm">Soul RnB Cruise</Link></li>
                        <li><Link to="/cruises/lady-elizabeth" className="hover:text-primary-400 transition-colors text-sm">Lady Elizabeth Charter</Link></li>
                        <li><Link to="/contact" className="hover:text-primary-400 transition-colors text-sm">Corporate Events</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6 tracking-wide uppercase text-sm">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                            <span className="text-sm">Emerald Resort &amp; Casino, <br />777 Frikkie Meyer Blvd,<br />Vanderbijlpark, 1900</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary-500 shrink-0" />
                            <span className="text-sm">016 982 3411 / 083 664 3394</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary-500 shrink-0" />
                            <a href="mailto:info@liquidlounge.co.za" className="text-sm hover:text-primary-400 transition-colors">info@liquidlounge.co.za</a>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-lg font-semibold text-white mb-6 tracking-wide uppercase text-sm">Stay Updated</h4>
                    <p className="text-zinc-400 text-sm mb-4">Subscribe for updates on upcoming cruises, special events and exclusive offers.</p>
                    <form className="space-y-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-sans"
                        />
                        <button className="w-full px-4 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-semibold transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-zinc-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
                <p>&copy; {new Date().getFullYear()} Liquid Lounge | Vaal River Cruises. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <span className="text-zinc-600">|</span>
                    <span className="text-zinc-600">
                        Created &amp; hosted by{' '}
                        <a href="https://jcemedia.co.za" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-400 transition-colors font-medium">
                            JCE Media
                        </a>
                        {' '}2026
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
