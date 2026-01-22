import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import heroImg from '../../assets/about-page.png';
import WorkGallerySlider from './WorkGallerySlider';
import ProductSlider from './ProductSlider';
import aboutImg from '../../assets/about-section.jpg';
import { Link } from 'react-router-dom';
import howImg1 from '../../assets/how-1.png';
import howImg2 from '../../assets/how-2.png';
import howImg3 from '../../assets/how-3.png';
import productsData from '../../data/products.json';
import { motion } from 'framer-motion';


const myWorkImages = [
    {
        url: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17',
        title: 'Main Factory Unit',
        category: 'Production',
        size: 'large'
    },
    {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
        title: 'Export Logistics',
        category: 'Logistics',
        size: 'small'
    },
    {
        url: 'https://images.unsplash.com/photo-1574944966950-8164c2165b3b',
        title: 'Quality Check',
        category: 'Standard',
        size: 'small'
    },
    {
        url: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9',
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

            <div className="w-full mx-auto px-6">

                {/* 1. Hero */}
                <div className="flex flex-col items-center mb-16 lg:mb-20 pt-5">
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
                <section dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} className="w-full py-16 lg:py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-6 lg:px-12">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                            <div className="w-full lg:w-5/12">
                                <div className="relative group">
                                    <div className="absolute -inset-3 border border-gray-200 rounded-2xl -z-10 group-hover:scale-[1.02] transition-transform duration-500" />
                                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-sm">
                                        <img
                                            src={aboutImg}
                                            alt="Company Presentation"
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/5" />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-7/12 space-y-6">
                                <div className={`space-y-4 text-center ${i18n.language === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <div className="inline-flex items-center gap-2">
                                        <span className="w-6 h-[1px] bg-agri-green"></span>
                                        <span className="text-agri-green font-semibold text-[10px] uppercase tracking-[0.2em]">
                                            {t('about.company.since')}
                                        </span>
                                        <span className="w-6 h-[1px] bg-agri-green lg:hidden"></span>
                                    </div>

                                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
                                        {t('about.company.title_part1')} <br />
                                        <span className="text-agri-green/90">{t('about.company.title_part2')}</span>
                                    </h2>

                                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed font-normal mx-auto lg:mx-0 max-w-xl">
                                        {t('about.company.mission')}
                                    </p>
                                </div>

                                <div className={`pt-4 text-center ${i18n.language === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <Link to="/contact">
                                        <button className="group relative px-8 py-3.5 bg-white border border-agri-green text-agri-green overflow-hidden rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:text-white w-full sm:w-auto">
                                            <span className="relative z-10">{t('about.company.read_more')}</span>
                                            <div className="absolute inset-0 bg-agri-green translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Work Gallery */}
                <WorkGallerySlider images={myWorkImages} />

                {/* 4. Process */}
                <div className="py-16 lg:py-32 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">

                        {/* Header Section */}
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

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {[
                                { step: '01', title: t('about.process.s1_title'), desc: t('about.process.s1_desc'), img: howImg1 },
                                { step: '02', title: t('about.process.s2_title'), desc: t('about.process.s2_desc'), img: howImg2 },
                                { step: '03', title: t('about.process.s3_title'), desc: t('about.process.s3_desc'), img: howImg3 },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    // التفاعل باللمس للموبايل والماوس للكمبيوتر
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative h-[480px] lg:h-[600px] overflow-hidden rounded-[3rem] bg-gray-900 shadow-2xl transition-all duration-500"
                                >
                                    {/* الصورة الخلفية */}
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-active:scale-110 opacity-60 group-hover:opacity-40 group-active:opacity-40"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:via-black/60 group-active:via-black/60" />

                                    {/* رقم المرحلة */}
                                    <div className={`absolute top-8 ${isRtl ? 'left-8' : 'right-8'}`}>
                                        <span className="text-6xl lg:text-7xl font-black text-white/10 transition-colors duration-500 group-hover:text-agri-green group-active:text-agri-green">
                                            {item.step}
                                        </span>
                                    </div>

                                    {/* المحتوى السفلي */}
                                    <div className="absolute bottom-0 p-8 lg:p-12 w-full z-10">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-10 h-[2px] bg-agri-green group-hover:w-20 group-active:w-20 transition-all duration-500" />
                                            <span className="text-agri-green font-bold tracking-[0.2em] text-xs lg:text-sm uppercase">Phase {item.step}</span>
                                        </div>

                                        <h4 className="text-3xl lg:text-4xl font-bold text-white mb-6 group-hover:text-agri-green group-active:text-agri-green transition-colors duration-300">
                                            {item.title}
                                        </h4>

                                        {/* الوصف - يظهر باللمس في الموبايل */}
                                        <div className="overflow-hidden">
                                            <p className="text-gray-200 leading-relaxed text-sm lg:text-base opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0 transition-all duration-700 ease-out">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>

                                    {/* الإطار الداخلي الجمالي */}
                                    <div className="absolute inset-6 border border-white/0 group-hover:border-white/20 group-active:border-white/20 rounded-[2.2rem] transition-all duration-700 pointer-events-none" />
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

                {/* --- 5.  --- */}
                <ProductSlider
                    // لاحظ التغيير هنا: ضفنا .products
                    products={productsData.products}
                    t={t}
                    isRtl={isRtl}
                />

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