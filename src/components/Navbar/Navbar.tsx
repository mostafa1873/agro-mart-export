import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logoMain from '../../assets/logo-main.png';

import GB from '../../assets/GB.png';
import EG from '../../assets/EG.png';
import IT from '../../assets/IT.png';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const languages = [
        { code: 'EN', name: 'English', flag: GB },
        { code: 'AR', name: 'العربية', flag: EG },
        { code: 'IT', name: 'Italiano', flag: IT }
    ];

    const [currentLang, setCurrentLang] = useState(() => {
        const saved = i18n.language.toUpperCase();
        return languages.find(l => l.code === saved) || languages[0];
    });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth > 1024) setMobileMenuOpen(false); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
        `relative px-6 py-2 rounded-full font-bold text-sm transition-all duration-500 
        ${isActive ? 'text-white bg-agri-green shadow-lg' : 'text-gray-500 hover:text-agri-green hover:bg-gray-50'}`;

    const handleLanguageChange = (lang: any) => {
        const langCode = lang.code.toLowerCase();
        i18n.changeLanguage(langCode);
        localStorage.setItem('app_lang', langCode);
        setCurrentLang(lang);
        setLangMenuOpen(false);
        setMobileMenuOpen(false);
        window.dispatchEvent(new Event('storage'));
    };

    const isRtl = i18n.language === 'ar';

    return (
        <>
            <div className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'top-4' : 'top-0'}`}>
                <nav className={`mx-auto transition-all duration-500 ease-in-out
        ${isScrolled ? 'max-w-[95%] shadow-2xl bg-white/90 backdrop-blur-xl rounded-[3rem] border border-white/40' : 'max-w-full bg-white border-b border-gray-50'}`}>

                    <div className="w-full px-6 lg:px-12 h-24 flex justify-between items-center">

                        <div className="flex-none lg:flex-1 flex justify-start items-center">
                            <NavLink to="/" className="transition-transform duration-500 hover:scale-105 block">
                                <img
                                    src={logoMain}
                                    alt="Zayat Export Logo"
                                    className="h-[45px] sm:h-[100px] lg:h-20 w-auto object-contain block"
                                />
                            </NavLink>
                        </div>

                        <div className="hidden lg:flex flex-1 justify-center">
                            <div className="flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-100">
                                <NavLink to="/" className={navLinkStyles}>{t('nav.home')}</NavLink>
                                <NavLink to="/about" className={navLinkStyles}>{t('nav.about')}</NavLink>
                                <NavLink to="/products" className={navLinkStyles}>{t('nav.products')}</NavLink>
                                <NavLink to="/contact" className={navLinkStyles}>{t('nav.contact')}</NavLink>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-end items-center gap-3">
                            <div className="relative hidden lg:block">
                                <button
                                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                                    className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-agri-green transition-all cursor-pointer shadow-sm"
                                >
                                    <img src={currentLang.flag} className="w-5 h-3.5 object-cover rounded-sm" alt="" />
                                    <span className="font-bold text-[11px] uppercase">{currentLang.code}</span>
                                </button>
                                {langMenuOpen && (
                                    <div className="absolute top-14 right-0 bg-white shadow-2xl rounded-2xl p-2 min-w-[160px] border border-gray-50 z-50">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang)}
                                                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-agri-green hover:text-white rounded-xl transition-all"
                                            >
                                                <img src={lang.flag} className="w-5 h-3.5 rounded-sm" alt="" /> {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="lg:hidden w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-900 hover:bg-gray-200 transition-colors"
                            >
                                <HiMenuAlt3 size={28} />
                            </button>
                        </div>

                    </div>
                </nav>
            </div>

            {/* Menu Overlay */}
            <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setMobileMenuOpen(false)} />

            {/* Sidebar Mobile */}
            <div className={`fixed top-0 h-full w-[280px] bg-white z-[120]  transition-transform duration-500 ease-in-out transform 
                ${isRtl ? 'left-0 rounded-r-[2.5rem]' : 'right-0 rounded-l-[2.5rem]'} 
                ${mobileMenuOpen ? 'translate-x-0' : (isRtl ? '-translate-x-full' : 'translate-x-full')}`}>

                <div className="flex flex-col h-full p-6">
                    <div className="flex justify-between items-center mb-10">
                        <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="block">
                            <img
                                src={logoMain}
                                alt="Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </NavLink>
                        <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-gray-400 hover:bg-gray-100 transition-colors">
                            <HiX size={20} />
                        </button>
                    </div>

                    <div className="space-y-2 flex-grow">
                        {[
                            { name: t('nav.home'), path: '/', id: '01' },
                            { name: t('nav.about'), path: '/about', id: '02' },
                            { name: t('nav.products'), path: '/products', id: '03' },
                            { name: t('nav.contact'), path: '/contact', id: '04' }
                        ].map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="group block w-full"
                            >
                                {({ isActive }) => (
                                    <div className={`flex items-center gap-4 h-12 transition-all duration-300 ${isRtl ? 'flex-row-reverse justify-end text-right' : 'flex-row'}`}>
                                        <div className="relative">
                                            <span className={`text-2xl font-black uppercase tracking-tighter transition-all duration-300
                                                ${isActive ? 'text-agri-green' : 'text-gray-900 group-hover:text-agri-green'}
                                            `}>
                                                {link.name}
                                            </span>
                                            <span className={`absolute -bottom-1 right-0 h-1 bg-agri-green rounded-full transition-all duration-500
                                                ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                                            `} />
                                        </div>
                                        <span className={`text-[10px] font-black w-4 text-center ${isActive ? 'text-agri-green' : 'text-gray-200'}`}>
                                            {link.id}
                                        </span>
                                    </div>
                                )}
                            </NavLink>
                        ))}

                        <div className="mt-6 pt-6 border-t border-gray-50">
                            <span className={`block text-[9px] font-black text-gray-300 uppercase tracking-widest mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                                {t('nav.select_lang')}
                            </span>

                            <div className="grid grid-cols-1 gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang)}
                                        className={`flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all border
                                            ${currentLang.code === lang.code
                                                ? 'bg-gray-900 border-gray-900 text-white'
                                                : 'bg-gray-50 border-transparent text-gray-500'
                                            }`}
                                    >
                                        <img src={lang.flag} className="w-4 h-2.5 object-cover rounded-[1px]" alt="" />
                                        <span className="font-bold text-[11px] uppercase">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                        <div className="flex justify-center gap-5 mb-3">
                            <FaFacebookF size={14} className="text-gray-300 hover:text-agri-green" />
                            <FaInstagram size={14} className="text-gray-300 hover:text-agri-green" />
                            <FaWhatsapp size={14} className="text-gray-300 hover:text-agri-green" />
                        </div>
                        <p className="text-[8px] text-center font-bold text-gray-300 uppercase tracking-[0.2em]">{t('nav.footer_tag')}</p>
                    </div>

                </div>
            </div>
        </>
    );
}