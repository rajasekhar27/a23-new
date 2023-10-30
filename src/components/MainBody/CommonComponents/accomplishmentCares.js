import Link from "next/link"

const AccomplishmentCares = ({isRibbonShade}) => {
    return(
        <section id="accomplishmentCares" className='accomplishment-cares sm:accomplishment-cares-sm md:accomplishment-cares-md lg:accomplishment-cares-lg'>
            <div className='flex justify-center '>
                <div className='md:max-w-[720px] lg:max-w-[920px]'>
                    <h3 className="section-heading both-side-border relative ">Why Play with A23?</h3>
                </div>
            </div>

            <div className='accomplishment md:accomplishment-md'>
                <div className='md:max-w-[720px] lg:max-w-[920px] mx-auto'>
                    <div className='grid grid-cols-3 col-span-5'>
                        <div className='justify-self-center'>
                            <div className="flex flex-col justify-center ">
                                <img className='h-8 w-8 md:h-12 md:w-12' src="./assets/images/main-body/rummy/user-player.svg" alt="Cash Rummy" title="Rummy Cash Games App" style={{alignSelf:"center"}}/>
                                <>
                                    <div className="big text-center">5 Crore +</div>
                                    <div className="text text-center">Players</div>
                                </>
                            </div>
                        </div>
                        <div className='justify-self-center'>
                            <div className="icon flex flex-col justify-center ">
                                <img className='h-8 w-8 md:h-12 md:w-12' src="./assets/images/main-body/rummy/play-button-symboles.svg" alt="Cash Rummy" title="Rummy Cash Games App" style={{alignSelf:"center"}}/>
                                <>
                                    <div className="big text-center">1,000 Daily</div>
                                    <div className="text text-center">Tourneys</div>
                                </>
                            </div>
                        </div>
                        <div className='justify-self-center'>
                            <div className="icon flex flex-col justify-center ">
                                <img className='h-8 w-8 md:h-12 md:w-12' src="./assets/images/main-body/rummy/shield-check.svg" alt="Cash Rummy" title="Rummy Cash Games App" style={{alignSelf:"center"}}/>
                                <>
                                    <div className="big text-center">100%</div>
                                    <div className="text text-center">Trusted & Secure</div>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="app-downloading flex flex-col">
                <div className='self-center md:hidden'>
                    <button type="button" className="mybtn mybtn-success btn-radius flex justify-center items-center ">
                        <span className="icon-container">
                            <img src="./assets/images/main-body/rummy/down-aero-border-bottom.svg" alt="download app" width={14} height={11}/>
                        </span>
                        <span className="text-container">
                            Download Rummy Now
                        </span>
                    </button>
                </div>
                <div className="get-app-link hidden md:block">
                    <div className="input-group mx-auto ">
                        <span className="country-code flex items-center">+91</span>
                        <input type="text" className="form-control placeholder:text-[16px] placeholder:text-[#6c757d]" placeholder="Enter Mobile Number" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <button type="button" className="my-btn-success" >Get App Link</button>
                    </div>
                </div>
                
                {isRibbonShade && 
                <div className="ribbon-shade text-center mx-auto">
                    <div className="text md:text-md">Not ready to download yet?</div>
                    <Link href="#" className="link md:link-md underline">Play Rummy on Web</Link>
                </div>}
                
            </div>
        </section>
    )
}

export default AccomplishmentCares