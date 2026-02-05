import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../../../public/logo.png'; 

const LoadingScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/40 backdrop-blur-xl"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="relative flex flex-col items-center">
        
        <div className="absolute w-40 h-40 bg-emerald-400/20 rounded-full blur-[60px] animate-pulse"></div>

        <div className="relative mb-6 transform transition-all">
          <img 
            src={logo} 
            alt="Agro Mart" 
            className="w-50 h-50 object-contain drop-shadow-2xl animate-[soft-bounce_2s_infinite]" 
          />
        </div>

        <div className={`text-center space-y-1 ${isArabic ? 'font-arabic' : ''}`}>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Agro<span className="text-emerald-600">Mart</span>
          </h2>
          
          <div className="relative w-32 h-[3px] bg-gray-200/50 rounded-full mx-auto mt-4 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-600 to-emerald-400 animate-[shimmer_1.5s_infinite] w-[40%] rounded-full"></div>
          </div>

          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em] mt-3 opacity-80">
            {t('loading.slogan', 'Quality First')}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes soft-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(250%); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;