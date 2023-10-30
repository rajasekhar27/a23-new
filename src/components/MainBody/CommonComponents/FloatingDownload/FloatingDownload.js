'use client';
import { downloadMyAppPopup } from "../../../Header/AutoDownloadPopup/AutoDownloadPopup";
import "../../../../Css/LayoutCss/floatingdownload.css";
import { useEffect, useState } from "react";

const FloatingDownload = () => {

    const [foatingBtnHideShow, setFoatingBtnHideShow] = useState(true);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 370) {
                setFoatingBtnHideShow(false);
            }
            else {
                setFoatingBtnHideShow(true);
            }
         }
    });

    return (
        <>
            <div id="btnFloatingDownload" className={`fixed bottom-0 floating-download ${foatingBtnHideShow && "hidden"} lg:hidden pt-3 pb-2`}>
                <div onClick={downloadMyAppPopup} className="gtm_a23games_main_btn_btm btn-download-a23 flex justify-center items-center">
                    <img src="./assets/images/common/download_icon.png" alt="A23 Rummy" className="donwload_icon_width" width={20} height={20} /> 
                    <span>Download The App</span>
                </div>
                <div className="caption text-center flex justify-center items-center gap-1">
                    <span className="icon"><img src="./assets/images/common/fire.png" alt="download fire" width={14} height={18} /></span>
                    <span className="text">134023 users downloaded in the last 24 hours!</span>
                </div>
            </div>            
        </>
    );
}

export default FloatingDownload