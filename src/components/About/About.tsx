import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import heroImg from '../../assets/about-page.webp';
import WorkGallerySlider from './WorkGallerySlider';
import ProductSlider from './ProductSlider';
import aboutImg from '../../assets/main-about.webp';
import howImg1 from '../../assets/how-1.webp';
import howImg2 from '../../assets/how-2.webp';
import howImg3 from '../../assets/how-3.webp';
import productsData from '../../data/products.json';
import { motion } from 'framer-motion';
import AgriButton from '../Ui/AgriButton';
import work1 from '../../assets/work-1.jfif';
import work2 from '../../assets/work-2.jfif';
import work3 from '../../assets/work-3.jfif';
import work4 from '../../assets/work-4.jfif';
import worklast from '../../assets/work-end.webp';



const myWorkImages = [
    {
        url: work1,
        title: 'Main Factory Unit',
        category: 'Production',
        size: 'large'
    },
    {
        url: work2,
        title: 'Export Logistics',
        category: 'Logistics',
        size: 'small'
    },
    {
        url: work3,
        title: 'Quality Check',
        category: 'Standard',
        size: 'small'
    },
    {
        url: work4,
        title: 'Global Delivery',
        category: 'Shipping',
        size: 'tall'
    },
    {
        url: worklast,
        title: 'Global Delivery',
        category: 'Shipping',
        size: 'tall'
    },
];

export default function About() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <div className="pt-24 lg:pt-24 pb-12 lg:pb-20 overflow-hidden" dir={isRtl ? 'rtl' : 'ltr'}>

            <Helmet>
                <title>{t('about.hero.seo_title')}</title>
                <meta name="description" content={t('about.hero.seo_description')} />
                <meta property="og:title" content={t('about.hero.seo_title')} />
                <meta property="og:description" content={t('about.hero.seo_description')} />
                <link rel="canonical" href="https://zayatexport.com/about" />
            </Helmet>

            <div className="w-full mx-auto">

                {/* 1. Hero */}
                <div className="flex flex-col items-center mb-10 lg:mb-20 pt-5">
                    <div className="w-full max-w-5xl text-center mb-8 lg:mb-16 px-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 bg-agri-green/10 text-agri-green rounded-full mb-4 lg:mb-6 transition-transform hover:scale-105">
                            <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
                                {t('about.hero.badge')}
                            </span>
                        </div>

                        <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[1] lg:leading-[0.9] mb-4 lg:mb-6">
                            {t('about.hero.title1')} <br />
                            <span className="text-agri-green">{t('about.hero.title2')}</span>
                        </h2>

                        <div className="max-w-2xl mx-auto space-y-3 lg:space-y-4">
                            <p className="text-base sm:text-lg lg:text-2xl text-gray-600 leading-snug lg:leading-relaxed font-medium">
                                {t('about.hero.desc1')}
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm lg:text-lg leading-relaxed max-w-xl mx-auto">
                                {t('about.hero.desc2')}
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full max-w-6xl mx-auto px-4 lg:px-0">
                        <div className="relative">
                            <div className="relative z-10 rounded-[2rem] lg:rounded-[4rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] lg:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)]">
                                <img
                                    src={heroImg}
                                    alt="Egyptian Farm"
                                    className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className={`absolute -top-5 lg:-top-10 ${i18n.language === 'ar' ? '-left-5 lg:-left-10' : '-right-5 lg:-right-10'} w-24 h-24 lg:w-40 lg:h-40 bg-agri-orange/15 rounded-full blur-2xl lg:blur-3xl -z-10`} />
                            <div className={`absolute -bottom-6 lg:-bottom-12 ${i18n.language === 'ar' ? '-right-6 rotate-[-12deg]' : '-left-6 rotate-12'} w-28 h-28 lg:w-48 lg:h-48 bg-agri-green/10 rounded-[2rem] lg:rounded-[3rem] -z-10`} />
                        </div>
                    </div>
                </div>

                {/* ... Style */}
                <div className="relative w-full py-4 lg:py-6 bg-agri-green overflow-hidden rotate-[-1deg] scale-[1.02] z-20 shadow-xl">
                    <div className="flex whitespace-nowrap">
                        <div className={`flex items-center ${i18n.language === 'ar' ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}`}>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex items-center shrink-0">
                                    <span className="text-white text-xl lg:text-3xl font-black uppercase tracking-tighter mx-8">
                                        {t('about.hero.title2')}
                                    </span>
                                    <span className="text-white/40 text-2xl">★</span>
                                    <span className="text-white text-xl lg:text-3xl font-light italic tracking-tighter mx-8">
                                        {t('about.company.title_part2')}
                                    </span>
                                    <span className="text-white/40 text-2xl">★</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
        @keyframes marqueeLTR {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRTL {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); }
        }
        .animate-marquee-ltr {
            animation: marqueeLTR 25s linear infinite;
        }
        .animate-marquee-rtl {
            animation: marqueeRTL 25s linear infinite;
        }
    `}} />
                </div>

                {/* 2. About */}
                <section dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="w-full py-12 lg:py-24 bg-white overflow-hidden">
                    <div className="max-w-6xl mx-auto px-6 lg:px-12">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                            <div className="w-full lg:w-5/12 relative">
                                <div className={`absolute -inset-4 bg-gray-50 rounded-[3rem] -z-10 rotate-3 hidden lg:block`} />

                                <div className="relative group aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gray-100 shadow-2xl shadow-gray-200/50">
                                    <img
                                        src={aboutImg}
                                        alt="Company Presentation"
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                                </div>

                                <div className={`absolute -bottom-6 ${i18n.language === 'ar' ? '-left-4' : '-right-4'} bg-white p-4 rounded-2xl shadow-xl border border-gray-50 hidden sm:flex items-center gap-3 animate-pulse-slow`}>
                                    <div className="w-10 h-10 bg-agri-green rounded-full flex items-center justify-center text-white shadow-lg shadow-agri-green/30">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className={`${i18n.language === 'ar' ? 'text-right' : 'text-left'}`}>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter leading-none mb-1">
                                            {t('about.badge.subtitle')}
                                        </p>
                                        <p className="text-sm font-bold text-gray-800 leading-none">
                                            {t('about.badge.title')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-7/12 space-y-8">
                                <div className={`space-y-6 text-center ${i18n.language === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>

                                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-agri-green/5 border border-agri-green/10">
                                        <span className="relative flex h-2 w-2 mx-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-green opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-green"></span>
                                        </span>
                                        <span className="text-agri-green font-bold text-[10px] uppercase tracking-[0.2em]">
                                            {t('about.company.since')}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl lg:text-6xl font-black text-gray-900 leading-[1.15]">
                                        {t('about.company.title_part1')} <br />
                                        <span className="text-agri-green relative inline-block mt-2">
                                            {t('about.company.title_part2')}
                                        </span>
                                    </h2>

                                    <p className="text-shadow-black text-base lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                                        {t('about.company.mission')}
                                    </p>
                                </div>

                                <div className={`flex justify-center ${i18n.language === 'ar' ? 'lg:justify-start' : 'lg:justify-start'}`}>
                                    <AgriButton
                                        to="/contact"
                                        text={t('about.company.read_more')}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
                             @keyframes pulse-slow {
                                 0%, 100% { opacity: 1; transform: translateY(0); }
                                 50% { opacity: 0.9; transform: translateY(-5px); }
                             }
                             .animate-pulse-slow {
                                 animation: pulse-slow 4s ease-in-out infinite;
                             }
                              `}} />
                </section>

                {/* 3. Work Gallery */}
                <WorkGallerySlider images={myWorkImages} />

                {/* 4. Process */}
                <div className="py-12 lg:py-24 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">

                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 lg:mb-24">
                            <div className="max-w-2xl text-center lg:text-start">
                                <span className="text-agri-green font-bold text-xs lg:text-sm uppercase tracking-[0.4em] mb-4 block">
                                    {t('about.process.badge')}
                                </span>
                                <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-none">
                                    {t('about.process.title')}
                                </h2>
                            </div>
                            <div className="max-w-md mx-auto lg:mx-0">
                                <p className={`text-gray-500 text-base lg:text-lg font-light leading-relaxed border-agri-green ${isRtl ? 'border-r-4 pr-6' : 'border-l-4 pl-6'}`}>
                                    {t('about.process.desc')}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {[
                                { step: '01', title: t('about.process.s1_title'), desc: t('about.process.s1_desc'), img: howImg1 },
                                { step: '02', title: t('about.process.s2_title'), desc: t('about.process.s2_desc'), img: howImg2 },
                                { step: '03', title: t('about.process.s3_title'), desc: t('about.process.s3_desc'), img: howImg3 },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileTap={{ scale: 0.98 }}
                                    tabIndex={0}
                                    className="group relative h-[480px] lg:h-[600px] overflow-hidden rounded-[3rem] bg-gray-900 shadow-2xl transition-all duration-500 focus:outline-none"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-focus:scale-110 group-active:scale-110 opacity-60 group-hover:opacity-40 group-focus:opacity-40 group-active:opacity-40"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:via-black/60 group-focus:via-black/60 group-active:via-black/60" />

                                    <div className={`absolute top-8 ${isRtl ? 'left-8' : 'right-8'}`}>
                                        <span className="text-6xl lg:text-7xl font-black text-white/10 transition-colors duration-500 group-hover:text-agri-green group-focus:text-agri-green group-active:text-agri-green">
                                            {item.step}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-0 p-8 lg:p-12 w-full z-10">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-10 h-[2px] bg-agri-green group-hover:w-20 group-focus:w-20 group-active:w-20 transition-all duration-500" />
                                            <span className="text-agri-green font-bold tracking-[0.2em] text-xs lg:text-sm uppercase">Phase {item.step}</span>
                                        </div>

                                        <h4 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-agri-green group-focus:text-agri-green group-active:text-agri-green transition-colors duration-300">
                                            {item.title}
                                        </h4>

                                        <div className="overflow-hidden">
                                            <p className="text-gray-200 leading-relaxed text-sm lg:text-base opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-active:opacity-100 group-active:translate-y-0 transition-all duration-700 ease-out">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute inset-6 border border-white/0 group-hover:border-white/20 group-focus:border-white/20 group-active:border-white/20 rounded-[2.2rem] transition-all duration-700 pointer-events-none" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ... Style */}
                <div className="relative w-full py-4 lg:py-6 bg-agri-green overflow-hidden rotate-[-1deg] scale-[1.02] z-20 shadow-xl">
                    <div className="flex whitespace-nowrap">
                        <div className={`flex items-center ${i18n.language === 'ar' ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}`}>
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex items-center shrink-0">
                                    <span className="text-white text-xl lg:text-3xl font-black uppercase tracking-tighter mx-8">
                                        {t('about.hero.title2')}
                                    </span>
                                    <span className="text-white/40 text-2xl">★</span>
                                    <span className="text-white text-xl lg:text-3xl font-light italic tracking-tighter mx-8">
                                        {t('about.company.title_part2')}
                                    </span>
                                    <span className="text-white/40 text-2xl">★</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <style dangerouslySetInnerHTML={{
                        __html: `
        @keyframes marqueeLTR {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRTL {
            0% { transform: translateX(0); }
            100% { transform: translateX(50%); }
        }
        .animate-marquee-ltr {
            animation: marqueeLTR 25s linear infinite;
        }
        .animate-marquee-rtl {
            animation: marqueeRTL 25s linear infinite;
        }
    `}} />
                </div>

                {/* 5. ProductSlider */}
                <ProductSlider
                    products={productsData.products}
                    t={t}
                    isRtl={isRtl}
                />

                {/* 6. Footer */}
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