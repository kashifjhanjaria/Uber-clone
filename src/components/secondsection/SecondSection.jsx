
import Heading from "../component/heading/Heading";
import Description from "../component/description/Description";
import "./secondsection.css"
const SecondSection = ()=>{
    return(
        <section className="secondsection" >
            <img src="images/secondsection.webp" alt="" />
            <div className="second-section-text">
                <div className="second-section-heading">
                    <h1><Heading heading="The Uber you know, reimagined for business"/></h1>
                </div>
                <div className="second-section-description">
                <Description description="A platform for managing global rides and meals, and local deliveries, for companies of any size."/>
                </div>
                <div className="second-section-btn">
                    <button>Get Started</button>
                </div>
            </div>
        </section>
    )
}
export default SecondSection;