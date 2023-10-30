
import AliceCarouselComponent from "@/components/UI/AliceCarousel";

import "../../../../Css/LayoutCss/common-components.css"

const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    992: { items: 2},
    1280: {items: 3}
};

const WhatOurGamersSay = ({gamerSayData}) => {
    
    let gamersSaysItems = gamerSayData.map((item) => {
        return (
            <div className="gamer-say-block" key={item?.id}>
                <div className="gamer px-3 py-2 xl:px-6 xl:py-4" >
                    <img src={item.image} alt={item.alt} loading='lazy' className="gamecard-image"/>
                    <div className="px-2" >
                        <div className="" >
                            <h3 className="gamecard-title" >{item.title}</h3>
                            <div className="comment-tag-line" >{item.tagLine}</div>
                        </div>

                        <div className="gamecard-description">
                            "{item.description}"
                        </div>
                    </div>
                </div>        
            </div>
      )})
    
      return (
        <div id="ourGamerSay" className="our-gamer-say sm:our-gamer-say-sm md:our-gamer-say-md lg:our-gamer-say-lg xl:our-gamer-say-xl">
            <AliceCarouselComponent items={gamersSaysItems} playInterval={2500} autoPlay={true} infinite={true} responsive={responsive}/>
        </div>
        )
}

export default WhatOurGamersSay