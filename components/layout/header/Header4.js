'use client'
import Link from "next/link";
import MobileMenu from "../MobileMenu";
import OnepageMenu from "../OnepageMenu";

export default function Header4({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
        <div className="auto-container">
          <div className="top-inner">
            <ul className="info-list clearfix">
              <li><i className="icon-1"></i>Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</li>
              <li><i className="icon-2"></i>Email: <Link href="tel:01989526503">0198-9526503</Link></li>
              <li><img src="assets/images/icons/icon-1.png" alt=""/> 47 Bakery Street, London, UK</li>
            </ul>
            <ul className="social-links clearfix">
              <li><Link href="/"><i className="icon-4"></i></Link></li>
              <li><Link href="/"><i className="icon-5"></i></Link></li>
              <li><Link href="/"><i className="icon-6"></i></Link></li>
              <li><Link href="/"><i className="icon-7"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
                   
                {/* Header Upper */}
                <div className="header-lower">
                    <div className="outer-container">
                    <div className="auto-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
                        </div>
                        <div className="menu-area">
                        {/* Mobile Navigation Toggler */}
                        <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                            <i className="icon-bar"></i>
                        </div>
                        {/* Main Menu */}
                        <nav className="main-menu navbar-expand-md navbar-light clearfix">
                            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                <OnepageMenu/>
                            </div>
                        </nav>
                        
                        </div>
                        {/* Menu Right Content */}
                        <div className="menu-right-content">
                            <div className="btn-box">
                                <Link href="/" className="theme-btn btn-one"><span>Request A Pickup</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                {/*End Header Upper*/}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="outer-box">
                        <div className="logo-box">
                            <figure className="logo"><Link href="/"><img src="assets/images/logo.png" alt=""/></Link></figure>
                        </div>
                                    
                        <div className="menu-area">
                            <nav className="main-menu clearfix">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <OnepageMenu/>
                                </div>
                            </nav>
                            </div>
                            <div className="btn-box">
                        <Link href="/" className="theme-btn btn-one"><span>Request A Pickup</span></Link>
                    </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
                {/* Mobile Menu  */}

                <MobileMenu handleMobileMenu={handleMobileMenu} />
            </header>
            
            {/* Add responsive styles */}
            <style jsx>{`
                @media (max-width: 1199px) {
                    .menu-right-content .btn-box {
                        margin-left: 15px;
                    }
                    .theme-btn.btn-one {
                        padding: 10px 20px;
                        font-size: 14px;
                    }
                    .theme-btn.btn-one span {
                        font-size: 14px;
                    }
                }
                
                @media (max-width: 991px) {
                    .header-top {
                        display: none;
                    }
                    .menu-right-content {
                        display: none;
                    }
                    .sticky-header .btn-box {
                        display: none;
                    }
                    /* Show button in mobile menu or create a mobile-specific button */
                    .mobile-pickup-btn {
                        display: block;
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        z-index: 999;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        border-radius: 50px;
                        box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
                        animation: pulse 2s infinite;
                    }
                    .mobile-pickup-btn .theme-btn {
                        background: transparent !important;
                        border: none !important;
                        color: white !important;
                        padding: 12px 24px !important;
                        font-weight: 600 !important;
                        font-size: 14px !important;
                    }
                    .mobile-pickup-btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 12px 35px rgba(102, 126, 234, 0.5);
                    }
                }
                
                @media (max-width: 768px) {
                    .mobile-pickup-btn {
                        bottom: 15px;
                        right: 15px;
                    }
                    .mobile-pickup-btn .theme-btn {
                        padding: 10px 20px !important;
                        font-size: 13px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .mobile-pickup-btn .theme-btn span {
                        font-size: 12px !important;
                    }
                }
                
                @keyframes pulse {
                    0%, 100% { 
                        transform: scale(1); 
                        opacity: 1; 
                    }
                    50% { 
                        transform: scale(1.05); 
                        opacity: 0.9; 
                    }
                }
                
                /* Ensure button is above other elements */
                .theme-btn.btn-one {
                    position: relative;
                    z-index: 10;
                    transition: all 0.3s ease;
                }
                
                .theme-btn.btn-one:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
                }
            `}</style>
        </>
    )
}
