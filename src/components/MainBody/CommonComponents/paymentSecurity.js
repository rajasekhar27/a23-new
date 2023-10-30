import Link from "next/link"

const PaymentsAndSecurity = () => {
    return(
        <section id="paymentSecurity" className='payment-security sm:payment-security-sm md:payment-security-md lg:payment-security-lg xl:payment-security-xl'>
            <div className='my-4 md:my-8 lg:[margin-top:28px] lg:[margin-bottom:28px]'>
            <div className='flex justify-center max-w-[920px] mx-auto'>
                <div className=''>
                    <h3 className="section-heading both-side-border relative ">Your money is safe with us</h3>
                </div>
            </div>
            <div className='mycontainer'>
                <div className='certificates flex lg:justify-center lg:items-center'>
                    <div className="lg:mx-auto lg:w-[344px]">
                    <h5 className="sub-heading">Security & Certificates</h5>
                    <div className='flex '>
                        <span className='pr-[15px]'>
                            <img src="/assets/images/footer/digicert-logo.png" alt="digicert logo" className="digicert-logo" />
                        </span>
                        <span>
                            <img src="/assets/images/footer/egf.png" alt="EGF" className="egf_img" />
                        </span>
                    </div>
                    <div className='flex pt-[7px]'>
                        <span>
                            <img src="/assets/images/footer/18plus.png" alt="18 Plus" className="plus_18" />
                        </span>
                        <span>
                            <Link href="responsiblegaming.html">
                                <img src="/assets/images/footer/a23_cares.webp" alt="Play Responible" className="respo_icon" />
                            </Link>
                        </span>
                        <span>
                            <Link href="certification.html">
                                <img src="/assets/images/footer/itechlabs.png" alt="itechlabs" className="itech_img"  />
                            </Link>
                        </span>
                        <span>
                            <Link href="https://fifs.in/certificates/head-digital-works/" target="new" rel="nofollow">
                                <img src="/assets/images/footer/fifs_silver.png" alt="FIFS Silver" className="fifs_silver" loading="lazy"/>
                            </Link>
                        </span>
                    </div>
                    </div>

                </div>

                <div className='payments lg:flex lg:justify-center lg:items-start'>
                    <div className="lg:mx-auto">
                        <h5 className="sub-heading">Payment Methods</h5>
                        <div className='payments_div_1 '>
                            <div className="payments_div_3"> 
                                <img alt="UPI" src="/assets/images/footer/payment_img.webp" width={300} height={30} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default PaymentsAndSecurity