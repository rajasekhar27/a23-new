
import BreadCrumb from "../../CommonComponents/breadCrumb"
import Banner from "../../CommonComponents/banner"
import AboutA23RummyGames from "./aboutA23Rummy"
import FaqsComponent from "../../CommonComponents/faqsComponent"
import Faqs from "../../CommonComponents/Faqs"

import "../../../../Css/LayoutCss/common-components.css"
import { bannerData, breadCrumbData } from "@/components/Data/aboutA23CardGamesData"



const A23RummyCardGames = () => {
    return(
        <>
        
            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <Banner bannerData={bannerData}/>

            <AboutA23RummyGames/>

            {/* <FaqsComponent >
                <Faqs faqsDisclosureItems={faqsDisclosureItems}/>
            </FaqsComponent> */}
            
        </>
    )
}

export default A23RummyCardGames