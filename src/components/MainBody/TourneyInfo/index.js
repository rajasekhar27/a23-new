import BreadCrumb from "../CommonComponents/breadCrumb"
import { breadCrumbData } from "@/components/Data/tourneyInfoData"
import TourneyBanners from "./tourneyBanners"

import "../../../Css/LayoutCss/common-components.css"

const TourneyInfo = () => {
    return(
        <>
            <BreadCrumb breadCrumbData={breadCrumbData}/>

            <TourneyBanners/>

        </>
    )
}

export default TourneyInfo