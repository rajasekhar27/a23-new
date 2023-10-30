'use client'

//imports
import HomeBannerCarousel from './HomeBanner';
import PlayToWinRealRewards from './playToWinRealRewards';
import A23Credibility from './a23Credibility';
import GameIntroduction from '../CommonComponents/gameIntroduction';
import GamesVideoPlayer from '../CommonComponents/GamesVideoPlayer';
import GamesTabsGroup from '../CommonComponents/GamesTabsGroup';
import LiveTourney from '../CommonComponents/liveTourney';
import VariousTourneys from '../CommonComponents/VariousTourneys';
import GamerSpeak from '../CommonComponents/gamerSpeak';
import WhatOurGamersSay from '../CommonComponents/OurGamersSay';
import { gameIntroData, offersLiveTourneyData, offersTourneysData, tabsListAndContent,liveTourneyData, tourneysData, gamerSpeakData, gamerSayData, videoPlayerData, } from '@/components/Data/homeData';

import "../../../Css/LayoutCss/common-components.css"

const Home = () => {
  return (
    <>
        
        <HomeBannerCarousel/>

        <PlayToWinRealRewards/>

        <A23Credibility/>
        
        <GameIntroduction gameIntroData={gameIntroData} gamePlayIntro={true}>
            <GamesVideoPlayer componentName="videoPlayer" videoPlayerData={videoPlayerData}/>
            <GamesTabsGroup componentName="tabsGroup" tabsListAndContent={tabsListAndContent}/>
        </GameIntroduction>

        <LiveTourney liveTourneyData={offersLiveTourneyData}>
            <VariousTourneys tourneysData={offersTourneysData}/>
        </LiveTourney>

        <GamerSpeak gamerSpeakData={gamerSpeakData}>
            <WhatOurGamersSay gamerSayData={gamerSayData} />
        </GamerSpeak>

        <LiveTourney liveTourneyData={liveTourneyData}>
            <VariousTourneys tourneysData={tourneysData}/>
        </LiveTourney>

    </>
  );
}

export default Home