import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function WhatsAppBubble() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    const phoneNumber = "201130346440";
    const message = "Hello AGRO MART Export, I'm interested in your premium products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className={`fixed bottom-6 z-[99] flex flex-col transition-all duration-500 group 
            ${isRtl ? 'left-3' : 'right-3'} items-end`}
            dir={isRtl ? 'rtl' : 'ltr'}
        >

            <div className="mb-3 py-2 px-4 bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl shadow-black/5 translate-y-2 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green"></span>
                    </span>
                    <p className="text-[10px] font-black text-gray-900 uppercase tracking-tighter whitespace-nowrap">
                        {t('whatsapp.support')} <span className={`${isRtl ? 'mr-1' : 'ml-1'} text-gray-400 italic font-medium uppercase`}>Online</span>
                    </p>
                </div>
            </div>

            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start bg-white/40 backdrop-blur-2xl hover:bg-white/70 p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] w-[56px] h-[56px] lg:w-auto lg:max-w-[60px] lg:group-hover:max-w-[260px] overflow-hidden"
            >
                <div className="w-11 h-11 lg:w-12 lg:h-12 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20 lg:group-hover:rotate-[360deg] transition-transform duration-1000">
                    <FaWhatsapp size={24} className="text-white" />
                </div>

                <div className={`hidden lg:block ${isRtl ? 'mr-3 pl-6 text-right' : 'ml-3 pr-6 text-left'} whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100`}>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] leading-none mb-1">
                        {t('whatsapp.sub')}
                    </p>
                    <p className="text-sm font-black text-gray-900 tracking-tight">
                        {t('whatsapp.main')}
                    </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full lg:group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </a>
        </div>
    );
}