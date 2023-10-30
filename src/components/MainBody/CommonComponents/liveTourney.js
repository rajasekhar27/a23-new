import Link from "next/link"

const LiveTourney = (props) => {
    const { title, btnText, btnLink,background } = props.liveTourneyData
    return(
        <section id="livetourney" className={`live-tourney sm:live-tourney-sm md:live-tourney-md l:live-toruney-lg`} style={{background:background}}>
            <div className="various-tourney-container container mx-auto">
                
                    <div className="section-title flex lg:justify-center">
                        <h2 className="section-heading relative underline-class">{title}</h2>
                    </div> 
                    
                    <div className="mx-auto" style={{width:'100%',maxWidth:'1152px'}}>
                        {props.children}      {/* Various Tourneys */}
                    </div>

                    <div className="view-btn-container text-center pt-3 flex justify-center">
                        
                        <Link href={btnLink} className="btn-bg-view btn-radius" >
                            {btnText}
                        </Link>
                        
                    </div>
            </div>
        </section>
    )
}

export default LiveTourney