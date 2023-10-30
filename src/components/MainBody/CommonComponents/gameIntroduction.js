"use client"

import Link from "next/link"

const GameIntroduction = (props) => {
    const {title,description,footerText,footerTextLink,titleColor,descriptionColor} = props.gameIntroData
    const {gamePlayIntro} = props
    return(
        <section id="gameIntro" className='game-intro sm:game-intro-sm md:game-intro-md lg:game-intro-lg'>
            <div className="container my-container">
                {gamePlayIntro &&
                <div className="section-title">
                    <h3 className="section-heading" style={{color:titleColor}}>
                        {title}
                    </h3>
                </div>}

                <div className="section-body">
                    {gamePlayIntro &&
                     <>
                        <div className="description" style={{color:descriptionColor}}>
                            {description}
                        </div>
                        
                        {footerText && <div className="description-footer">
                            <Link href={footerTextLink} aria-label="About Rummy" className="read-more relative underline">
                                {footerText}
                            </Link>
                        </div>}
                     </>
                    }
    
                    {props.children?.map((child,idx) => (
                        <div key={idx} className={`${child.props.componentName === "videoPlayer" ? "embeded-video text-center" : props.children[0].props.componentName !== "tabsGroup" && "scrollable-tab"} `}>
                            {child} 
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default GameIntroduction