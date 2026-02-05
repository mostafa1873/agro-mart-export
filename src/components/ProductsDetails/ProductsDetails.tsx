import React, { useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import productsData from '../../data/products.json';
import { Helmet } from 'react-helmet-async';
import AgriButton from '../Ui/AgriButton';
import RelatedSlider from './RelatedProducts';

export default function ProductsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { i18n } = useTranslation();

    const lang = i18n.language;
    const isRtl = lang === 'ar';
    const baseUrl = 'https://zayatexport.com';

    const allProducts = productsData.products;
    const product = allProducts.find(p => p.id === Number(id));

    const otherVariants = allProducts.filter(p =>
        p.name_en.split(' ')[0] === product?.name_en.split(' ')[0] && p.id !== product?.id
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="h-screen flex flex-col items-center justify-center font-black text-gray-400 bg-[#fcfcfc]">
                <h1 className="text-4xl mb-4">404</h1>
                <p className="uppercase tracking-widest">{isRtl ? 'المنتج غير موجود' : 'PRODUCT NOT FOUND'}</p>
                <Link to={`/${lang}/products`} className="mt-6 text-agri-green underline">
                    {isRtl ? 'العودة للمنتجات' : 'Back to products'}
                </Link>
            </div>
        );
    }

    const getImageUrl = (path: string) => path.replace('..', '');

    const getContent = () => {
        const labels: any = {
            ar: {
                specsTitle: 'المواصفات والأنواع المتاحة',
                backBtn: 'العودة للمنتجات',
                contactBtn: 'استعلم واطلب الآن',
                catLabel: 'التصنيف',
                procLabel: 'طريقة المعالجة',
                otherMethods: 'أشكال ومعالجات أخرى',
                seoSuffix: 'شركة الزيات للتصدير',
                main: "يتم التصنيع حسب الطلب وبأعلى معايير الجودة لضمان تلبية احتياجات عملائنا المتنوعة."
            },
            en: {
                specsTitle: 'Specifications & Variants',
                backBtn: 'Back to Products',
                contactBtn: 'Inquire & Order Now',
                catLabel: 'Category',
                procLabel: 'Processing',
                otherMethods: 'Other Processing Forms',
                seoSuffix: 'Zayat Export Co.',
                main: "Made to order with the highest quality standards to ensure meeting our clients' diverse needs."
            },
            it: {
                specsTitle: 'Specifiche e Varianti',
                backBtn: 'Torna ai prodotti',
                contactBtn: 'Richiedi informazioni',
                catLabel: 'Categoria',
                procLabel: 'Lavorazione',
                otherMethods: 'Altre forme di lavorazione',
                seoSuffix: 'Zayat Export Co.',
                main: 'Realizzato su misura secondo i più alti standard di qualità per soddisfare le diverse esigenze.'
            }
        };

        const currentLabels = labels[lang] || labels['en'];
        return {
            ...currentLabels,
            name: isRtl ? product.name_ar : lang === 'it' ? product.name_it : product.name_en,
            desc: isRtl ? product.description_ar : lang === 'it' ? product.description_it : product.description_en,
            variants: product.variants?.map(v => isRtl ? v.name_ar : lang === 'it' ? v.name_it : v.name_en)
        };
    };

    const translateTechnical = (val: string) => {
        const labels: any = {
            ar: { vegetable: 'خضروات', fruit: 'فواكه', iqf: 'مجمد IQF', fresh: 'طازج', in_brine: 'في محلول ملحي' },
            en: { vegetable: 'Vegetable', fruit: 'Fruit', iqf: 'IQF', fresh: 'Fresh', in_brine: 'In Brine' },
            it: { vegetable: 'Verdura', fruit: 'Frutta', iqf: 'IQF', fresh: 'Fresco', in_brine: 'In salamoia' }
        };
        return labels[lang]?.[val] || val;
    };

    const content = getContent();

    const ProductDetailsContent = () => (
        <>
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
                <div className="p-4 md:p-6 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-center lg:items-start shadow-sm transition-all hover:shadow-md">
                    <span className="text-[9px] font-black text-agri-green uppercase tracking-widest mb-1">{content.catLabel}</span>
                    <span className="text-sm md:text-lg font-black text-gray-900 uppercase italic">{translateTechnical(product.category)}</span>
                </div>
                <div className="p-4 md:p-6 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-center lg:items-start shadow-sm transition-all hover:shadow-md">
                    <span className="text-[9px] font-black text-agri-green uppercase tracking-widest mb-1">{content.procLabel}</span>
                    <span className="text-sm md:text-lg font-black text-gray-900 uppercase italic">
                        {Array.isArray(product.status)
                            ? product.status.map(s => translateTechnical(s)).join(' / ')
                            : translateTechnical(product.status)}
                    </span>
                </div>
            </div>

            <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8 font-medium max-w-2xl mx-auto lg:mx-0">
                {content.desc}
            </p>

            {content.variants && content.variants.length > 0 && (
                <div className="p-6 md:p-8 bg-zinc-50/50 rounded-[2.5rem] border border-gray-100 text-start">
                    <h3 className="text-gray-900 text-[10px] font-black uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <FaCheckCircle className="text-agri-green" /> {content.specsTitle}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {content.variants.map((variant, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700 font-bold">
                                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-agri-green shrink-0" />
                                <span className="text-base">{variant}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="mt-10 mb-10">
                <p className={`text-zinc-800 text-lg md:text-2xl font-medium italic border-agri-green/20 py-2 ${isRtl ? 'border-r-4 pr-6' : 'border-l-4 pl-6'}`}>
                    "{content.main}"
                </p>
            </div>

            <div className="mt-auto">
                <AgriButton
                    className='w-full lg:w-[350px] justify-center py-5 text-lg rounded-full'
                    text={content.contactBtn}
                    to={`/${lang}/contact`}
                />
            </div>
        </>
    );

    return (
        <div className="pt-28 md:pt-30 pb-10 md:pb-20 bg-[#fcfcfc] min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
            <Helmet>
                <title>{`${content.name} | ${content.seoSuffix}`}</title>
                <meta name="description" content={content.desc} />
                <link rel="canonical" href={`${baseUrl}${pathname}`} />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-8 flex justify-center lg:justify-start">
                    <button
                        onClick={() => navigate(`/${lang}/products`)}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors group"
                    >
                        {isRtl ? (
                            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        ) : (
                            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
                        )}
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{content.backBtn}</span>
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">
                    {/* Header for Mobile */}
                    <div className="lg:hidden text-center">
                        <h1 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 tracking-tighter uppercase leading-tight italic">
                            {content.name}
                        </h1>
                    </div>

                    {/* Image Section */}
                    <div className="flex flex-col gap-8 w-full max-w-xl mx-auto lg:mx-0 order-1 lg:order-1">
                        <div className="group aspect-square w-full rounded-[2.5rem] md:rounded-[4.5rem] bg-white overflow-hidden border border-gray-100 flex items-center justify-center shadow-xl relative transition-transform duration-500 hover:scale-[1.01]">
                            <img
                                src={getImageUrl(product.image)}
                                alt={content.name}
                                className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col text-center lg:text-start order-2 lg:order-2">
                        <h1 className="hidden lg:block text-5xl lg:text-7xl font-black lg:mb-8 text-gray-900 tracking-tighter uppercase leading-[0.9] italic">
                            {content.name}
                        </h1>
                        <ProductDetailsContent />
                    </div>
                </div>
            </div>

            {/* Other Processing Variants */}
            {otherVariants.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 mt-20">
                    <div className="flex items-center gap-4 mb-10 justify-center">
                        <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">{content.otherMethods}</h4>
                        <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {otherVariants.map((v: any) => (
                            <Link
                                key={v.id}
                                title={isRtl ? v.name_ar : v.name_en}
                                to={`/${lang}/productsdetails/${v.id}`}
                                className="w-24 h-24 md:w-40 md:h-40 rounded-[2rem] bg-white border border-gray-100 flex items-center justify-center p-6 hover:border-agri-green hover:shadow-xl transition-all duration-500 group"
                            >
                                <img src={getImageUrl(v.image)} className="w-full h-full object-contain transition-transform group-hover:scale-110" alt="variant" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Related Products Slider */}
            <div className="mt-20 border-t border-gray-50 pt-20">
                <RelatedSlider currentProduct={product} />
            </div>
        </div>
    );
}