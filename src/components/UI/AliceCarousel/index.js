'use client'

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const AliceCarousel = dynamic(() => import("react-alice-carousel"),{ssr:false})
import "react-alice-carousel/lib/alice-carousel.css";


const AliceCarouselComponent = ({items,playInterval,autoPlay,infinite,responsive}) => {
    const [isMounted,setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    },[])

    return(
        <AliceCarousel
            mouseTracking
            items={items}
            responsive={isMounted && responsive}
            controlsStrategy="alternate"
            autoPlayInterval={playInterval}
            autoPlayDirection="ltr"
            autoPlay={autoPlay}
            mouseTrackingEnabled={true}
            infinite={infinite}
            keyboardNavigation={true}
            disableButtonsControls
        />
    )
}
export default AliceCarouselComponent