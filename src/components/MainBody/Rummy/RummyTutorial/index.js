
import BreadCrumb from "../../CommonComponents/breadCrumb"
import Banner from "../../CommonComponents/banner"
import AboutTutorial from "./aboutTutorial"
import FaqsComponent from "../../CommonComponents/faqsComponent"
import Faqs from "../../CommonComponents/Faqs"
import { bannerData, breadCrumbData, faqsDisclosureItems } from "@/components/Data/rummyTutorialData"

import "../../../../Css/LayoutCss/common-components.css"

const RummyTutorial = () => {
    return(
        <>
        
            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <Banner bannerData={bannerData}/>

            <AboutTutorial/>

            <FaqsComponent >
                <Faqs faqsDisclosureItems={faqsDisclosureItems}/>
            </FaqsComponent>
            
        </>
    )
}

export default RummyTutorial