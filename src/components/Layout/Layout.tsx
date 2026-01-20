import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import WhatsAppBubble from '../WhatsAppBubble/WhatsAppBubble';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export default function Layout() {

    return (
        <>
            <ScrollToTop />

            <Navbar />
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <WhatsAppBubble />
            <Footer />
        </>
    );
}