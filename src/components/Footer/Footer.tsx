import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import LogoMain from '../../assets/logo-main.png';

export default function Footer() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaFacebookF />, link: 'https://facebook.com/zayat', color: 'hover:bg-[#1877F2]' },
        { icon: <FaInstagram />, link: 'https://instagram.com/zayat', color: 'hover:bg-[#E4405F]' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com/company/zayat', color: 'hover:bg-[#0A66C2]' },
        { icon: <FaWhatsapp />, link: 'https://wa.me/201000000000', color: 'hover:bg-[#25D366]' },
    ];

    const navItems = [
        { name: t('footer.links.0'), path: '/' },
        { name: t('footer.links.1'), path: '/aboutus' },
        { name: t('footer.links.2'), path: '/ourproducts' },
        { name: t('footer.links.3'), path: '/contact' },
    ];

    return (
        
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-100" dir={isRtl ? 'rtl' : 'ltr'}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* 1. Centered Logo Section */}
                <div className="flex flex-col items-center mb-16 text-center">
                    <img
                        src={LogoMain}
                        alt="Zayat Logo"
                        className="h-16 lg:h-20 w-auto object-contain mb-6 hover:scale-105 transition-transform duration-300"
                    />
                    <p className={`text-gray-500 leading-relaxed font-medium max-w-lg text-sm lg:text-base ${isRtl ? 'font-arabic' : ''}`}>
                        {t('footer.description')}
                    </p>
                </div>

                {/* 2. Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-y border-gray-200/60 py-12">

                    {/* Quick Links */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-gray-900 font-black mb-6 text-sm uppercase tracking-widest">{t('footer.quick_links')}</h4>
                        <ul className="space-y-4 text-center lg:text-start">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink to={item.path} className="text-gray-500 hover:text-agri-green transition-colors font-bold text-sm block">
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Exports */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-gray-900 font-black mb-6 text-sm uppercase tracking-widest">{t('footer.key_exports')}</h4>
                        <ul className="space-y-4 text-gray-500 font-bold text-sm text-center lg:text-start">
                            {(t('footer.exports', { returnObjects: true }) as string[]).map(product => (
                                <li key={product} className="hover:text-agri-green cursor-pointer transition-colors">{product}</li>
                            ))}
                        </ul>
                    </div>

                    {/* New Contact Section (Clean Look) */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-gray-900 font-black mb-6 text-sm uppercase tracking-widest">{t('footer.contact_us')}</h4>
                        <div className="space-y-5">
                            <div className="flex items-center gap-3 text-gray-500 group justify-center lg:justify-start">
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-agri-green group-hover:text-white transition-all">
                                    <FaEnvelope size={12} />
                                </div>
                                <a href="mailto:info@zayatexport.com" className="text-sm font-bold hover:text-agri-green transition-colors">info@zayatexport.com</a>
                            </div>
                            <div className="flex items-start gap-3 text-gray-500 group justify-center lg:justify-start">
                                <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-agri-green group-hover:text-white transition-all mt-1">
                                    <FaMapMarkerAlt size={12} />
                                </div>
                                <span className={`text-sm font-bold max-w-[180px] ${isRtl ? 'font-arabic' : ''}`}>{t('footer.info.address')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-gray-900 font-black mb-6 text-sm uppercase tracking-widest">Follow Us</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm transition-all duration-300 hover:text-white hover:-translate-y-1 ${social.color}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-100 pt-8">
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">
                        © {currentYear} AGRO MART. {t('footer.rights')}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                        <span>Developed by</span>
                        <a
                            href="https://globalnexuseg.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-agri-green transition-all duration-300 border-b border-transparent hover:border-agri-green pb-0.5"
                        >
                            Global Nexus
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}