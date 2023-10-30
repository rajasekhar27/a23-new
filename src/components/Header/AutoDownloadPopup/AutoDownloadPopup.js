import Link from "next/link"

let downloadAppTime;

export const downloadApp = e => {
    window.location = e, closeDownloadMyAppPopup()
},
downloadMyAppPopup = (e = !1) => {
    let t = document.getElementById("download-apps-overlay"),
       n = document.getElementsByClassName("circle-2");
    e ? (n[0].classList.add("animate"), t.classList.add("active"), downloadAppTime = setTimeout(() => {
       downloadApp("https://pf.a23.in/cjv7pCGBsub")
    }, 7e3)) : closeDownloadMyAppPopup()
},
 closeDownloadMyAppPopup = () => {
    let e = document.getElementById("download-apps-overlay");
    document.getElementsByClassName("circle-2")[0].classList.remove("animate"), e.classList.remove("active"), clearTimeout(downloadAppTime)
}

export default function AutoDownloadPopup() {
    return (
        <>
            <section id="download-apps-overlay" className="lg:hidden mx-auto sm-md:download-apps-overlay-sm-md">
                <div className="container main-container mx-auto px-4">
                    <button type="button" className="close-icon" onClick={closeDownloadMyAppPopup}>
                        <img src="/assets/images/header/close.svg" alt="" width="12" height="12" />
                    </button>

                    <div className="download-overlay-card">
                        <div className="header w-full">
                            <div className="heading">
                                <span className="text-left">
                                    Choose your game to download
                                </span><br/>
                                <span className="clr-y fs-11 disclaimer">
                                    If no option is selected, A23 Games will start downloading
                                </span>
                            </div>

                            <div className="timer">
                                <div className="circle-1">
                                    <svg>
                                    <circle r="8" cx="12" cy="12"></circle>
                                    </svg>
                                </div>
                                <div className="circle-2">
                                    <svg>
                                    <circle r="8" cx="12" cy="12"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="body">
                            <button type="button" className="btn-app-download gtm_rummy_bottom w-full" onClick={()=>downloadApp('https://a.a23.in/DZJYcIsBsub')}>
                                <div className="img-text">
                                    <div className="img-container">
                                        <img src="/assets/images/header/icon-game-card-a23-rummy-download-card-mobile.png" alt="A23 Rummy" className="gtm_fantasy_bottom" width="65" height="65" />
                                    </div>

                                    <div className="text-container">
                                        <div className="title text-left">
                                            A23 RUMMY APP
                                        </div>
                                        <div className="subtext">
                                            Points Rummy | 51 Pool | Gun Shot | BO3
                                        </div>
                                    </div>
                                </div>

                                <div className="icons">
                                    <img src="/assets/images/header/download-aero.svg" alt=" A23 Rummy Download" width="45" height="24" />
                                </div>
                            </button>

                            <button type="button" className="btn-app-download gtm_games_bottom w-full" onClick={() => downloadApp('https://pf.a23.in/WdGMuXwBsub')}>
                                <div className="img-text">
                                    <div className="img-container">
                                        <img src="/assets/images/header/icon-game-card-a23-games-download-card-mobile.png" alt="A23 Games" className="gtm_fantasy_bottom" width="65" height="65" />
                                    </div>
                                    <div className="text-container">
                                        <div className="title text-left">
                                            A23 GAMES APP
                                        </div>
                                        <div className="subtext">
                                            Rummy | Fantasy | Carrom | Pool
                                        </div>
                                    </div>
                                </div>
                                <div className="icons">
                                    <img src="/assets/images/header/download-aero.svg" alt="A23 Games Download" width="45" height="24" />
                                </div>
                            </button>

                            <button type="button" className="btn-app-download gtm_fantasy_bottom w-full" onClick={() => downloadApp('https://f.a23.in/4kymG9YAsub')}>
                                <div className="img-text">
                                    <div className="img-container">
                                        <img src="/assets/images/header/icon-game-card-a23-fantassy-download-card-mobile.png" alt="A23 Games" className="gtm_fantasy_bottom" width="65" height="65" />
                                    </div>
                                    <div className="text-container">
                                        <div className="title text-left">
                                            A23 FANTASY APP
                                        </div>
                                        <div className="subtext">
                                            Cricket | Football | Basketball | Baseball
                                        </div>
                                    </div>
                                </div>
                                <div className="icons">
                                    <img src="/assets/images/header/download-aero.svg" alt="A23 Fantasy Download" width="45" height="24" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}