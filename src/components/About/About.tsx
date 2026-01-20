import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function About() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <div className="pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>

            <Helmet>
                <title>{t('about.hero.seo_title')}</title>
                <meta name="description" content={t('about.hero.seo_description')} />
                <meta property="og:title" content={t('about.hero.seo_title')} />
                <meta property="og:description" content={t('about.hero.seo_description')} />
                <link rel="canonical" href="https://zayatexport.com/about" />
            </Helmet>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* --- 1. القصة والهوية (Hero Section) --- */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 lg:mb-32">
                    {/* النص: ترتيبه يتغير في الموبايل بالـ order */}
                    <div className={`${isRtl ? 'lg:text-right' : 'lg:text-left'} text-center order-2 lg:order-1`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-agri-green/10 text-agri-green rounded-full mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{t('about.hero.badge')}</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8">
                            {t('about.hero.title1')} <br />
                            <span className="text-agri-green">{t('about.hero.title2')}</span>
                        </h2>
                        <p className="text-base lg:text-lg text-gray-500 leading-relaxed mb-6 font-medium">
                            {t('about.hero.desc1')}
                        </p>
                        <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                            {t('about.hero.desc2')}
                        </p>
                    </div>

                    {/* الصورة: الانعكاس واللف دوران حسب اللغة */}
                    <div className="order-1 lg:order-2 relative px-4 lg:px-0">
                        <div className={`relative z-10 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 
                            ${isRtl ? 'lg:-rotate-2 hover:rotate-0' : 'lg:rotate-2 hover:rotate-0'}`}>
                            <img
                                src="https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=2070&auto=format&fit=crop"
                                alt="Egyptian Farm"
                                className="w-full h-[350px] lg:h-[500px] object-cover"
                            />
                        </div>
                        <div className={`absolute -top-4 ${isRtl ? '-left-4' : '-right-4'} w-24 h-24 bg-agri-orange/20 rounded-full blur-2xl -z-10`} />
                        <div className={`absolute -bottom-6 ${isRtl ? '-right-6 rotate-[-12deg]' : '-left-6 rotate-12'} w-32 h-32 bg-agri-green/10 rounded-[2.5rem] -z-10`} />
                    </div>
                </div>

                {/* --- 2. الأرقام (Stats) --- */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-24 lg:mb-32">
                    {[
                        { label: t('about.stats.tons'), value: '15k+' },
                        { label: t('about.stats.markets'), value: '24' },
                        { label: t('about.stats.farms'), value: '150+' },
                        { label: t('about.stats.exp'), value: '12+' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center p-6 lg:p-8 bg-gray-50 rounded-[2rem] lg:rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 group border border-transparent hover:border-gray-100">
                            <div className="text-3xl lg:text-5xl font-black text-gray-900 group-hover:text-agri-green transition-colors mb-2 tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-[9px] lg:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- 3. القيم (Values) --- */}
                <div className="bg-gray-900 rounded-[3rem] lg:rounded-[4rem] p-8 lg:p-20 relative overflow-hidden mb-24 lg:mb-32">
                    <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-64 h-64 bg-agri-green/20 rounded-full blur-[100px]`} />
                    <div className="relative z-10 grid lg:grid-cols-3 gap-12">
                        <div className={`${isRtl ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                            <h3 className="text-white text-3xl lg:text-4xl font-black mb-4 lg:mb-6 tracking-tight">
                                {isRtl ? (
                                    <>قيم <span className="text-agri-green">الزيات</span></>
                                ) : (
                                    <>{t('about.values.title').split(' ')[0]} <span className="text-agri-green">{t('about.values.title').split(' ')[1]}</span></>
                                )}
                            </h3>
                            <p className="text-gray-400 text-sm lg:text-base font-medium">{t('about.values.desc')}</p>
                        </div>
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8 lg:gap-12 text-center sm:text-start">
                            <div className="space-y-4">
                                <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-agri-green font-black text-xl mx-auto ${isRtl ? 'sm:mr-0 sm:ml-auto' : 'sm:ml-0 sm:mr-auto'}`}>01</div>
                                <h4 className="text-white font-bold text-lg lg:text-xl uppercase tracking-tighter">{t('about.values.v1_title')}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{t('about.values.v1_desc')}</p>
                            </div>
                            <div className="space-y-4">
                                <div className={`w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-agri-green font-black text-xl mx-auto ${isRtl ? 'sm:mr-0 sm:ml-auto' : 'sm:ml-0 sm:mr-auto'}`}>02</div>
                                <h4 className="text-white font-bold text-lg lg:text-xl uppercase tracking-tighter">{t('about.values.v2_title')}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{t('about.values.v2_desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 4. رحلة العمل (Process) --- */}
                <div className="mb-24 lg:mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
                        <h2 className="text-3xl lg:text-5xl font-black text-gray-900 tracking-tighter mb-4">{t('about.process.title')}</h2>
                        <p className="text-sm lg:text-base text-gray-500 font-medium px-4">{t('about.process.desc')}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -z-10" />
                        {[
                            { step: '01', title: t('about.process.s1_title'), desc: t('about.process.s1_desc') },
                            { step: '02', title: t('about.process.s2_title'), desc: t('about.process.s2_desc') },
                            { step: '03', title: t('about.process.s3_title'), desc: t('about.process.s3_desc') },
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group text-center ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
                                <div className={`w-14 h-14 bg-agri-green text-white rounded-2xl flex items-center justify-center font-black text-xl mb-6 group-hover:rotate-12 transition-transform mx-auto ${isRtl ? 'lg:mr-0 lg:ml-auto' : 'lg:ml-0 lg:mr-auto'}`}>
                                    {item.step}
                                </div>
                                <h4 className="text-lg lg:text-xl font-black text-gray-900 mb-3 uppercase tracking-tighter">{item.title}</h4>
                                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- 5. الشهادات (Partners & Certs) --- */}
                <div className="mb-24 lg:mb-32 py-12 lg:py-16 bg-gray-50 rounded-[3rem] lg:rounded-[4rem] px-6 lg:px-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className={`${isRtl ? 'lg:text-right' : 'lg:text-left'} text-center`}>
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 tracking-tighter mb-6">
                                {t('about.certs.title1')} <br /> <span className="text-agri-green">{t('about.certs.title2')}</span>
                            </h2>
                            <p className="text-sm lg:text-base text-gray-500 mb-8 max-w-md mx-auto ${isRtl ? 'lg:mr-0' : 'lg:ml-0'}">{t('about.certs.desc')}</p>
                            <div className={`flex flex-wrap justify-center ${isRtl ? 'lg:justify-start' : 'lg:justify-start'} gap-3`}>
                                {['Global G.A.P', 'ISO 22000', 'Organic'].map((cert) => (
                                    <span key={cert} className="px-4 py-2 bg-white rounded-full text-[9px] font-black text-gray-400 border border-gray-100 uppercase tracking-widest">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 lg:gap-4 font-black italic">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-20 lg:h-24 bg-white/50 backdrop-blur-sm border border-white rounded-[1.5rem] lg:rounded-[2rem] flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer text-gray-400 text-xs lg:text-base">
                                    PARTNER {i}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- 6. الختام (CTA) --- */}
                <div className="relative overflow-hidden bg-agri-green rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-24 text-center">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">
                            {t('about.cta.title')}
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-agri-green px-8 py-4 lg:px-10 lg:py-5 rounded-full font-black text-base lg:text-lg hover:bg-gray-900 hover:text-white transition-all shadow-xl">
                                {t('about.cta.btn1')}
                            </button>
                            <button className="bg-transparent border-2 border-white/30 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-full font-black text-base lg:text-lg hover:bg-white/10 transition-all">
                                {t('about.cta.btn2')}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}