
import BreadCrumb from "../../CommonComponents/breadCrumb"
import Banner from "../../CommonComponents/banner"
import AboutDealsRummy from "./aboutDealsRummy"
import FaqsComponent from "../../CommonComponents/faqsComponent"
import Faqs from "../../CommonComponents/Faqs"
import { bannerData, breadCrumbData, faqsDisclosureItems } from "@/components/Data/dealsRummyData"

import "../../../../Css/LayoutCss/common-components.css"

const DealsRummy = () => {
    return(
        <>
        
            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <Banner bannerData={bannerData}/>

            <AboutDealsRummy/>

            <FaqsComponent >
                <Faqs faqsDisclosureItems={faqsDisclosureItems}/>
            </FaqsComponent>
            
        </>
    )
}

export default DealsRummy