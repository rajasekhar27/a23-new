import './Css/about.css'

const About = ({header,platformapp}) => {
    return(
        <div>
           { 
            header && 
           <div style={{background:'#032146',color:'white',padding:'10px 0',position:'relative'}}>
                 {platformapp && <img src='./assets/images/main-body/about/back_btn_mapp.png' alt='back' height={26} width={26} style={{position:'absolute',zIndex:10}}/>}
                <h1 style={{textAlign:'center',fontWeight:600 ,fontSize:'17px'}}>About Us</h1>
            </div>
            }
            <div style={{padding:'30px 80px'}}>
            <div>
                <h2 className="about-title">The Company</h2>
                <p className="about-description" ><b>A23</b> is India's Leading Online Rummy Portal completely Owned and Operated by <b>Head Digital Works Private Limited.</b> We are proud to be the first ever website to launch the classical Indian Rummy. A23 is on a mission to promote Rummy as a professional game and create a community of skilled gamers.</p>
                <p className="about-description">Rummy is a game of skill as opposed to games of chance. It is absolutely legal to play rummy as it involves skill to win. Playing rummy online is also legal in India.</p>
                <p className="about-description">We at A23 understand the needs of online gaming in India and strive to provide better and faster results through our software. Our software is built on a custom built architecture to be robust in operating Multi-Player Tables and Online Tournaments.</p>
            </div>

            <div>
                <h2 className="about-title">The Team</h2>
                <p className="about-description">The management team has 10+ years of pioneering experience in Web 2.0 space, Application Development, Infrastructure 
                    Management and Quality Assurance. The main characteristic of the team is commitment to corporate strategy, effective planning
                    and a vision to build an innovative and profitable business. The members of the team bring in 
                    expertise from Online Gaming, Engineering and Marketing Domains to build an indigenous product.</p>
                <p className="about-description">The team of young entrepreneurs has previous experience in working for one of the world's largest 
                    gaming company and has handled large datacenters in various organizations. </p>
            </div>
            <div className="about-company">
                <p className="about-title"><strong>Know more about company policies:</strong></p>
                <ul>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Fair Play Policy</span></li>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Privacy Policy</span></li>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Password Policy</span></li>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Disclaimer Policy</span></li>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Terms & Conditions</span></li>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Security</span></li>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Legality</span></li>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Certification</span></li>
                    <li className="know-more-li"><span style={{paddingLeft:'10px'}}>Contact Us</span></li>

                </ul>
            </div>
            </div>
        </div>
    )
}

export default About