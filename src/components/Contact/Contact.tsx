import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <>
            {/* --- إعدادات الـ SEO لكل لغة --- */}
            <Helmet>
                <title>{t('contact.badge')}</title>
                <meta name="description" content={t('contact.subtitle')} />
                <meta property="og:title" content={`${t('contact.title_grow')} ${t('contact.title_together')}`} />
                <meta property="og:description" content={t('contact.subtitle')} />
                <link rel="canonical" href="https://zayatexport.com/contact" />
            </Helmet>

            <div className="pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* --- الرأس --- */}
                    <div className={`max-w-3xl mb-12 lg:mb-20 text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-agri-green/10 text-agri-green rounded-full mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                                {t('contact.badge')}
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] lg:leading-[0.9] mb-6">
                            {t('contact.title_grow')} <br className="hidden sm:block" />
                            <span className="text-agri-green">{t('contact.title_together')}</span>
                        </h2>
                        <p className="text-base lg:text-lg text-gray-500 font-medium px-2 lg:px-0">
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-20 items-start">

                        {/* --- الجزء الأول: الفورم --- */}
                        <div className="lg:col-span-3 order-1 lg:order-2 w-full">
                            <form className="bg-gray-50 lg:bg-white p-6 sm:p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] lg:shadow-2xl lg:shadow-gray-200/50 border border-gray-100 space-y-5 lg:space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div className="space-y-2">
                                        <label className={`text-[9px] font-black text-gray-400 uppercase ${isRtl ? 'mr-4' : 'ml-4'}`}>
                                            {t('contact.form.name_label')}
                                        </label>
                                        <input type="text" placeholder={t('contact.form.name_placeholder')} className="w-full bg-white lg:bg-gray-50 border-2 border-transparent focus:border-agri-green rounded-2xl p-4 font-bold text-gray-900 transition-all outline-none" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className={`text-[9px] font-black text-gray-400 uppercase ${isRtl ? 'mr-4' : 'ml-4'}`}>
                                            {t('contact.form.email_label')}
                                        </label>
                                        <input type="email" placeholder={t('contact.form.email_placeholder')} className="w-full bg-white lg:bg-gray-50 border-2 border-transparent focus:border-agri-green rounded-2xl p-4 font-bold text-gray-900 transition-all outline-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-[9px] font-black text-gray-400 uppercase ${isRtl ? 'mr-4' : 'ml-4'}`}>
                                        {t('contact.form.msg_label')}
                                    </label>
                                    <textarea rows={4} placeholder={t('contact.form.msg_placeholder')} className="w-full bg-white lg:bg-gray-50 border-2 border-transparent focus:border-agri-green rounded-2xl p-4 font-bold text-gray-900 transition-all outline-none resize-none"></textarea>
                                </div>

                                <button className="w-full bg-gray-900 text-white py-5 lg:py-6 rounded-2xl font-black text-base lg:text-lg hover:bg-agri-green transition-all shadow-xl uppercase tracking-tighter">
                                    {t('contact.form.send_btn')}
                                </button>
                            </form>
                        </div>

                        {/* --- الجزء الثاني: معلومات التواصل --- */}
                        <div className="lg:col-span-2 space-y-10 lg:space-y-12 order-2 lg:order-1">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-12">
                                <div className="flex items-start gap-5 group">
                                    <div className="shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                                        <FaPhoneAlt size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-gray-400 uppercase mb-1">{t('contact.info.phone')}</p>
                                        <p className="text-lg lg:text-xl font-black text-gray-900" dir="ltr">+20 123 456 789</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                                        <FaEnvelope size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-black text-gray-400 uppercase mb-1">{t('contact.info.email')}</p>
                                        <p className="text-lg lg:text-xl font-black text-gray-900">info@zayat.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* زر واتساب */}
                            <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer"
                                className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-5 lg:py-6 rounded-[2rem] font-black text-base lg:text-lg hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-green-200 lg:shadow-none">
                                <FaWhatsapp size={22} />
                                {t('contact.info.whatsapp')}
                            </a>

                            {/* العنوان */}
                            <div className="pt-8 border-t border-gray-100">
                                <div className="flex items-start gap-5">
                                    <FaMapMarkerAlt className="text-gray-300 shrink-0 mt-1" />
                                    <p className="text-sm font-bold text-gray-500 leading-relaxed uppercase tracking-tight">
                                        {t('contact.info.address')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- الخريطة --- */}
                    <div className="mt-16 lg:mt-24 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden h-[300px] lg:h-[450px] border-4 lg:border-8 border-gray-50 shadow-inner">
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.6833772836267!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1625645432123!5m2!1sen!2seg"
                            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}