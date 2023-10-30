
import BreadCrumb from "../../CommonComponents/breadCrumb"
import RummyRulesGuide from "./rummyRulesGuide"
import FaqsComponent from "../../CommonComponents/faqsComponent"
import Faqs from "../../CommonComponents/Faqs"
import { breadCrumbData } from "@/components/Data/rummyRulesData"

import "../../../../Css/LayoutCss/common-components.css"



const RummyRules = () => {
    return(
        <>
        
            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <RummyRulesGuide/>

            {/* <FaqsComponent >
                <Faqs faqsDisclosureItems={faqsDisclosureItems}/>
            </FaqsComponent> */}
            
        </>
    )
}

export default RummyRules