
const FaqsComponent = (props) => {
    return(
        <section id="faqs" className='faqs sm:faqs-sm md:faqs-md lg:faqs-lg xl:faqs-xl'>
            <div className='footer-top quicklinks'>
                <div className='container'>
                    <div className="section-title flex">
                        <h2 className="section-heading relative underline-class">FAQs</h2>
                    </div>
                    {props.children}    {/* Faqs */}
                </div>
            </div>
        </section>
    )
}

export default FaqsComponent