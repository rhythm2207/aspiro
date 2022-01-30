import './footer.css'
import Section from './footer-sec/section'
import fb from './fb.svg'
import gram from './1.png'
import circle from './circle.svg'
import google from './Google Play.png'
import play from './Play Store.png'

const Footer = () => {

    return (
        <div>
            <div className="footer">
                <div className="site">
                    <div className="comp">Jadoo.</div>
                    <div className="moto">Book your trip in minute, get full
                        Control for much longer.
                    </div>
                </div>
                <div className="sections">
                    <Section company="Company" l1="About" l2="Careers" l3="Mobile"></Section>
                    <Section company="Contact" l1="About" l2="Careers" l3="Mobile"></Section>
                    <Section company="More" l1="About" l2="Careers" l3="Mobile"></Section>
                </div>
                <div className="links">
                    <div className="social">
                        <img src={fb} alt="" />
                        <img src={gram} alt="" />
                        <img src={circle} alt="" />
                    </div>
                    <div className="para">Discover our app</div>
                    <div className="social">
                        <img src={google} alt="" />
                        <img src={play} alt="" />
                    </div>
                </div>
            </div>
            <div className="foot">All rights reserved@jadoo.co</div>
        </div>


    )
}

export default Footer