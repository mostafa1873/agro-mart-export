import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // استيراد الترجمة
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa';
import productsData from '../../data/products.json';
import { Helmet } from 'react-helmet-async';

export default function ProductsDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const lang = i18n.language;
    const isRtl = lang === 'ar';

    const product = productsData.products.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="h-screen flex items-center justify-center font-black">PRODUCT NOT FOUND</div>;

    const getImageUrl = (path: string) => path.replace('..', '');

    // دالة جلب المحتوى المترجم
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

    // ترجمة القيم التقنية (Category & Status)
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
                {/* العنوان يظهر كـ: (اسم المنتج | تصدير من شركة الزيات) */}
                <title>{`${content.name} | ${content.seoSuffix}`}</title>
                <meta name="description" content={content.desc.substring(0, 160)} />
                <meta property="og:title" content={`${content.name} - Zayat Export`} />
                <meta property="og:description" content={content.desc.substring(0, 160)} />
                <meta property="og:image" content={`https://zayatexport.com${getImageUrl(product.image)}`} />
                <link rel="canonical" href={`https://zayatexport.com/productsdetails/${id}`} />
            </Helmet>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* --- التحكم --- */}
                <div className="mb-10">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors group w-fit"
                    >
                        <FaArrowLeft
                            className={`transition-transform duration-300 
                                ${isRtl ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`}
                        />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                            {content.backBtn}
                        </span>
                    </button>
                </div>

                {/* --- شبكة المحتوى --- */}
                <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">

                    {/* الصورة */}
                    <div className="relative w-full max-w-2xl mx-auto">
                        <div className="aspect-square rounded-[2.5rem] md:rounded-[4rem] bg-white overflow-hidden border-2 md:border-4 border-gray-50 flex items-center justify-center p-6 md:p-12 shadow-sm">
                            <img
                                src={getImageUrl(product.image)}
                                alt={content.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* المحتوى */}
                    <div className="flex flex-col">
                        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tighter uppercase mb-4 md:mb-6 leading-tight ${isRtl ? '' : 'italic'}`}>
                            {content.name}
                        </h1>
                        <p className={`text-gray-500 text-base md:text-lg leading-relaxed mb-6 md:mb-10 font-medium`}>
                            {content.desc}
                        </p>

                        {content.variants && content.variants.length > 0 && (
                            <div className="mt-2 p-5 md:p-8 bg-[#fcfcfc] rounded-[2rem] border border-gray-100 shadow-sm">
                                <h3 className="text-agri-green text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <FaCheckCircle /> {content.specsTitle}
                                </h3>
                                <ul className="space-y-3">
                                    {content.variants.map((variant, index) => (
                                        <li key={index} className="flex items-start gap-3 text-gray-700 font-bold group">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-agri-green shrink-0" />
                                            <span className={isRtl ? 'text-lg' : 'text-[11px] md:text-sm uppercase tracking-tight'}>
                                                {variant}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* الكروت التقنية المترجمة */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-8">
                            <div className="p-5 rounded-2xl bg-white border border-gray-100">
                                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{content.catLabel}</span>
                                <span className="text-base font-black text-gray-900 uppercase italic">
                                    {translateTechnical(product.category)}
                                </span>
                            </div>
                            <div className="p-5 rounded-2xl bg-white border border-gray-100">
                                <span className="block text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">{content.procLabel}</span>
                                <span className="text-base font-black text-gray-900 uppercase italic">
                                    {Array.isArray(product.status)
                                        ? product.status.map(s => translateTechnical(s)).join(' / ')
                                        : translateTechnical(product.status)}
                                </span>
                            </div>
                        </div>

                        <button className="w-full py-5 bg-green-700 text-white rounded-2xl font-black text-[14px] md:text-[16px] uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-agri-green transition-all shadow-xl shadow-green-100 active:scale-95">
                            {content.contactBtn}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}