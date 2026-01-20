import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import aboutSection from '../../assets/about-section.png';
import minImage from '../../assets/min-products.png';

export default function Home() {
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <div className="overflow-hidden">

            {/* SEO */}
            <Helmet>
                <title>{t('home.seo_title')}</title>
                <meta name="description" content={t('home.seo_description')} />
                <meta property="og:title" content={t('home.seo_title')} />
                <meta property="og:description" content={t('home.seo_description')} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://zayatexport.com/" />
            </Helmet>

            {/* 1. Hero Section */}
            <section className="relative min-h-screen lg:min-h-[90vh] flex items-center pt-16 lg:pt-20 pb-16 overflow-hidden bg-white">

                <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

                    {/* 1. logo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex flex-col items-center justify-center transform -rotate-12 opacity-[0.08]">
                            <h2 className="text-[15vw] font-black uppercase leading-none tracking-tighter bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
                                Agro Mart
                            </h2>
                            <h2 className="text-[12vw] font-black uppercase leading-none tracking-[0.3em] text-green-800 -mt-2 lg:-mt-6">
                                Export
                            </h2>
                        </div>
                    </div>

                    {/* tree */}
                    <div className="absolute top-[10%] left-[5%] opacity-[0.05] animate-pulse duration-[4s] rotate-45">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-agri-green">
                            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                        </svg>
                    </div>

                    {/* tree */}
                    <div className="absolute top-[15%] right-[10%] opacity-[0.04] animate-bounce duration-[6s] -rotate-12">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-600">
                            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                        </svg>
                    </div>

                    {/* tree */}
                    <div className="absolute bottom-[10%] right-[5%] opacity-[0.06] rotate-[160deg] animate-pulse">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-600">
                            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                        </svg>
                    </div>

                    {/* tree */}
                    <div className="absolute top-[50%] left-[1%] opacity-[0.03] -rotate-90 animate-bounce duration-[8s]">
                        <svg width="150" height="150" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-600">
                            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                        </svg>
                    </div>
                </div>
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-agri-green/10 rounded-full blur-[120px] -z-10`} />


                {/* Hero */}
                <div className="max-w-7xl mx-auto px-6 pt-8 lg:px-8 w-full relative z-10">
                    <div className={`flex flex-col lg:flex-row ${isRtl ? 'lg:flex-row-reverse' : ''} gap-12 lg:gap-16 items-center justify-between`}>

                        <div className={`flex-1 flex flex-col items-center ${isRtl ? 'lg:items-start text-center lg:text-right' : 'lg:items-start text-center lg:text-left'} space-y-6 lg:space-y-8 w-full`}>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.1] lg:leading-[1.05] tracking-tight mb-4">
                                {t('home.hero_title1')} <br className="hidden lg:block" />
                                <span className="text-agri-green inline-block mt-2 lg:mt-0">{t('home.hero_title2')}</span> <br />
                                <span className="inline-block mt-2 lg:mt-0">{t('home.hero_title3')}</span>
                            </h1>

                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-agri-green/10 text-agri-green rounded-full">
                                <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest">{t('home.global_partner')}</span>
                            </div>

                            <p className="text-lg lg:text-xl text-gray-500 font-medium max-w-lg leading-relaxed">
                                {t('home.hero_desc')}
                            </p>

                            <div className="relative w-full lg:hidden my-4 px-4">
                                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                                    <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop" alt="Fresh Produce" className="w-full h-[300px] object-cover" />
                                </div>
                            </div>
                            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto`}>

                                {/* Product Button */}
                                <Link
                                    to="/products"
                                    className="w-full sm:w-auto bg-green-700 text-white 
        px-6 py-3.5 lg:px-10 lg:py-5 
        rounded-full font-bold 
        text-base lg:text-lg 
        hover:bg-agri-green transition-all shadow-xl active:scale-95 text-center"
                                >
                                    {t('home.btn_products')}
                                </Link>

                                {/* Contact Button */}
                                <Link
                                    to="/contact"
                                    className={`group relative flex items-center justify-between sm:justify-start gap-4 py-2 font-bold text-gray-900 border-2 border-gray-100 rounded-full hover:border-agri-green/30 hover:bg-agri-green/5 transition-all duration-500 shadow-sm hover:shadow-md w-full sm:w-auto
        ${isRtl ? 'pr-6 pl-2' : 'pl-6 pr-2'}`}
                                >
                                    <div className="relative">
                                        <span className="text-base lg:text-lg tracking-wide">
                                            {t('home.btn_contact')}
                                        </span>
                                        {/* Underline animation */}
                                        <span className={`absolute -bottom-1 h-[2px] bg-agri-green transition-all duration-500 ease-out w-0 group-hover:w-full ${isRtl ? 'right-0' : 'left-0'}`}></span>
                                    </div>

                                    <div className="relative flex items-center justify-center">
                                        {/* Pulse effect on hover */}
                                        <div className="absolute inset-0 rounded-full bg-agri-green/20 scale-50 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500"></div>

                                        <div className={`flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 z-10
                bg-gray-900 text-white group-hover:bg-agri-green group-hover:scale-105 shadow-inner
                ${isRtl ? 'rotate-180' : ''}`}>

                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className={`transition-transform duration-500 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                                            >
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>

                        <div className="hidden lg:block relative flex-1">
                            <div className={`relative z-10 rounded-[4rem] overflow-hidden shadow-2xl transform ${isRtl ? '-rotate-2' : 'rotate-2'}`}>
                                <img src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop" alt="Fresh Produce" className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-[2s]" />
                            </div>
                            <div className={`absolute -bottom-10 ${isRtl ? '-right-10 rotate-[-12deg]' : '-left-10 rotate-12'} w-40 h-40 bg-agri-orange rounded-[3rem] -z-10`} />
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. About Section */}
            <section className="py-14 lg:py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none hidden lg:block"
                    style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
                </div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`flex flex-col ${isRtl ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-24 items-center`}>

                        {/* Left Image */}
                        <div className="relative flex-1 w-full max-w-sm lg:max-w-xl mx-auto lg:mx-0">
                            <div className="relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden shadow-xl z-20 aspect-square lg:aspect-[4/5]">
                                <img
                                    src={aboutSection}
                                    alt="Quality Control"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className={`absolute -bottom-8 ${isRtl ? '-left-8' : '-right-8'} w-32 h-32 lg:w-64 lg:h-64 rounded-[1.5rem] lg:rounded-[2rem] border-[8px] lg:border-[12px] border-white overflow-hidden shadow-2xl z-30 hidden md:block`}>
                                <img
                                    src={minImage}
                                    className="w-full h-full object-cover"
                                    alt="Macro Nature"
                                />
                            </div>
                        </div>

                        <div className={`flex-1 flex flex-col space-y-6 lg:space-y-8 text-center lg:text-${isRtl ? 'right' : 'left'} items-center lg:items-${isRtl ? 'end' : 'start'} w-full`}>

                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <span className="w-8 lg:w-12 h-[2px] bg-agri-green"></span>
                                <span className="text-agri-green font-black uppercase tracking-[0.2em] text-xs lg:text-sm">
                                    {t('home.about.who_we_are')}
                                </span>
                                <span className="w-8 h-[2px] bg-agri-green lg:hidden"></span>
                            </div>

                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                                {t('home.about.title_main')} <br />
                                <span className="bg-gradient-to-r from-agri-green to-emerald-500 bg-clip-text text-transparent">
                                    Agro Mart
                                </span>
                            </h2>

                            <div className="space-y-4 flex flex-col items-center lg:items-start">
                                <p className="text-base lg:text-xl text-gray-500 leading-relaxed font-medium max-w-lg">
                                    {t('home.about.description_brief')}
                                </p>
                                <p className={`text-sm lg:text-lg text-gray-400 italic ${isRtl ? 'lg:border-r-4' : 'lg:border-l-4'} border-agri-green/30 px-4 py-1 text-center lg:text-left`}>
                                    {t('home.about.who_we_are_desc')}
                                </p>
                            </div>

                            <div className="pt-4 w-full flex justify-center lg:justify-start">
                                <Link
                                    to="/about"
                                    className={`group relative flex items-center gap-4 lg:gap-6 p-1.5 transition-all duration-500 border border-gray-100 hover:border-agri-green/20 bg-gray-50 hover:bg-white rounded-full shadow-sm hover:shadow-xl
    ${isRtl ? 'flex-row pr-6 lg:pr-8 pl-1.5' : 'flex-row pl-6 lg:pl-8 pr-1.5'}`}
                                >
                                    <div className={`flex-1 flex flex-col ${isRtl ? 'text-right items-end' : 'text-left items-start'} justify-center`}>
                                        <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-agri-green opacity-70">
                                            {t('home.about.ready_to_start')}
                                        </span>
                                        <span className="text-sm lg:text-lg font-black text-gray-900 whitespace-nowrap">
                                            {t('home.about.btn_about')}
                                        </span>
                                    </div>

                                    <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-agri-green text-white flex items-center justify-center transition-all duration-700 ease-in-out shadow-md shrink-0
    ${isRtl
                                            ? 'rotate-180 group-hover:rotate-[540deg]' // عربي: يبدأ 180 ويلف 360 زيادة يوصل 540 (فيفضل باصص شمال)
                                            : 'group-hover:rotate-[360deg]'             // انجليزي: يلف لفة عادية
                                        }`}>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lg:w-6 lg:h-6"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>

                                    <div className={`absolute hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity ${isRtl ? 'right-4' : 'left-4'}`}>
                                        <div className="w-2 h-2 rounded-full bg-agri-orange animate-ping"></div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Products */}
            <section className="py-16 lg:py-32 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8">

                        <div className="space-y-4 max-w-2xl text-center md:text-start flex flex-col items-center md:items-start">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-agri-green/10 text-agri-green rounded-full text-xs font-black uppercase tracking-widest">
                                {t('home.harvest.badge')}
                            </div>

                            <h2 className="text-4xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-tight md:leading-none">
                                {t('home.harvest.title1')} <br />
                                <span className="text-agri-green italic">{t('home.harvest.title2')}</span>
                            </h2>

                            <p className="text-gray-500 font-medium text-lg max-w-md">
                                {t('home.harvest.desc')}
                            </p>
                        </div>

                        <Link
                            to="/products"
                            className="hidden md:flex group items-center gap-4 bg-white px-8 py-4 rounded-full shadow-sm border border-gray-100 font-bold hover:shadow-md hover:border-agri-green/20 transition-all active:scale-95"
                        >
                            <span className="text-gray-900">{t('home.harvest.view_all')}</span>
                            <span className={`w-9 h-9 rounded-full bg-agri-green text-white flex items-center justify-center transition-all duration-300 ${isRtl ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={`${isRtl ? 'rotate-180' : ''}`} stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                        {[
                            {
                                name: t('home.products.onion'),
                                img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1887&auto=format&fit=crop',
                                category: t('home.products.veg'),
                                filterTag: 'iqf'
                            },
                            {
                                name: t('home.products.orange'),
                                img: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=1887&auto=format&fit=crop',
                                category: t('home.products.fruit'),
                                filterTag: 'fresh'
                            },
                            {
                                name: t('home.products.strawberry'),
                                img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=2070&auto=format&fit=crop',
                                category: t('home.products.berry'),
                                filterTag: 'in_brine'
                            }
                        ].map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative rounded-[2.5rem] overflow-hidden bg-white aspect-[4/5] shadow-sm group-hover:shadow-2xl group-active:shadow-2xl lg:group-hover:-translate-y-2 transition-all duration-500 active:scale-95 lg:active:scale-100">
                                    <img
                                        src={item.img}
                                        className="w-full h-full object-cover transform group-hover:scale-110 group-active:scale-110 transition-transform duration-[1.5s]"
                                        alt={item.name}
                                    />

                                    <div className="absolute top-6 end-6">
                                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl">
                                            <span className="text-agri-green text-[10px] font-black uppercase tracking-widest">{item.category}</span>
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-black/20 lg:opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity flex items-center justify-center">
                                        <Link
                                            to={`/products?filter=${item.filterTag}`}
                                            className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold transform lg:translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-all hover:bg-agri-green hover:text-white"
                                        >
                                            {isRtl ? 'عرض المنتجات' : 'View Products'}
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-2 text-center md:text-start px-4 flex flex-col items-center md:items-start">
                                    <h3 className="text-2xl lg:text-3xl font-black text-gray-900 group-hover:text-agri-green group-active:text-agri-green transition-colors">
                                        {item.name}
                                    </h3>
                                    <div className="h-1 w-12 bg-agri-green rounded-full transition-all duration-500 group-hover:w-full group-active:w-full"></div>
                                    <p className="text-gray-400 text-sm font-medium italic">{t('home.products.desc')}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 flex justify-center md:hidden">
                        <Link
                            to="/products"
                            className="group flex items-center gap-4 bg-white px-10 py-4 rounded-full shadow-lg border border-gray-100 font-bold active:scale-95 transition-all"
                        >
                            <span className="text-gray-900">{t('home.harvest.view_all')}</span>
                            <span className={`w-10 h-10 rounded-full bg-agri-green text-white flex items-center justify-center ${isRtl ? 'rotate-180' : ''}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. Why */}
            <section className="py-12 lg:py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="mb-16 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight italic">
                            {t('home.why.title1')} <span className="text-agri-green">{t('home.why.title2')}</span>
                        </h2>
                        <p className="mt-4 text-gray-500 font-medium">{t('home.why.title3')}</p>
                    </div>

                    <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-6 lg:gap-4">
                        {[
                            {
                                title: t('home.why.standards'),
                                desc: t('home.why.standards_d'),
                                img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop",
                                num: "01"
                            },
                            {
                                title: t('home.why.direct'),
                                desc: t('home.why.direct_d'),
                                img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
                                num: "02"
                            },
                            {
                                title: t('home.why.logistics'),
                                desc: t('home.why.logistics_d'),
                                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
                                num: "03"
                            }
                        ].map((feat, i) => (
                            <div
                                key={i}
                                className="relative flex-none lg:flex-1 h-[250px] lg:h-full lg:hover:flex-[2.5] transition-all duration-700 ease-in-out overflow-hidden group rounded-[2.5rem] cursor-pointer shadow-lg active:flex-[1.5] lg:active:flex-1"
                            >
                                <img
                                    src={feat.img}
                                    alt={feat.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 group-active:bg-black/20 transition-colors duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end text-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl lg:text-5xl font-black opacity-40">{feat.num}</span>
                                        <div className="h-[2px] w-12 bg-agri-green"></div>
                                    </div>

                                    <h4 className="text-2xl lg:text-3xl font-black mb-4 uppercase tracking-tighter">
                                        {feat.title}
                                    </h4>

                                    <p className="text-gray-200 text-sm lg:text-lg leading-relaxed max-w-md opacity-0 group-hover:opacity-100 group-active:opacity-100 translate-y-10 group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-500 delay-200">
                                        {feat.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. INTEGRATED GEOMETRIC CTA */}
            <section className="py-12 lg:py-32 bg-white px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="relative overflow-hidden bg-gray-50 rounded-[2.5rem] lg:rounded-[5rem] p-8 md:p-12 lg:p-24 text-center border border-gray-100 shadow-xl group">

                        <div className="absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-30">
                            <div className="absolute inset-0 bg-repeat bg-[size:30px_30px] lg:bg-[size:50px_50px] [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]"></div>
                            <div className="absolute inset-0 bg-agri-green/5"></div>
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <span className="inline-block mb-6 lg:mb-8 px-4 lg:px-6 py-2 bg-white rounded-full text-[9px] lg:text-xs font-black tracking-[0.2em] lg:tracking-[0.3em] uppercase text-agri-green shadow-sm border border-gray-100">
                                {isRtl ? 'شريك التصدير العالمي' : 'Global Export Partner'}
                            </span>

                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-gray-900 leading-[1.2] lg:leading-[1.1] tracking-tighter mb-6 lg:mb-8">
                                {t('home.cta.title')}
                            </h2>

                            <p className="text-gray-500 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-8 lg:mb-12 font-medium px-2">
                                {t('home.cta.desc')}
                            </p>

                            <Link
                                to="/contact"
                                className="group relative inline-flex items-center justify-center px-8 lg:px-12 py-4 lg:py-5 bg-agri-green text-white text-base lg:text-xl font-black rounded-full shadow-[0_15px_30px_-10px_rgba(20,83,45,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(20,83,45,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <span className="relative z-10">{t('home.cta.btn')}</span>

                                <span className={`relative z-10 transition-transform duration-300 ${isRtl ? 'mr-3 lg:mr-4 group-hover:-translate-x-2' : 'ml-3 lg:ml-4 group-hover:translate-x-2'}`}>
                                    <svg
                                        width="20"
                                        height="20"
                                        lg-width="24"
                                        lg-height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className={`${isRtl ? 'rotate-180' : ''}`}
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}