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

    const displayProducts = [...related, ...related, ...related];

    if (related.length === 0) return null;

    const handleProductClick = (e: React.MouseEvent, id: number) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/productsdetails/${id}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="py-20 md:py-32 bg-[#fafafa] overflow-hidden border-t border-gray-100 relative">
            
            <div className="max-w-7xl mx-auto px-4 mb-16 relative">
                <div className={`relative ${isRtl ? 'text-right' : 'text-left'}`}>
                    <span className="absolute -top-8 left-0 right-0 text-[50px] md:text-[100px] font-black text-gray-200/30 uppercase select-none pointer-events-none tracking-tighter overflow-hidden whitespace-nowrap">
                        {isRtl ? 'منتجاتنا المختارة' : 'Our Selection'}
                    </span>
                    
                    <div className="relative z-10">
                        <span className="text-agri-green font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-2 block">
                            {isRtl ? 'اكتشف المزيد' : 'Explore More'}
                        </span>
                        <h2 className={`text-3xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase ${isRtl ? '' : 'italic'}`}>
                            {isRtl ? 'منتجات مشابهة' : 'Related Products'}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="relative flex">
                <div className="flex gap-6 md:gap-10 animate-infinite-scroll hover:[animation-play-state:paused] py-4">
                    {displayProducts.map((item, index) => (
                        <div 
                            key={`${item.id}-${index}`}
                            onClick={(e) => handleProductClick(e, item.id)}
                            className="w-[260px] md:w-[380px] shrink-0 cursor-pointer group"
                        >
                            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-5 md:p-8 shadow-[0_10px_50px_-20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-700 border border-gray-50 flex flex-col h-full relative overflow-hidden">
                                
                                <div className="absolute top-0 right-0 w-32 h-32 bg-agri-green/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>

                                <div className="aspect-square rounded-[1.5rem] md:rounded-[2.5rem] bg-white mb-6 overflow-hidden flex items-center justify-center p-6 md:p-12 relative">
                                    <img 
                                        src={item.image.replace('..', '')} 
                                        alt={item.name_en}
                                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                </div>

                                <h3 className="text-lg md:text-2xl font-black text-gray-900 uppercase leading-tight mb-4 line-clamp-2">
                                    {lang === 'ar' ? item.name_ar : lang === 'it' ? item.name_it : item.name_en}
                                </h3>
                                
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                    
                                    <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-100 bg-gray-50 text-gray-900 group-hover:bg-agri-green group-hover:text-white group-hover:border-agri-green transition-all duration-500">
                                        {isRtl ? (
                                            <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform" />
                                        ) : (
                                            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(${isRtl ? '33.33%' : '-33.33%'}); }
                }
                .animate-infinite-scroll {
                    display: flex;
                    width: max-content;
                    animation: infinite-scroll 70s linear infinite;
                }
                
                [dir='rtl'] .animate-infinite-scroll {
                    animation-direction: normal;
                }

                @media (max-width: 768px) {
                    .animate-infinite-scroll {
                        animation: infinite-scroll 40s linear infinite;
                    }
                }
            `}</style>
        </section>
    );
}