

import BreadCrumb from '../CommonComponents/breadCrumb'
import Banner from '../CommonComponents/banner'
import AccomplishmentCares from '../CommonComponents/accomplishmentCares'
import GameIntroduction from '../CommonComponents/gameIntroduction'
import GamesTabsGroup from '../CommonComponents/GamesTabsGroup'
import GamesVideoPlayer from '../CommonComponents/GamesVideoPlayer'
import LiveTourney from '../CommonComponents/liveTourney'
import VariousTourneys from '../CommonComponents/VariousTourneys'
import GamerSpeak from '../CommonComponents/gamerSpeak'
import WhatOurGamersSay from '../CommonComponents/OurGamersSay'
import FaqsComponent from '../CommonComponents/faqsComponent'
import Faqs from '../CommonComponents/Faqs'
import { breadCrumbData, liveTourneyData, tourneysData, tabsListAndContent, faqsDisclosureItems, gamerSpeakData, gamerSayData, bannerData, gameIntroData, videoPlayerData } from '@/components/Data/fantasySportsData'

import "../../../Css/LayoutCss/common-components.css"

const FantasySports = () => {
    return(
        <>

            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <Banner bannerData={bannerData}/>

            <AccomplishmentCares isRibbonShade={false}/>

            <GameIntroduction gameIntroData={gameIntroData}>
                <GamesTabsGroup componentName="tabsGroup" tabsListAndContent={tabsListAndContent}/>
                <GamesVideoPlayer componentName="videoPlayer" videoPlayerData={videoPlayerData}/>
            </GameIntroduction>

            <LiveTourney liveTourneyData={liveTourneyData}>
                <VariousTourneys tourneysData={tourneysData}/>
            </LiveTourney>

            <GamerSpeak gamerSpeakData={gamerSpeakData}>
                <WhatOurGamersSay gamerSayData={gamerSayData} />
            </GamerSpeak>

            <FaqsComponent >
                <Faqs faqsDisclosureItems={faqsDisclosureItems}/>
            </FaqsComponent>
            
        </>
    )
}

export default FantasySports