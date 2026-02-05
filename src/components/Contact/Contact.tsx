import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function Contact() {
    const { t, i18n } = useTranslation();
    const { pathname } = useLocation();
    const isRtl = i18n.language === 'ar';
    const lang = i18n.language;
    const baseUrl = "https://agromartexport.com";

    return (
        <div className="overflow-hidden bg-white">
            {/* SEO */}
            <Helmet>
                <title>{t('contact.badge')} | Agro Mart</title>
                <meta name="description" content={t('contact.subtitle')} />
                <meta property="og:url" content={`${baseUrl}${pathname}`} />
                <link rel="canonical" href={`${baseUrl}${pathname}`} />
                <link rel="alternate" href={`${baseUrl}/en/contact`} hreflang="en" />
                <link rel="alternate" href={`${baseUrl}/ar/contact`} hreflang="ar" />
                <link rel="alternate" href={`${baseUrl}/it/contact`} hreflang="it" />
                <link rel="alternate" href={`${baseUrl}/en/contact`} hreflang="x-default" />
            </Helmet>

            {/* Hero & Contact Section */}
            <section className="relative pt-28 lg:pt-40 pb-20 lg:pb-32">
                
                {/* Background Decoration (Same as Home) */}
                <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center transform -rotate-12 opacity-[0.05]">
                            <h2 className="text-[15vw] font-black uppercase leading-none tracking-tighter text-black">
                                Contact
                            </h2>
                        </div>
                    </div>
                    <div
                        className="absolute inset-0 opacity-[0.3]"
                        style={{
                            backgroundImage: 'radial-gradient(#16a34a 0.7px, transparent 0.7px)',
                            backgroundSize: '32px 32px'
                        }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-agri-green/10 text-agri-green rounded-full mb-6">
                            <span className="text-xs font-black uppercase tracking-widest">{t('contact.badge')}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                            {t('contact.title_grow')} <br />
                            <span className="text-agri-green italic">{t('contact.title_together')}</span>
                        </h1>
                        <p className="text-lg text-gray-500 font-medium">
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <div className={`flex flex-col lg:flex-row ${isRtl ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-20`}>
                        
                        {/* 1. Contact Info Cards */}
                        <div className="flex-1 space-y-6">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                
                                {/* Phone Card */}
                                <div className="group bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:border-agri-green/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-agri-green text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                            <FaPhoneAlt size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-black text-agri-green uppercase tracking-widest mb-2">{isRtl ? 'اتصل بنا' : 'Call Us'}</h3>
                                            <p className="text-xl font-bold text-gray-900 dir-ltr text-left">+20 123 456 789</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="group bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:border-agri-green/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-agri-orange text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                            <FaEnvelope size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-black text-agri-orange uppercase tracking-widest mb-2">{isRtl ? 'البريد الإلكتروني' : 'Email Address'}</h3>
                                            <p className="text-xl font-bold text-gray-900">info@agromartexport.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Address Card */}
                                <div className="group bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:border-agri-green/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                                            <FaMapMarkerAlt size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{isRtl ? 'الموقع' : 'Location'}</h3>
                                            <p className="text-lg font-bold text-gray-900 leading-snug">Cairo, Egypt - El Sheikh Zayed</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* WhatsApp CTA */}
                            <a href="https://wa.me/20123456789" className="flex items-center justify-between p-6 bg-green-600 text-white rounded-[2rem] hover:bg-green-700 transition-all shadow-lg group">
                                <div className="flex items-center gap-4">
                                    <FaWhatsapp size={32} />
                                    <span className="font-bold text-lg">{isRtl ? 'دردشة واتساب مباشرة' : 'Direct WhatsApp Chat'}</span>
                                </div>
                                <div className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center ${isRtl ? 'rotate-180' : ''}`}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </a>
                        </div>

                        {/* 2. Contact Form */}
                        <div className="flex-[1.5] w-full">
                            <form className="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 relative overflow-hidden">
                                {/* Decorative circle inside form */}
                                <div className="absolute -top-12 -right-12 w-32 h-32 bg-agri-green/5 rounded-full blur-3xl"></div>
                                
                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">{t('contact.form.name_label')}</label>
                                        <input 
                                            type="text" 
                                            placeholder={t('contact.form.name_placeholder')}
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-agri-green/30 focus:bg-white rounded-2xl p-4 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">{t('contact.form.email_label')}</label>
                                        <input 
                                            type="email" 
                                            placeholder={t('contact.form.email_placeholder')}
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-agri-green/30 focus:bg-white rounded-2xl p-4 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">{t('contact.form.message_label')}</label>
                                    <textarea 
                                        rows="5"
                                        placeholder={t('contact.form.message_placeholder')}
                                        className="w-full bg-gray-50 border-2 border-transparent focus:border-agri-green/30 focus:bg-white rounded-[2rem] p-6 outline-none transition-all font-medium resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-gray-900 hover:bg-agri-green text-white py-5 rounded-full font-black text-lg shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3">
                                    {t('contact.form.submit_button')}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={isRtl ? 'rotate-180' : ''}>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section (Optional but recommended) */}
            <section className="px-6 pb-20 lg:pb-32">
                <div className="max-w-7xl mx-auto rounded-[3.5rem] overflow-hidden h-[400px] lg:h-[500px] shadow-inner grayscale hover:grayscale-0 transition-all duration-700 border-8 border-gray-50">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.123456789!2d31.1234567!3d30.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzI0LjQiTiAzMcKwMDcnMjQuNCJF!5e0!3m2!1sen!2seg!4v1234567890" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}