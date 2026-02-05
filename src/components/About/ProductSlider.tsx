import { motion } from 'framer-motion';
import AgriButton from '../Ui/AgriButton';

const ProductSlider = ({ products, t, isRtl }) => {
    const displayProducts = products?.slice(0, 6) || [];
    const duplicatedProducts = [...displayProducts, ...displayProducts, ...displayProducts, ...displayProducts];

    return (

        <div className="py-8 lg:py-20 flex items-center justify-center px-0 lg:px-8">

            <div className="relative w-full max-w-[1400px] bg-white rounded-none lg:rounded-[6rem] shadow-none lg:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.08)] border-y border-gray-100 lg:border border-x-0 lg:border-x p-8 lg:p-20 overflow-hidden">

                <div className="relative z-10 mb-12 lg:mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative inline-block"
                    >
                        <span className="absolute -top-6 lg:-top-10 left-1/2 -translate-x-1/2 text-4xl lg:text-8xl font-black text-gray-50 opacity-[0.03] whitespace-nowrap select-none">
                            {t('productSlider.title_part2')}
                        </span>

                        <h2 className="relative text-3xl lg:text-6xl font-light text-gray-800 tracking-tight">
                            {t('productSlider.title_part1')} <span className="font-black text-agri-green">{t('productSlider.title_part2')}</span>
                        </h2>

                        <div className="mt-4 flex justify-center items-center gap-2">
                            <div className="h-[2px] w-8 bg-agri-green/20 rounded-full" />
                            <div className="h-[3px] w-12 bg-agri-green rounded-full shadow-[0_0_10px_rgba(0,166,81,0.5)]" />
                            <div className="h-[2px] w-8 bg-agri-green/20 rounded-full" />
                        </div>
                    </motion.div>
                </div>

                <div className="relative">
                    <motion.div
                        className="flex gap-8 lg:gap-20 items-center"
                        animate={{
                            x: isRtl ? [0, 1500] : [0, -1500],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 35,
                                ease: "linear",
                            },
                        }}
                        whileHover={{ transition: { duration: 0 } }}
                        style={{ width: "max-content" }}
                    >
                        {duplicatedProducts.map((product, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative flex flex-col items-center group cursor-pointer shrink-0"
                            >
                                <div className="relative w-36 h-36 lg:w-56 lg:h-56 mb-4 lg:mb-6">
                                    <div className="absolute inset-0 bg-gray-50 rounded-full shadow-inner group-hover:shadow-agri-green/10 transition-all duration-500 border border-gray-100" />

                                    <div className="absolute inset-2 lg:inset-3 rounded-full overflow-hidden bg-white shadow-sm">
                                        <img
                                            src={product.image}
                                            loading='lazy'
                                            alt={product.name_en}
                                            className="w-full h-full object-contain p-4 lg:p-6 group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>

                                    <div className="absolute -top-1 -right-1 w-10 h-10 lg:w-14 lg:h-14 bg-agri-green text-white rounded-full flex items-center justify-center text-[7px] lg:text-[9px] font-bold uppercase rotate-12 shadow-md z-20">
                                        {t('productSlider.badge')}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h4 className="text-base lg:text-xl font-black text-gray-900 mb-1">
                                        {isRtl ? product.name_ar : product.name_en}
                                    </h4>
                                    <div className="h-1 w-0 group-hover:w-1/2 bg-agri-green mx-auto transition-all duration-500 rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-16 lg:mt-24 text-center">

                    <AgriButton
                        to="/products"
                        text={t('productSlider.view_all')}
                    />
                </div>

                <div className="absolute top-0 left-0 w-32 h-32 lg:w-64 lg:h-64 bg-agri-green/5 rounded-full blur-[40px] lg:blur-[80px] -z-10" />
                <div className="absolute bottom-0 right-0 w-32 h-32 lg:w-64 lg:h-64 bg-emerald-500/5 rounded-full blur-[40px] lg:blur-[80px] -z-10" />
            </div>
        </div>
        
    );
};

export default ProductSlider;