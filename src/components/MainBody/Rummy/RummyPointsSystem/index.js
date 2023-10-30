
import BreadCrumb from "../../CommonComponents/breadCrumb"
import Banner from "../../CommonComponents/banner"
import AboutRummyPointsSystem from "./aboutRummyPointsSystem"
import FaqsComponent from "../../CommonComponents/faqsComponent"
import Faqs from "../../CommonComponents/Faqs"
import { bannerData, breadCrumbData, faqsDisclosureItems } from "@/components/Data/rummyPointsSystemData"

import "../../../../Css/LayoutCss/common-components.css"

const RummyPointsSystem = () => {
    return(
        <>
        
            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <Banner bannerData={bannerData}/>

            <AboutRummyPointsSystem/>

            <FaqsComponent >
                <Faqs faqsDisclosureItems={faqsDisclosureItems}/>
            </FaqsComponent>
            
        </>
    )
}

export default RummyPointsSystem