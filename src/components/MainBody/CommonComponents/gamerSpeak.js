import Link from "next/link"

import "../../../Css/LayoutCss/common-components.css"


const GamerSpeak = (props) => {
    const {title,btnText,btnLink} = props.gamerSpeakData
    return(
        <section id="gamerSpeak" className='gamer-speak sm:gamer-speak-sm md:gamer-speak-md lg:gamer-speak-lg'>
            <div className='flex justify-center '>
                <div className='max-w-6xl'>
                    <h3 className="section-heading both-side-border relative ">{title}</h3>
                </div>
            </div>

            <div style={{width:'100%'}}>
                {props.children}    {/* What Our Gamers Say */}
            </div>
            <div className="view-all-btn-container text-center pt-3 flex justify-center">
                <Link href={btnLink} className="btn-bg-view btn-radius" >
                    {btnText}
                </Link>
            </div>
        </section>
    )
}

export default GamerSpeak