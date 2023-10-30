
const Banner = (props) => {
    const {banner_large,banner_small,alt,title} = props.bannerData
    return(
        <section id="topBanner" className="top-banner">
            <div className="banner-container">
                <img width={1140} height={475} src={banner_large}  alt={alt}  title={title} className='hidden md:block'/>
                <img width={540} height={408} src={banner_small}  alt={alt}  title={title} className='md:hidden'/>
            </div>
        </section>
    )
}

export default Banner