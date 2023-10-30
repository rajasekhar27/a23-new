import BreadCrumb from '../CommonComponents/breadCrumb'
import Banner from '../CommonComponents/banner'
import AccomplishmentCares from '../CommonComponents/accomplishmentCares'
import GameIntroduction from '../CommonComponents/gameIntroduction'
import LiveTourney from '../CommonComponents/liveTourney'
import GamerSpeak from '../CommonComponents/gamerSpeak'
import FaqsComponent from '../CommonComponents/faqsComponent'
import GamesVideoPlayer from '../CommonComponents/GamesVideoPlayer'
import GamesTabsGroup from '../CommonComponents/GamesTabsGroup'
import VariousTourneys from '../CommonComponents/VariousTourneys'
import WhatOurGamersSay from '../CommonComponents/OurGamersSay'
import Faqs from '../CommonComponents/Faqs'
import { bannerData, breadCrumbData, faqsDisclosureItems, gameIntroData, gamerSayData, gamerSpeakData, liveTourneyData, tabsListAndContent, tourneysData, videoPlayerData } from '@/components/Data/rummyData'

import "../../../Css/LayoutCss/common-components.css"

const Rummy = () => {
    return(
        <>

            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <Banner bannerData={bannerData}/>

            <AccomplishmentCares isRibbonShade={true} />

            <GameIntroduction gameIntroData={gameIntroData} gamePlayIntro={true}>
                <GamesVideoPlayer componentName="videoPlayer" videoPlayerData={videoPlayerData}/>
                <GamesTabsGroup componentName="tabsGroup" tabsListAndContent={tabsListAndContent}/>
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

export default Rummy