import Link from "next/link"

import "../../../Css/IsolatedCss/home.css"

const PlayToWinRealRewards = () => {
    return(
        <section id="gameCards" className="game-cards sm:game-cards-sm md:game-cards-md lg:game-cards-lg xl:game-cards-xl">
            <div className="container mx-auto">
                <div className="my-container mx-auto px-[15px]">
                
                <h1 className="section-heading relative underline-class lg:mx-auto">
                    Play to win real rewards on A23
                </h1>

                <div className="grid grid-cols-2 sm:gap-x-3 md:gap-x-6 lg:grid-cols-4">
                    <div className="game-card order-1">
                        <div className="img">
                            <Link href="rummy.html" >
                                    <img src="./assets/images/main-body/home/icon-game-card-a23-rummy.svg" alt="..." className="w-[86px] h-[87px]"/>
                            </Link>
                        </div>
                        <div className="text-center min-h-[60px]">
                            <h3 className="heading">A23 RUMMY</h3>
                            <div className="caption mx-auto">
                                Choose and play from the many variants of rummy.
                            </div>
                        </div>
                        <div className="footer sm:pt-[10px]">
                            <Link href="https://a23.onelink.me/LuGW/v2nri2un" className="gtm_rummy_top_dwn_btn btn-download btn-radius">
                                <div>Download</div>
                            </Link>
                        </div>
                    </div>

                    <div className="game-card order-3 lg:order-2">
                        <div className="img">
                            <Link href="fantasysports.html" >
                                    <img src="./assets/images/main-body/home/icon-game-card-a23-games.svg" alt="..." className="w-[86px] h-[87px]"/>
                            </Link>
                        </div>
                        <div className="text-center min-h-[60px]">
                            <h3 className="heading">A23 GAMES</h3>
                            <div className="caption mx-auto">
                                Play carrom, pool and many more games here.
                            </div>
                        </div>
                        <div className="footer sm:pt-[10px]">
                            <Link href="https://pa2.onelink.me/as5x/u1eqvq41" className="gtm_rummy_top_dwn_btn btn-download btn-radius">
                                <div>Download</div>
                            </Link>
                        </div>
                    </div>


                    <div className="game-card order-2 lg:order-3">
                        <div className="img">
                            <Link href="fantasy.html" >
                                    <img src="./assets/images/main-body/home/icon-game-card-a23-fantassy.svg" alt="..." className="w-[86px] h-[87px]"/>
                            </Link>
                        </div>
                        <div className="text-center min-h-[60px]">
                            <h3 className="heading">A23 FANTASY</h3>
                            <div className="caption mx-auto">
                                Sports fantasies come true here with Fantasy Sports.
                            </div>
                        </div>
                        <div className="footer sm:pt-[10px]">
                            <Link href="https://fsa.onelink.me/oh3d/5eiannoh" className="gtm_rummy_top_dwn_btn btn-download btn-radius">
                                <div>Download</div>
                            </Link>
                        </div>
                    </div>

                    <div className="game-card order-4 relative">
                        <div className="img">
                            <Link href="poker.html" >
                                <img src="./assets/images/main-body/home/icon-game-card-a23-poker.svg" alt="..." className="w-[86px] h-[87px]"/>
                            </Link>
                        </div>
                        <img src="./assets/images/main-body/home/playforfun.svg" alt="Play for fun" className="playforfun"/>
                        <div className="text-center min-h-[60px]">
                            <h3 className="heading">A23 POKER</h3>
                            <div className="caption mx-auto">
                                High risk, higher rewards. Play high stakes Poker.
                            </div>
                        </div>
                        <div className="footer sm:pt-[10px]">
                            <Link href="https://pa2.onelink.me/as5x/u1eqvq41" className="gtm_rummy_top_dwn_btn btn-download btn-radius">
                                <div>Download</div>
                            </Link>
                        </div>
                    </div>

                </div>
                </div>
            </div>

        </section>
    )
}

export default PlayToWinRealRewards