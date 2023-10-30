
import BreadCrumb from "../../CommonComponents/breadCrumb"
import Banner from "../../CommonComponents/banner"
import AboutPoolRummy from "./aboutPoolRummy"
import FaqsComponent from "../../CommonComponents/faqsComponent"
import Faqs from "../../CommonComponents/Faqs"
import { bannerData, breadCrumbData, faqsDisclosureItems } from "@/components/Data/poolRummyData"

import "../../../../Css/LayoutCss/common-components.css"


const PoolRummy = () => {
    return(
        <>
        
            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <Banner bannerData={bannerData}/>

            <AboutPoolRummy/>

            <FaqsComponent >
                <Faqs faqsDisclosureItems={faqsDisclosureItems}/>
            </FaqsComponent>
            
        </>
    )
}

export default PoolRummy