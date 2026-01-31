import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import home1 from '../../assets/home-1.webp';
import home2 from '../../assets/home-2.webp';
import home3 from '../../assets/home-3.webp';


const WhyChooseUs = ({ t, isRtl }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            title: t('home.why.standards'),
            desc: t('home.why.standards_d'),
            img: home1,
            num: "01"
        },
        {
            title: t('home.why.direct'),
            desc: t('home.why.direct_d'),
            img: home2,
            num: "02"
        },
        {
            title: t('home.why.logistics'),
            desc: t('home.why.logistics_d'),
            img: home3,
            num: "03"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
        }, 2000);
        return () => clearInterval(interval);
    }, [features.length]);

    return (
        <section className="py-12 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="mb-12 lg:mb-16 text-center lg:text-start">
                    <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight italic">
                        {t('home.why.title1')} <span className="text-agri-green">{t('home.why.title2')}</span>
                    </h2>
                    <p className="mt-4 text-gray-500 font-medium">{t('home.why.title3')}</p>
                </div>

                <div className="flex flex-col lg:flex-row h-[550px] lg:h-[600px] gap-4 transition-all duration-700 ease-in-out">
                    {features.map((feat, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <div
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`relative transition-all duration-1000 ease-in-out overflow-hidden rounded-[2.5rem] cursor-pointer shadow-xl
                                ${isActive ? 'flex-[4] lg:flex-[2.5]' : 'flex-[1] lg:flex-1'} 
                                group`}
                            >
                                {/* Background Image */}
                                <img
                                    src={feat.img}
                                    alt={feat.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] 
                                    ${isActive ? 'scale-110' : 'scale-100'}`}
                                />

                                <div className={`absolute inset-0 transition-colors duration-700 
                                    ${isActive ? 'bg-black/20' : 'bg-black/60'}`}></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent"></div>

                                <div className="absolute inset-0 p-6 lg:p-12 flex flex-col justify-end text-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className={`transition-all duration-700 font-black opacity-40 ${isActive ? 'text-4xl lg:text-6xl' : 'text-2xl lg:text-4xl'}`}>
                                            {feat.num}
                                        </span>
                                        <div className={`h-[2px] transition-all duration-700 bg-agri-green ${isActive ? 'w-16' : 'w-0'}`}></div>
                                    </div>

                                    <h4 className={`font-black mb-4 uppercase tracking-tighter transition-all duration-700 ${isActive ? 'text-2xl lg:text-4xl' : 'text-lg lg:text-2xl'}`}>
                                        {feat.title}
                                    </h4>

                                    <div className={`grid transition-all duration-700 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <p className="text-gray-200 text-sm lg:text-lg leading-relaxed max-w-md overflow-hidden">
                                            {feat.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center gap-3 mt-8 lg:hidden">
                    {features.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-10 bg-agri-green' : 'w-2 bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;