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
        <section className="w-full py-16 lg:py-28 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 mb-16 lg:mb-24 flex flex-col items-center">

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

                <div className="mt-6 lg:mt-8 flex items-center gap-1.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-agri-green animate-pulse" />
                    <div className="h-[2px] w-16 lg:w-20 bg-gradient-to-r from-agri-green to-transparent" />
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 lg:px-10">
                <div className="relative h-[350px] md:h-[500px] lg:h-[650px] w-full overflow-hidden rounded-[2.5rem] lg:rounded-[4.5rem] ">

                    {images.map((item, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-all duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1) ${i === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                                }`}
                        >
                            <img
                                src={item.url}
                                alt=""
                                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${i === index ? 'scale-105' : 'scale-125'
                                    }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    ))}

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className="py-4 group focus:outline-none"
                            >
                                <div className={`h-[3px] transition-all duration-500 rounded-full ${i === index ? 'w-12 bg-agri-green shadow-[0_0_15px_rgba(0,255,100,0.5)]' : 'w-6 bg-white/30 group-hover:bg-white/60'
                                    }`} />
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setIndex(index === 0 ? images.length - 1 : index - 1)}
                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white z-30 hidden lg:flex items-center justify-center hover:bg-agri-green transition-all"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => setIndex((index + 1) % images.length)}
                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white z-30 hidden lg:flex items-center justify-center hover:bg-agri-green transition-all"
                    >
                        →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WorkGallerySlider;