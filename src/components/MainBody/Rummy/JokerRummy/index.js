
import BreadCrumb from "../../CommonComponents/breadCrumb"
import Banner from "../../CommonComponents/banner"
import AboutJokerRummy from "./aboutJokerRummy"
import FaqsComponent from "../../CommonComponents/faqsComponent"
import Faqs from "../../CommonComponents/Faqs"
import { bannerData, breadCrumbData, faqsDisclosureItems } from "@/components/Data/jokerRummyData"

import "../../../../Css/LayoutCss/common-components.css"


const JokerRummy = () => {
    return(
        <>
        
            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <Banner bannerData={bannerData}/>

            <AboutJokerRummy/>

            <FaqsComponent >
                <Faqs faqsDisclosureItems={faqsDisclosureItems}/>
            </FaqsComponent>
            
        </>
    )
}

export default JokerRummy