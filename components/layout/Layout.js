
'use client'
import dynamic from 'next/dynamic';
import Link from "next/link";
import { useEffect, useState } from "react";

// Dynamic import for the WOW library
const WOW = dynamic(() => import('wowjs/dist/wow'));

import BackToTop from '../elements/BackToTop';
import DataBg from "../elements/DataBg";
import Breadcrumb from './Breadcrumb';
import SearchPopup from "./SearchPopup";
import Sidebar from "./Sidebar";
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        document.body.classList.toggle("mobile-menu-visible", !isMobileMenu);
    };
    const [isPopup, setPopup] = useState(false);
    const handlePopup = () => setPopup(!isPopup);
    const [isSidebar, setSidebar] = useState(false);
    const handleSidebar = () => setSidebar(!isSidebar);

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])

    return (
        <>
            <DataBg />
            <div className={`boxed_wrapper ltr ${wrapperCls ? wrapperCls : ""}`} id="#top">
                {(headerStyle === 1 || !headerStyle) && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle === 2 && <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle === 3 && <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
                {headerStyle === 4 && <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                {(footerStyle === 1 || !footerStyle) && <Footer1 />}
                {footerStyle === 2 && <Footer2 />}
                
                {/* Mobile Pickup Button - Only show for Header4 */}
                {headerStyle === 4 && (
                    <div className="mobile-pickup-btn">
                        <Link href="/" className="theme-btn btn-one">
                            <span>Request A Pickup</span>
                        </Link>
                    </div>
                )}
            </div>
            <BackToTop scroll={scroll} />
            
            <style jsx>{`
                .mobile-pickup-btn {
                    display: none;
                }
                
                @media (max-width: 991px) {
                    .mobile-pickup-btn {
                        display: block;
                        position: fixed;
                        bottom: 80px;
                        right: 20px;
                        z-index: 999;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        border-radius: 50px;
                        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
                        animation: mobilePulse 2s infinite;
                        transition: all 0.3s ease;
                    }
                    .mobile-pickup-btn .theme-btn {
                        background: transparent !important;
                        border: none !important;
                        color: white !important;
                        padding: 12px 24px !important;
                        font-weight: 600 !important;
                        font-size: 14px !important;
                        margin: 0 !important;
                        display: block !important;
                        text-decoration: none !important;
                    }
                    .mobile-pickup-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
                    }
                    .mobile-pickup-btn .theme-btn:hover {
                        background: transparent !important;
                        color: white !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .mobile-pickup-btn {
                        bottom: 70px;
                        right: 15px;
                    }
                    .mobile-pickup-btn .theme-btn {
                        padding: 10px 20px !important;
                        font-size: 13px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .mobile-pickup-btn {
                        bottom: 60px;
                        right: 10px;
                    }
                    .mobile-pickup-btn .theme-btn {
                        padding: 8px 16px !important;
                        font-size: 12px !important;
                    }
                    .mobile-pickup-btn .theme-btn span {
                        font-size: 12px !important;
                    }
                }
                
                @keyframes mobilePulse {
                    0%, 100% { 
                        transform: scale(1); 
                        opacity: 1; 
                    }
                    50% { 
                        transform: scale(1.05); 
                        opacity: 0.9; 
                    }
                }
            `}</style>
        </>
    );
}
