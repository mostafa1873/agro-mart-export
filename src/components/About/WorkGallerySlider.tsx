import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface GalleryItem {
    url: string;
}

const WorkGallerySlider: React.FC<{ images: GalleryItem[] }> = ({ images }) => {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    return (

        <section className="w-full py-8 lg:py-12 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 mb-12 lg:mb-16 flex flex-col items-center">
                <div className="flex items-center gap-3 lg:gap-4 mb-4">
                    <span className="text-agri-green font-black text-xs lg:text-sm tracking-[0.3em] lg:tracking-[0.4em]">
                        02
                    </span>
                    <div className="w-8 lg:w-10 h-[1px] bg-agri-green/30" />
                    <span className="text-gray-400 text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] whitespace-nowrap">
                        {t('about.portfolio.subTitle')}
                    </span>
                </div>

                <div className="relative w-full flex justify-center">
                    <span className="absolute -top-6 lg:-top-16 left-1/2 -translate-x-1/2 text-5xl md:text-8xl lg:text-[10rem] font-black text-gray-100 select-none -z-10 whitespace-nowrap opacity-40 lg:opacity-60 pointer-events-none">
                        {t('about.portfolio.bgText')}
                    </span>

                    <h2 className="relative text-3xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] lg:leading-none text-center max-w-[90%] lg:max-w-full">
                        {t('about.portfolio.mainTitlePart1')}{" "}
                        <span className="text-agri-green inline-block">
                            {t('about.portfolio.mainTitlePart2')}
                        </span>
                    </h2>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 lg:px-10">
                <div className="relative h-[300px] md:h-[450px] lg:h-[550px] w-full overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] bg-gray-50 shadow-sm">

                    {images.map((item, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out flex items-center justify-center bg-gray-900 ${
                                i === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                            }`}
                        >
                            {/* Layer 1: Blurred Background Image (Fills the space) */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={item.url}
                                    alt=""
                                    className="w-full h-full object-cover blur-xl opacity-60 scale-110"
                                />
                            </div>

                            {/* Layer 2: Main Image (Shows full content) */}
                            <img
                                src={item.url}
                                alt=""
                                className={`relative z-10 w-full h-full object-contain transition-transform duration-[6000ms] ease-out ${
                                    i === index ? 'scale-100' : 'scale-105'
                                }`}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40 pointer-events-none" />
                        </div>
                    ))}

                    {/* Pagination Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className="p-2 group focus:outline-none"
                            >
                                <div className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-agri-green' : 'w-2 bg-white/50 group-hover:bg-white'
                                    }`} />
                            </button>
                        ))}
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
                        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white z-30 hidden lg:flex items-center justify-center hover:bg-agri-green hover:border-agri-green hover:scale-110 hover:-translate-x-2 transition-all duration-300 group/btn"
                    >
                        <svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            className="group-hover/btn:-translate-x-0.5 transition-transform"
                        >
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <button
                        onClick={() => setIndex((index + 1) % images.length)}
                        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white z-30 hidden lg:flex items-center justify-center hover:bg-agri-green hover:border-agri-green hover:scale-110 hover:translate-x-2 transition-all duration-300 group/btn"
                    >
                        <svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            className="group-hover/btn:translate-x-0.5 transition-transform"
                        >
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>

    );
};

export default WorkGallerySlider;