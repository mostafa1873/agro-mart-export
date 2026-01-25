import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import productsData from '../../data/products.json';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

interface Props {
    currentProduct: any;
}

export default function RelatedSlider({ currentProduct }: Props) {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const lang = i18n.language;
    const isRtl = lang === 'ar';

    const related = productsData.products.filter(p => {
        const currentStatus = Array.isArray(currentProduct.status) ? currentProduct.status : [currentProduct.status];
        const itemStatus = Array.isArray(p.status) ? p.status : [p.status];
        return itemStatus.some(s => currentStatus.includes(s)) && p.id !== currentProduct.id;
    });

    const displayProducts = related.slice(0, 4);

    if (displayProducts.length === 0) return null;

    const handleProductClick = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/productsdetails/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-16 md:py-24 bg-[#fff] border-t rounded-4xl border-gray-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative">
                
                {/* Header Section */}
                <div className={`mb-12 md:mb-16 relative ${isRtl ? 'text-right' : 'text-left'}`}>
                    <span className="absolute -top-6 md:-top-10 left-0 right-0 text-[40px] md:text-[100px] font-black text-gray-900/5 uppercase select-none pointer-events-none tracking-tighter overflow-hidden whitespace-nowrap">
                        {isRtl ? 'منتجاتنا المختارة' : 'Our Selection'}
                    </span>

                    <div className="relative z-10">
                        <span className="text-agri-green font-bold text-[10px] md:text-sm uppercase tracking-[0.2em] mb-2 block">
                            {isRtl ? 'اكتشف المزيد' : 'Explore More'}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-black text-gray-800 tracking-tight uppercase">
                            {isRtl ? 'منتجات ذات صلة' : 'Related Products'}
                        </h2>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-8">
                    {displayProducts.map((item, index) => (
                        <div
                            key={`${item.id}-${index}`}
                            onClick={(e) => handleProductClick(e, item.id)}
                            className="group cursor-pointer w-[calc(50%-12px)] lg:w-[calc(25%-32px)] max-w-[320px]"
                        >
                            <div className="bg-white h-full rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-5 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-200 flex flex-col relative overflow-hidden group-hover:-translate-y-1">

                                {/* Background Decor */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#bef264]/40 to-transparent rounded-bl-[60px] -mr-6 -mt-6 transition-transform duration-500 group-hover:scale-125"></div>
                                
                                <div className="relative aspect-[1/1] rounded-[1rem] md:rounded-[1.5rem] bg-white mb-4 overflow-hidden flex items-center justify-center p-4">
                                    <img
                                        src={item.image.replace('..', '')}
                                        alt={item.name_en}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />

                                    <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md text-agri-green opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        {isRtl ? <FaArrowLeft size={12} /> : <FaArrowRight size={12} />}
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="flex flex-col gap-1 mt-auto">
                                    <span className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 border border-gray-100 w-fit px-2 py-1 rounded-full">
                                        {item.category}
                                    </span>

                                    <h3 className="text-sm md:text-lg font-bold text-gray-800 leading-snug line-clamp-2 mt-1 group-hover:text-agri-green transition-colors">
                                        {lang === 'ar' ? item.name_ar : lang === 'it' ? item.name_it : item.name_en}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}