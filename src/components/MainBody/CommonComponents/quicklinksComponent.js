
const QuicklinksComponent = (props) => {
    return(
        <section id="quicklinks" className='quick-links sm:quick-links-sm md:quick-links-md lg:quick-links-lg xl:quick-links-xl'>
            <div className='footer-top quicklinks'>
                <div className='container'>
                    <div className="section-title flex ">
                        <h2 className="section-heading relative underline-class">Quick Links</h2>
                    </div>
                    {props.children}    {/* QuickLinks  */}
                </div>
            </div>
        </section>
    )
}

export default QuicklinksComponent