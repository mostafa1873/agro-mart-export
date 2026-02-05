import { useEffect, useState } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import WhatsAppBubble from '../WhatsAppBubble/WhatsAppBubble';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import LoadingScreen from '../Ui/LoadingScreen';

export default function Layout() {
    const { lng } = useParams();
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const supportedLangs = ['en', 'ar', 'it'];

        if (!supportedLangs.includes(lng!)) {
            navigate('/en', { replace: true });
            return;
        }

        setIsLoading(true);

        if (i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }

        document.documentElement.lang = lng!;
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';

        if (lng === 'ar') {
            document.body.classList.add('font-arabic');
        } else {
            document.body.classList.remove('font-arabic');
        }

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);

    }, [lng, i18n, navigate]);

    const baseUrl = "https://agromartexport.com"; 
    const purePath = pathname.replace(`/${lng}`, '');

    return (
        <>
            <Helmet>
                <link rel="alternate" href={`${baseUrl}/en${purePath}`} hreflang="en" />
                <link rel="alternate" href={`${baseUrl}/ar${purePath}`} hreflang="ar" />
                <link rel="alternate" href={`${baseUrl}/it${purePath}`} hreflang="it" />
                <link rel="alternate" href={`${baseUrl}/en${purePath}`} hreflang="x-default" />
            </Helmet>

            {isLoading && <LoadingScreen />}

            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <ScrollToTop />
                <Navbar currentLang={lng!} />
                <div className='container mx-auto min-h-[80vh]'>
                    <Outlet />
                </div>
                <WhatsAppBubble />
                <Footer />
            </div>
        </>
    );
}