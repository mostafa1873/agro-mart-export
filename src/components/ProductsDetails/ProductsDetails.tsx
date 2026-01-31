import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaCheckCircle, FaSnowflake, FaLeaf, FaWater, FaTimes, FaImages } from 'react-icons/fa';
import productsData from '../../data/products.json';
import { Helmet } from 'react-helmet-async';
import AgriButton from '../Ui/AgriButton';
import RelatedSlider from './RelatedProducts';

export default function ProductsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const lang = i18n.language;
    const isRtl = lang === 'ar';

    const allProducts = productsData.products;
    const product = allProducts.find(p => p.id === Number(id));

    const otherVariants = allProducts.filter(p =>
        p.name_en.split(' ')[0] === product?.name_en.split(' ')[0] && p.id !== product?.id
    );

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImg, setLightboxImg] = useState('');

    const productGallery = (product as any)?.gallery || (product ? [product.image] : []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="h-screen flex items-center justify-center font-black text-gray-400">PRODUCT NOT FOUND</div>;

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
                galleryTitle: 'معرض الصور',
                seoSuffix: 'شركة الزيات',
                main: "يتم التصنيع حسب الطلب وبأعلى معايير الجودة لضمان تلبية احتياجات عملائنا المتنوعة."
            },
            en: {
                specsTitle: 'Specifications & Variants',
                backBtn: 'Back to Products',
                contactBtn: 'Inquire & Order Now',
                catLabel: 'Category',
                procLabel: 'Processing',
                otherMethods: 'Other Processing Forms',
                galleryTitle: 'Product Gallery',
                seoSuffix: 'Zayat Co.',
                main: "Made to order with the highest quality standards to ensure meeting our clients' diverse needs"
            }
        };

        const currentLabels = labels[lang] || labels['en'];
        return {
            ...currentLabels,
            name: isRtl ? product.name_ar : product.name_en,
            desc: isRtl ? product.description_ar : product.description_en,
            variants: product.variants?.map(v => isRtl ? v.name_ar : v.name_en)
        };
    };

    const translateTechnical = (val: string) => {
        const labels: any = {
            ar: { vegetable: 'خضروات', fruit: 'فواكه', iqf: 'مجمد IQF', fresh: 'طازج', in_brine: 'في محلول ملحي' },
            en: { vegetable: 'Vegetable', fruit: 'Fruit', iqf: 'IQF', fresh: 'Fresh', in_brine: 'In Brine' }
        };
        return labels[lang]?.[val] || val;
    };

    const handleImageClick = (img: string) => {
        setLightboxImg(img);
        setIsLightboxOpen(true);
    };

    const content = getContent();

    return (
        <div className="pt-28 md:pt-40 pb-10 md:pb-20 bg-[#fcfcfc] min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
            <Helmet>
                <title>{`${content.name} | ${content.seoSuffix}`}</title>
            </Helmet>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4" onClick={() => setIsLightboxOpen(false)}>
                    <button className="absolute top-8 right-8 text-white text-3xl hover:scale-110 transition-transform"><FaTimes /></button>
                    <img src={getImageUrl(lightboxImg)} alt="Zoomed" className="max-w-full max-h-[85vh] object-contain rounded-lg animate-in zoom-in duration-300" />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <div className="mb-8 flex justify-center lg:justify-start">
                    <button onClick={() => navigate('/products')} className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors group">
                        <FaArrowLeft className={`transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{content.backBtn}</span>
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Image & Centered Gallery */}
                    <div className="flex flex-col gap-8 w-full max-w-xl mx-auto lg:mx-0">

                        {/* Main Image Card */}
                        <div
                            className="group aspect-square w-full rounded-[2.5rem] md:rounded-[4rem] bg-white overflow-hidden border border-gray-100 flex items-center justify-center shadow-md relative cursor-zoom-in"
                            onClick={() => handleImageClick(product.image)}
                        >
                            <img
                                src={getImageUrl(product.image)}
                                alt={content.name}
                                className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm p-3 rounded-full opacity-0 md:group-hover:opacity-100 transition-opacity">
                                <FaImages className="text-agri-green" />
                            </div>
                        </div>

                        {/* Centered Thumbnails Gallery */}
                        {productGallery.length > 0 && (
                            <div className="space-y-6 w-full flex flex-col items-center">
                                <div className="flex items-center justify-center gap-4 w-full">
                                    <div className="w-8 h-[1px] bg-gray-200"></div>
                                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 whitespace-nowrap">
                                        {content.galleryTitle}
                                    </h5>
                                    <div className="w-8 h-[1px] bg-gray-200"></div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                                    {productGallery.map((img: string, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleImageClick(img)}
                                            className="w-[20%] max-w-[70px] md:w-20 md:h-20 aspect-square rounded-2xl md:rounded-3xl border border-gray-100 bg-white p-1.5 md:p-2 hover:border-agri-green hover:shadow-lg transition-all duration-300 group overflow-hidden"
                                        >
                                            <img src={getImageUrl(img)} alt="thumb" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Info */}
                    <div className="flex flex-col text-center lg:text-start">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-6 leading-tight">
                            {content.name}
                        </h1>

                        <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
                            <div className="p-4 md:p-6 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-center lg:items-start">
                                <span className="text-[9px] font-black text-agri-green uppercase tracking-widest mb-1">{content.catLabel}</span>
                                <span className="text-sm md:text-lg font-black text-gray-900 uppercase italic">{translateTechnical(product.category)}</span>
                            </div>
                            <div className="p-4 md:p-6 rounded-[2rem] bg-white border border-gray-100 flex flex-col items-center lg:items-start">
                                <span className="text-[9px] font-black text-agri-green uppercase tracking-widest mb-1">{content.procLabel}</span>
                                <span className="text-sm md:text-lg font-black text-gray-900 uppercase italic">
                                    {Array.isArray(product.status) ? product.status.map(s => translateTechnical(s)).join(' / ') : translateTechnical(product.status)}
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
                                <ul className="grid grid-cols-1 gap-3">
                                    {content.variants.map((variant, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 font-bold">
                                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-agri-green/40 shrink-0" />
                                            <span className="text-base">{variant}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="mt-10 mb-10">
                            <p className="text-zinc-800 text-lg md:text-2xl font-medium italic border-l-4 border-agri-green/20 pl-6 py-2">
                                "{content.main}"
                            </p>
                        </div>

                        <div className="mt-auto">
                            <AgriButton className='w-full lg:w-[350px] justify-center py-5 text-lg rounded-full' text={content.contactBtn} to="/contact" />
                        </div>

                    </div>
                </div>
            </div>

            {/* Other Variants */}
            {otherVariants.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 mt-20 md:mt-32">
                    <div className="flex items-center gap-4 mb-10 justify-center">
                        <div className="h-[1px] bg-gray-200 flex-grow max-w-[50px]"></div>
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">{content.otherMethods}</h4>
                        <div className="h-[1px] bg-gray-200 flex-grow max-w-[50px]"></div>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {otherVariants.map((v: any) => (
                            <Link key={v.id} to={`/productsdetails/${v.id}`} className="w-20 h-20 md:w-36 md:h-36 rounded-3xl bg-white border border-gray-100 flex items-center justify-center p-4 hover:border-agri-green transition-all">
                                <img src={getImageUrl(v.image)} className="w-full h-full object-contain" alt="variant" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <div className="mt-24">
                <RelatedSlider currentProduct={product} />
            </div>
        </div>
    );
}