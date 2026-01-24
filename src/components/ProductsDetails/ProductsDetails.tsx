import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import productsData from '../../data/products.json';
import { Helmet } from 'react-helmet-async';
import AgriButton from '../Ui/AgriButton';
import RelatedSlider from './RelatedProducts';

export default function ProductsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const lang = i18n.language;
    const isRtl = lang === 'ar';

    const product = productsData.products.find(p => p.id === Number(id));

    const [selectedImage, setSelectedImage] = useState<string>('');

    const productGallery = (product as any)?.gallery || (product ? [product.image] : []);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (product) {
            setSelectedImage(product.image);
        }
    }, [id, product]);

    useEffect(() => {
        if (productGallery.length > 1) {
            const interval = setInterval(() => {
                setSelectedImage((prevImage) => {
                    const currentIndex = productGallery.indexOf(prevImage);
                    const nextIndex = (currentIndex + 1) % productGallery.length;
                    return productGallery[nextIndex];
                });
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [productGallery]);

    if (!product) return <div className="h-screen flex items-center justify-center font-black">PRODUCT NOT FOUND</div>;

    const getImageUrl = (path: string) => path.replace('..', '');

    const getContent = () => {
        if (lang === 'ar') return {
            name: product.name_ar,
            desc: product.description_ar,
            variants: product.variants?.map(v => v.name_ar),
            specsTitle: 'المواصفات والأنواع المتاحة',
            backBtn: 'العودة للمنتجات',
            contactBtn: 'تواصل معنا للاستفسار عن التصدير',
            catLabel: 'التصنيف',
            procLabel: 'طريقة المعالجة',
            seoSuffix: 'تصدير من شركة الزيات'
        };
        if (lang === 'it') return {
            name: product.name_it,
            desc: product.description_it,
            variants: product.variants?.map(v => v.name_it),
            specsTitle: 'Specifiche e Varianti',
            backBtn: 'Torna ai prodotti',
            contactBtn: 'Contattaci per l\'esportazione',
            catLabel: 'Categoria',
            procLabel: 'Lavorazione',
            seoSuffix: 'Esportazione da Zayat'
        };
        return {
            name: product.name_en,
            desc: product.description_en,
            variants: product.variants?.map(v => v.name_en),
            specsTitle: 'Specifications & Variants',
            backBtn: 'Back to Products',
            contactBtn: 'Contact for Export Inquiry',
            catLabel: 'Category',
            procLabel: 'Processing',
            seoSuffix: 'Export by Zayat'
        };
    };

    const translateTechnical = (val: string) => {
        const labels: any = {
            ar: { vegetable: 'خضروات', fruit: 'فواكه', iqf: 'مجمد IQF', fresh: 'طازج', in_brine: 'في محلول ملحي' },
            it: { vegetable: 'Verdura', fruit: 'Frutta', iqf: 'IQF', fresh: 'Fresco', in_brine: 'In Salamoia' },
            en: { vegetable: 'Vegetable', fruit: 'Fruit', iqf: 'IQF', fresh: 'Fresh', in_brine: 'In Brine' }
        };
        return labels[lang]?.[val] || val;
    };

    const content = getContent();

    return (
        <div className="pt-24 md:pt-32 pb-10 md:pb-20 bg-white min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
            <Helmet>
                <title>{`${content.name} | ${content.seoSuffix}`}</title>
                <meta name="description" content={content.desc.substring(0, 160)} />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <div className="mb-6 md:mb-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors group w-fit"
                    >
                        <FaArrowLeft
                            className={`transition-transform duration-300 ${isRtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}
                        />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                            {content.backBtn}
                        </span>
                    </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    
                    {/* Image Gallery Section */}
                    <div className="flex flex-col gap-4 md:gap-6 w-full max-w-xl mx-auto lg:mx-0">
                        <div className="aspect-square rounded-[2rem] md:rounded-[3.5rem] bg-white overflow-hidden border-2 border-gray-50 flex items-center justify-center p-6 md:p-12 shadow-sm relative">
                            <img
                                src={getImageUrl(selectedImage || product.image)}
                                alt={content.name}
                                className="max-w-full max-h-full object-contain transition-opacity duration-1000"
                            />
                        </div>

                        {productGallery.length > 1 && (
                            <div className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-start">
                                {productGallery.map((img: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(img)}
                                        className={`w-12 h-12 md:w-20 md:h-20 rounded-xl md:rounded-2xl border-2 transition-all p-1.5 md:p-3 bg-white
                                            ${selectedImage === img ? 'border-agri-green scale-105 shadow-md' : 'border-gray-50 opacity-60 hover:opacity-100'}`}
                                    >
                                        <img src={getImageUrl(img)} alt="thumbnail" className="w-full h-full object-contain" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info Section */}
                    <div className="flex flex-col text-center lg:text-start">
                        <h1 className={`text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-4 md:mb-6 leading-[1.1] ${isRtl ? '' : 'italic'}`}>
                            {content.name}
                        </h1>
                        <p className={`text-gray-500 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-medium max-w-2xl mx-auto lg:mx-0`}>
                            {content.desc}
                        </p>

                        {/* Specs Card */}
                        {content.variants && content.variants.length > 0 && (
                            <div className="mt-2 p-6 md:p-8 bg-[#fcfcfc] rounded-[2rem] border border-gray-100 shadow-sm text-start">
                                <h3 className="text-agri-green text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <FaCheckCircle className="shrink-0" /> {content.specsTitle}
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                                    {content.variants.map((variant, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 font-bold group">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-agri-green shrink-0" />
                                            <span className={`leading-tight ${isRtl ? 'text-base md:text-lg' : 'text-[11px] md:text-sm uppercase tracking-tight'}`}>
                                                {variant}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Labels Grid */}
                        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8 mb-8">
                            <div className="p-4 md:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{content.catLabel}</span>
                                <span className="text-sm md:text-base font-black text-gray-900 uppercase italic">
                                    {translateTechnical(product.category)}
                                </span>
                            </div>
                            <div className="p-4 md:p-5 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{content.procLabel}</span>
                                <span className="text-sm md:text-base font-black text-gray-900 uppercase italic">
                                    {Array.isArray(product.status)
                                        ? product.status.map(s => translateTechnical(s)).join(' / ')
                                        : translateTechnical(product.status)}
                                </span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="w-full sm:w-auto">
                            <AgriButton 
                                className='w-full sm:w-[320px] justify-center'
                                to="/contact"
                                text={content.contactBtn}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 md:mt-24">
                <RelatedSlider currentProduct={product} />
            </div>
        </div>
    );
}