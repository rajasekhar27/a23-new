'use client';
import Link from "next/link";
import DropdownItem from "./DropdownItem";
import MenuLink from "./MenuLink";
import { closeMobileMenu, openCloseDropdownMenu } from "@/app/utils/commonUtilities";
import DropdownListItem from "./DropdownListItem";
import { downloadMyAppPopup } from "../AutoDownloadPopup/AutoDownloadPopup";
import { useEffect, useState } from "react";

openCloseDropdownMenu();

const MobileMenu = () => {
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        const currentHeight = window.innerHeight;
  
        if (currentHeight !== windowHeight) {
          setWindowHeight(currentHeight);
        }
      };

      if(windowHeight === 0){
        setWindowHeight(window.innerHeight)
      }
      // Add the event listener to the window
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [windowHeight]);

    return (
        <>
            <div id="leftMenu" className="lg:hidden leftmenu sm:leftmenu-sm md:leftmenu-md sm-md:leftmenu-sm-md hidden" >
                <nav className="relative navigations">
                    <div className="menu-content">
                        <ul>
                            <li className="close-login-part lg:hidden flex items-center justify-between">
                                <span className="fs-18">
                                    <Link href="/">
                                        <img src="../assets/images/common/a23-logo-yellow.svg" alt="close" height="24" width="33.23" id="mobileMenuLogo" className="a23-logo" />
                                    </Link>
                                </span>

                                <button type="button" onClick={closeMobileMenu}>
                                    <img src="../assets/images/header/times-white.svg" alt="Close" title="Rummy App" height="14" width="14" className="menu-close" />
                                </button>
                            </li>

                            <li className="menu-item relative dropdown-menu dropdown-menu-closed">
                                <DropdownItem imagePath={"../assets/images/header/game-controller-white.svg"} altText={"Our Games"} menuText={"Our Games"} iconWidth={24} iconHeight={24}/>
                                <ul className="dropdown-list">
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Rummy'} redirection={"/rummy.html"}/>
                                    </li>
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Fantasy'} redirection={"/fantasysports.html"}/>
                                    </li>
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Poker'} redirection={"/poker.html"}/>
                                    </li>
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Carrom'} redirection={"/carrom.html"}/>
                                    </li>
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Pool'} redirection={"/pool.html"}/>
                                    </li>
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Call Break'} redirection={"callbreak.html"}/>
                                    </li>
                                </ul>
                            </li>
                            
                            <li className="menu-item relative dropdown-menu dropdown-menu-closed">
                                <DropdownItem imagePath={"../assets/images/header/percent-white-bg.svg"} altText={"bonus and voucher"} menuText={"Bonus & Voucher"} iconWidth={24} iconHeight={24}/>

                                <ul className="dropdown-list">
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Bonus Offers'} redirection={"rummybonus.html"}/>
                                    </li>
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Pseudo Bonus'} redirection={"regular_player_bonus.html"}/>
                                    </li>
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Welcome Bonus'} redirection={"a23-welcome-bonus.html"}/>
                                    </li>
                                    <li className="flex items-center relative">
                                        <DropdownListItem menuText={'Vouchers'} redirection={"gift.html"}/>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item py-3">
                                <MenuLink href={"acepoints.html"} imagePath={"../assets/images/header/heart-solid-white.svg"} altText={"Loyalty Program"} menuText={"Loyalty Program"} iconWidth={24} iconHeight={14}/>
                            </li>

                            <li className="menu-item py-3">
                                <MenuLink href={"responsiblegaming.html"} imagePath={"../assets/images/header/rg-white.svg"} altText={"Responsible Gaming"} menuText={"Responsible Gaming"} iconWidth={24} iconHeight={24}/>
                            </li>

                            <li className="menu-item py-3">
                                <MenuLink href={"referAndEarn.html"} imagePath={"../assets/images/header/refer-user.svg"} altText={"Refer & Earn"} menuText={"Refer & Earn"} iconWidth={24} iconHeight={24}/>
                            </li>

                            <li className="menu-item py-3">
                                <MenuLink href={"tds.html"} imagePath={"../assets/images/header/game-controller-white.svg"} altText={"TDS"} menuText={"TDS"} iconWidth={24} iconHeight={24}/>
                            </li>

                            <li className="menu-item py-3">
                                <MenuLink href={"aboutus.html"} imagePath={"../assets/images/header/speak-us.svg"} altText={"About Us"} menuText={"About Us"} iconWidth={24} iconHeight={24}/>
                            </li>

                            <li className="menu-item py-3">
                                <MenuLink href={"/blog/"} imagePath={"../assets/images/header/bulb.svg"} altText={"Blog"} menuText={"Blog"} iconWidth={24} iconHeight={24}/>
                            </li>

                            <li className="menu-item py-3">
                                <MenuLink href={"faqs.html"} imagePath={"../assets/images/header/question-mark-white.svg"} altText={"FAQs"} menuText={"FAQs"} iconWidth={24} iconHeight={24}/>
                            </li>

                            <li className="menu-item py-3">
                                <MenuLink href={"contactus.html"} imagePath={"../assets/images/header/tel-white.svg"} altText={"Contact Us"} menuText={"Contact Us"} iconWidth={24} iconHeight={24}/>
                            </li>
                        </ul>
                    </div>

                    <div className="absolute download-btn">
                        <button type="button" id="A23GamesApp" className="gtm_a23games_main_btn_btm btn-download-a23 flex justify-center items-center" onClick={downloadMyAppPopup}>
                            <img src="../assets/images/header/download_icon.png" alt="A23 Rummy" className="donwload-icon" width={24} height={24} />
                            <span>Download The App</span>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default MobileMenu
