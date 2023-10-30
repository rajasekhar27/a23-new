import Link from "next/link"

const FooterComponent = () => {
    return(
        <footer id="mainFooter" className='main-footer sm:main-footer-sm md:main-footer-md lg:main-footer-lg xl:main-footer-xl'>
            <div className="footer pt-0">
                <div className="hdworks-div">
                    <div>&copy; 2023 Head Digital Works Private Limited.</div>      
                </div>

                <div className="footer-links text-center">
                    <ul className="flex items-center justify-between mx-auto mycontainer">
                        <li>
                            <Link href="disclaimer.html">
                                Disclaimer
                            </Link>
                        </li>
                        <li><div className="circle-dott"></div></li>
                        <li>
                            <Link href="termsandconditions.html">
                                T & C
                            </Link>
                        </li>
                        <li><div className="circle-dott"></div></li>
                        <li>
                            <Link href="legality.html">
                                Legality
                            </Link>
                        </li>
                        <li><div className="circle-dott"></div></li>
                        <li>
                            <Link href="privacypolicy.html">
                                Privacy Policy
                            </Link>
                        </li>
                        <li><div className="circle-dott"></div></li>
                        <li>
                            <Link href="passwordpolicy.html">
                                Password Policy
                            </Link>
                        </li>
                    </ul>      
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent