'use client';
import './Css/global.css'
import './Css/common.css'
import './Css/mobile.css'
import './Css/tablet.css'
import './Css/desktop.css'
import './Css/responsive.css'
import Logo from './Logo'
import MenuComponent from './Menu'
import SignupOrLogin from './SignupOrLogin'
import Link from 'next/link'
import MobileMenu from './MobileMenu/MobileMenu'
import { openMobileMenu, closeMobileMenu } from '@/app/utils/commonUtilities'
import AutoDownloadPopup from './AutoDownloadPopup/AutoDownloadPopup';

const Header = () => {

    return(
        <>
            <div id="menuOverlay" className='hidden lg:hidden' onClick={ closeMobileMenu }></div>
            <AutoDownloadPopup/>
            <div className='header sm:header-sm md:header-md lg:header-lg sm-md:header-sm-md'>
                <div className="md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto h-full">
                    <div className='flex justify-between h-full'>
                        <div className='hidden lg:flex items-center'>
                            <Logo/>
                        </div>
                        <nav className='hidden lg:block'>
                            <MenuComponent/>
                        </nav>
                        <div className='flex justify-between app-signup-download app-signup-download-sm md:app-signup-download-md lg:app-signup-download-lg'>
                            <div className='menu flex lg:hidden' id='nav_list'>
                                <button type="button" onClick={openMobileMenu}>
                                    <img src="../assets/images/header/hamburger-menu-white.svg" className="menu_img" alt="menu" title="Online Rummy" width={16} height={14}/>
                                </button>

                                <Link href="/" className="d-block">
                                    <img src="../assets/images/common/a23-logo-yellow.svg" className="a23-logo" alt="A23 Games" title="A23 Rummy" />
                                </Link>
                            </div>
                            <SignupOrLogin/>
                            <div className="download-links-icons items-center hidden lg:flex">
                                <Link href="downloads.html">
                                    <img src="../assets/images/header/android-solid-white.svg" alt="download a23 app for android" width={24} height={24} />
                                </Link>
                                <Link href="https://apps.apple.com/in/app/a23-games-rummy-fantasy/id1592656295">
                                    <img src="../assets/images/header/apple-solid-white.svg" alt="download a23 app for android" width={24} height={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu/>
        </>
    )
}

export default Header