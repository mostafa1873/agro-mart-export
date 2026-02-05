import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'; // أضفنا useLocation
import { useTranslation } from 'react-i18next';
import productsData from '../../data/products.json';
import { FaSnowflake, FaLeaf, FaWater, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export default function Products() {
    const [searchParams] = useSearchParams();
    const filterQuery = searchParams.get('filter');

    const [filter, setFilter] = useState(filterQuery || 'all');
    const navigate = useNavigate();
    const { pathname } = useLocation(); 
    const { t, i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const lang = i18n.language;
    const baseUrl = 'https://zayatexport.com';

    const langPrefix = `/${lang}`;

    useEffect(() => {
        if (filterQuery) {
            setFilter(filterQuery);
        }
    }, [filterQuery]);

    const allProducts = productsData.products;

    const filteredProducts = filter === 'all'
        ? allProducts.filter((product: any, index: number, self: any[]) =>
            index === self.findIndex((p: any) => (
                p.name_en.split(' ')[0] === product.name_en.split(' ')[0]
            ))
        )
        : allProducts.filter((p: any) =>
            p.category === filter ||
            (Array.isArray(p.status) ? p.status.includes(filter) : p.status === filter)
        );

    const filterLabels: any = {
        ar: { all: 'الكل', iqf: 'مجمد IQF', fresh: 'طازج', in_brine: 'محلول ملحي', vegetable: 'خضروات', fruit: 'فواكه' },
        en: { all: 'All', iqf: 'IQF', fresh: 'Fresh', in_brine: 'In Brine', vegetable: 'Vegetables', fruit: 'Fruits' },
        it: { all: 'Tutti', iqf: 'IQF', fresh: 'Fresco', in_brine: 'In Salamoia', vegetable: 'Verdure', fruit: 'Frutta' }
    };

    const getProductContent = (product: any) => {
        if (lang === 'ar') return { name: product.name_ar, desc: product.description_ar, btn: "اكتشف التفاصيل" };
        if (lang === 'it') return { name: product.name_it, desc: product.description_it, btn: "Scopri di più" };
        return { name: product.name_en, desc: product.description_en, btn: "View Details" };
    };

    return (
        <div className="pt-32 pb-20 bg-[#fcfcfc]" dir={isRtl ? 'rtl' : 'ltr'}>
            <Helmet>
                <title>{t('products.seo_title')}</title>
                <meta name="description" content={t('products.seo_description')} />
                <link rel="canonical" href={`${baseUrl}${pathname}`} />
                
                {/* إعدادات Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${baseUrl}${pathname}`} />
                <meta property="og:title" content={t('products.seo_title')} />
                <meta property="og:description" content={t('products.seo_description')} />
                
                {/* الربط بين اللغات لمحركات البحث */}
                <link rel="alternate" href={`${baseUrl}/ar/products`} hreflang="ar" />
                <link rel="alternate" href={`${baseUrl}/en/products`} hreflang="en" />
                <link rel="alternate" href={`${baseUrl}/it/products`} hreflang="it" />
                <link rel="alternate" href={`${baseUrl}/en/products`} hreflang="x-default" />
            </Helmet>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl lg:text-8xl font-black text-gray-900 mb-8 tracking-tighter uppercase">
                        {isRtl ? 'منتجاتنا' : lang === 'it' ? 'I Nostri' : 'Our'}{" "}
                        <span className="text-agri-green font-outline-2">
                            {isRtl ? 'الزراعية' : 'Produce'}
                        </span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-3">
                        {['all', 'iqf', 'fresh', 'in_brine'].map((f) => (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 border
                                ${filter === f
                                        ? 'bg-gray-900 text-white border-gray-900 shadow-xl scale-105'
                                        : 'bg-white/60 text-gray-400 border-white/80 backdrop-blur-md hover:bg-white'}`}
                            >
                                {filterLabels[lang]?.[f] || f}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {filteredProducts.map((product) => {
                        const content = getProductContent(product);
                        const getImageUrl = (path: string) => path.replace('..', '');

                        return (
                            <div
                                key={product.id}
                                className="group flex flex-col cursor-pointer"
                                onClick={() => navigate(`${langPrefix}/productsdetails/${product.name_en}`)}
                            >
                                <div className="relative aspect-square rounded-[3.5rem] overflow-hidden bg-[#fff] border border-white shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:-translate-y-3">
                                    <div className="absolute inset-0 p-10 flex items-center justify-center">
                                        <img
                                            src={getImageUrl(product.image)}
                                            alt={content.name}
                                            className="max-w-full max-h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x600?text=Image+Not+Found'; }}
                                        />
                                    </div>
                                    <div className={`absolute top-8 ${isRtl ? 'right-8' : 'left-8'} flex flex-col gap-3`}>
                                        {Array.isArray(product.status) ? product.status.map(s => (
                                            <StatusBadge key={s} status={s} lang={lang} />
                                        )) : <StatusBadge status={product.status} lang={lang} />}
                                    </div>
                                </div>

                                <div className={`mt-8 px-2 flex flex-col flex-grow ${isRtl ? 'text-right' : 'text-left'}`}>
                                    <div className="flex justify-between items-center mb-3 gap-4">
                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight italic transition-colors duration-500 group-hover:text-agri-green">
                                                {content.name}
                                            </h3>
                                        </div>
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-agri-green/30 flex items-center justify-center text-agri-green transition-all duration-700 group-hover:bg-agri-green group-hover:text-white group-hover:border-agri-green group-hover:rotate-[360deg]">
                                            {isRtl ? <FaArrowLeft size={16} /> : <FaArrowRight size={16} />}
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-medium tracking-tight leading-relaxed text-gray-600">
                                        {content.desc}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

function StatusBadge({ status, lang }: { status: string; lang: string }) {
    const labels: any = {
        ar: { iqf: 'مجمد', fresh: 'طازج', in_brine: 'محلول', fruit: 'فاكهة', vegetable: 'خضروات' },
        it: { iqf: 'IQF', fresh: 'Fresco', in_brine: 'Salamoia', fruit: 'Frutta', vegetable: 'Verdura' },
        en: { iqf: 'IQF', fresh: 'Fresh', in_brine: 'Brine', fruit: 'Fruit', vegetable: 'Vegetable' }
    };
    const icons: any = {
        iqf: <FaSnowflake size={12} />,
        fresh: <FaLeaf size={12} />,
        in_brine: <FaWater size={12} />,
        fruit: <FaLeaf size={12} />,
        vegetable: <FaLeaf size={12} />
    };
    return (
        <span className="bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-lg text-gray-900 border border-white flex items-center justify-center gap-2 min-w-[45px]">
            {icons[status] || <FaLeaf size={12} />}
            <span className="text-[9px] font-black uppercase tracking-tighter">
                {labels[lang]?.[status] || status}
            </span>
        </span>
    );
}