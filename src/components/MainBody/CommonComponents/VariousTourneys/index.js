import AliceCarouselComponent from "@/components/UI/AliceCarousel";

const responsive = {
   0: { items: 2 },
   768: { items: 3 },
   992: { items: 3},
 };

const VariousTourneys = ({tourneysData}) => {
    
   let tourneyItems = tourneysData.map((item) => {
      return (
        <div key={item.id}  className="tourney-image-container">
          <img
            className="tourney-image"
            src={item.image ? item.image : "https://bitsofco.de/content/images/2018/12/broken-1.png"}
            alt={item.alt}
            title={item.title}
            loading='lazy'
          />
        </div>
    )})

    
  return (
      <div className="tourney-container xs:tourney-container-xs sm:tourney-container-sm md:tourney-container-md lg:tourney-container-lg">
         <AliceCarouselComponent items={tourneyItems} playInterval={3000} autoPlay={true} infinite={true} responsive={responsive}/>
      </div>
    )
}

export default VariousTourneys