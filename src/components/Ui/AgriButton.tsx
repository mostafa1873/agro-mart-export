import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface AgriButtonProps {
    to: string;
    text: string;
    className?: string;
}

const AgriButton: React.FC<AgriButtonProps> = ({ to, text, className = "" }) => {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';

    return (
        <Link
            to={to}
            className={`inline-flex group items-center gap-5 bg-white px-7 py-3.5 rounded-full shadow-sm border border-gray-100 font-bold hover:shadow-xl hover:shadow-agri-green/10 hover:border-agri-green/30 transition-all duration-300 active:scale-95 ${className}`}
        >
            <span className="text-gray-900 text-sm md:text-base tracking-wide">
                {text}
            </span>

            <span className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-agri-green text-white flex items-center justify-center transition-all duration-500 ease-out shadow-lg shadow-agri-green/20 ${isRtl ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'
                }`}>
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-500 ${isRtl ? 'rotate-180' : ''}`}
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </span>
        </Link>
    );
};

export default AgriButton;