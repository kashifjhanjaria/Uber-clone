import AdditionalInformation from "../component/additionalinfo/AdditionalInformation";
import Description from "../component/description/Description";
import Heading from "../component/heading/Heading";
import "./hero.css";
import {NavLink} from "react-router-dom"
const Hero = ()=>{
    return(
        <section className="hero">
           <img src="images/hero.webp" alt="" />
           <div className="informationcontainer">
            <div className="hero-section-topicons">
                <div className="hero-icons">
                    <NavLink to="">
                    <div className="hero-icon-1">
                    <div className="icon-img">
                    <img src="images/Earn-filled.svg" alt="" />
                    </div>
                     <p>Drive or <br/> deliver</p>
                    
                    </div>
                    </NavLink>
                    <NavLink to="">
                    <div className="hero-icon-1">
                    <div className="icon-img">
                     <img src="images/restaurant-outlined.svg" alt="" />
                     </div>
                     <p>Eat</p>
                  
                    </div>
                    </NavLink>
                    <NavLink to="">
                    <div className="hero-icon-1">
                    <div className="icon-img">
                     <img src="images/car-front-outlined.svg" alt="" />
                     </div>
                     <p>Ride</p>
                     
                    </div>
                    </NavLink>
                </div>
            </div>
            <div className="hero-section-description">
            <h1><Heading heading="Get in the driver’s seat and get paid" /></h1>
            <p><Description description="Drive on the platform with the largest network of active riders." /></p>
            <div className="hero-section-btn">
            <button>Sign up to drive</button>
            </div>
            <AdditionalInformation title="Learn more about driving and delivering"/>
            </div>
           </div>
        </section>
    )
}
export default Hero;