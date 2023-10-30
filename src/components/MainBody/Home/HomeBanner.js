import AliceCarouselComponent from "@/components/UI/AliceCarousel";
import { homeBannerData } from "@/components/Data/homeData";

import "../../../Css/IsolatedCss/home.css"

const responsive = {
   0: { items: 1 },
   768: { items: 1 },
   992: { items: 1},
 };

const HomeBannerCarousel = () => {
    
   let tourneyItems = homeBannerData.map((item) => {
      return (
        <div key={item.id} style={{background:item.bg}}>
          <img
            className="md:w-[720px] lg:w-[960px] xl:w-[1140px] h-full mx-auto sm:hidden"
            src={item.image_web}
            alt={item.alt}
            title={item.title}
            // loading='lazy'
          />
          <img
            className="w-full h-full mx-auto md:hidden"
            src={item.image_mobile}
            alt={item.alt}
            title={item.title}
            // loading='lazy'
          />
        </div>
    )})

    
  return (
      <div id="homeBanner" className="home-banner sm:home-banner-sm md:home-banner-md lg:home-banner-lg">
         <AliceCarouselComponent items={tourneyItems} playInterval={4000} autoPlay={true} infinite={true} responsive={responsive}/>
      </div>
    )
}

export default HomeBannerCarousel