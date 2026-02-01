import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaCheckCircle, FaSnowflake, FaLeaf, FaWater, FaTimes, FaImages, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const productGallery = (product as any)?.gallery || (product ? [product.image] : []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isLightboxOpen) return;
            if (e.key === 'ArrowRight') isRtl ? prevImg() : nextImg();
            if (e.key === 'ArrowLeft') isRtl ? nextImg() : prevImg();
            if (e.key === 'Escape') setIsLightboxOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, isRtl, currentImgIndex]);

    if (!product) return <div className="h-screen flex items-center justify-center font-black text-gray-400">PRODUCT NOT FOUND</div>;

    const getImageUrl = (path: string) => path.replace('..', '');

    const nextImg = () => setCurrentImgIndex((prev) => (prev + 1) % productGallery.length);
    const prevImg = () => setCurrentImgIndex((prev) => (prev - 1 + productGallery.length) % productGallery.length);

    const handleImageClick = (img: string) => {
        const index = productGallery.indexOf(img);
        setCurrentImgIndex(index !== -1 ? index : 0);
        setIsLightboxOpen(true);
    };

    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;
        if (diff > 50) isRtl ? prevImg() : nextImg();
        if (diff < -50) isRtl ? nextImg() : prevImg();
        setTouchStart(null);
    };

    const getContent = () => {
        const labels: any = {
            ar: {
                specsTitle: 'المواصفات والأنواع المتاحة',
                backBtn: 'العودة للمنتجات',
                contactBtn: 'استعلم واطلب الآن',
                catLabel: 'التصنيف',
                procLabel: 'طريقة المعالجة',
                otherMethods: 'أشكال ومعالجات أخرى',
                galleryTitle: 'صور المنتج',
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
                galleryTitle: 'Product Images',
                seoSuffix: 'Zayat Co.',
                main: "Made to order with the highest quality standards to ensure meeting our clients' diverse needs"
            },
            it: {
                specsTitle: 'Specifiche e Varianti',
                backBtn: 'Torna ai prodotti',
                contactBtn: 'Richiedi informazioni e ordina ora',
                catLabel: 'Categoria',
                procLabel: 'Lavorazione',
                otherMethods: 'Altre forme di lavorazione',
                galleryTitle: 'Immagini del producto',
                seoSuffix: 'Zayat Co.',
                main: 'Realizzato su misura secondo i più alti standard di qualità per soddisfare le diverse esigenze dei nostri clienti'
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
            en: { vegetable: 'Vegetable', fruit: 'Fruit', iqf: 'IQF', fresh: 'Fresh', in_brine: 'In Brine' },
            it: { vegetable: 'Verdura', fruit: 'Frutta', iqf: 'IQF', fresh: 'Fresco', in_brine: 'In salamoia' }
        };
        return labels[lang]?.[val] || val;
    };

    const content = getContent();

    const ProductDetailsContent = () => (
        <>
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
        </>
    );

    return (
        <div className="pt-28 md:pt-30 pb-10 md:pb-20 bg-[#fcfcfc] min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
            <Helmet>
                <title>{`${content.name} | ${content.seoSuffix}`}</title>
            </Helmet>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 touch-none"
                    onClick={() => setIsLightboxOpen(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <button className="absolute top-8 right-8 text-white text-3xl hover:scale-110 transition-transform z-[10000]"><FaTimes /></button>

                    {productGallery.length > 1 && (
                        <>
                            <button
                                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                                className="absolute left-4 md:left-10 text-white/50 hover:text-white text-4xl p-2 transition-all z-[10000]"
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                                className="absolute right-4 md:right-10 text-white/50 hover:text-white text-4xl p-2 transition-all z-[10000]"
                            >
                                <FaChevronRight />
                            </button>
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 font-medium">
                                {currentImgIndex + 1} / {productGallery.length}
                            </div>
                        </>
                    )}

                    <img
                        src={getImageUrl(productGallery[currentImgIndex])}
                        alt="Zoomed"
                        className="max-w-full max-h-[85vh] object-contain rounded-lg animate-in zoom-in duration-300 select-none"
                        onClick={(e) => e.stopPropagation()}
                    />
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

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-start">

                    <div className="flex flex-col text-center lg:text-start order-1 lg:order-2">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black lg:mb-4 text-gray-900 tracking-tighter uppercase leading-tight">
                            {content.name}
                        </h1>

                        <div className="hidden lg:flex flex-col">
                            <ProductDetailsContent />
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 w-full max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
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

                        {/* Thumbnails */}
                        {productGallery.length > 0 && (
                            <div className="space-y-6 w-full flex flex-col items-center">
                                <div className="flex flex-col items-center justify-center gap-4 w-full mb-2">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-[3px] bg-agri-green rounded-full opacity-20"></div>
                                        <div className="p-2 bg-agri-green/10 rounded-full">
                                            <FaLeaf className="text-agri-green text-xl md:text-xl" />
                                        </div>
                                        <div className="w-16 h-[3px] bg-agri-green rounded-full opacity-20"></div>
                                    </div>

                                    <h5 className={`font-black uppercase tracking-[0.4em] text-gray-800 text-center
                                            ${isRtl ? 'text-lg md:text-xl tracking-normal' : 'text-sm md:text-base'}`}>
                                        {content.galleryTitle}
                                    </h5>

                                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                                </div>

                                <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                                    {productGallery.map((img: string, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleImageClick(img)}
                                            className={`w-[20%] max-w-[70px] md:w-20 md:h-20 aspect-square rounded-2xl md:rounded-3xl border bg-white p-1.5 md:p-2 hover:shadow-lg transition-all duration-300 group overflow-hidden ${isLightboxOpen && currentImgIndex === idx ? 'border-agri-green shadow-md' : 'border-gray-100'}`}
                                        >
                                            <img src={getImageUrl(img)} alt="thumb" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex lg:hidden flex-col text-center lg:text-start order-3">
                        <ProductDetailsContent />
                    </div>

                </div>
            </div>

            {/* Other Variants */}
            {otherVariants.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 mt-14 md:mt-16">
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

            <div className="mt-10">
                <RelatedSlider currentProduct={product} />
            </div>
        </div>
    );
}