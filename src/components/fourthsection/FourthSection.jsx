import {HiUserGroup} from "react-icons/hi"
import {ImNewspaper} from "react-icons/im"
import {AiOutlineHome} from "react-icons/ai"
import "./fourthsection.css"
import Heading from "../component/heading/Heading"
import Description from "../component/description/Description"
import AdditionalInformation from "../component/additionalinfo/AdditionalInformation"
const FourthSection = ()=>{
    return(
        <div className="fourthsection">
           <div className="fourth-section-box">
            <div className="fourth-section-icon">
                <HiUserGroup/>
             
            </div>
            <h3>   <Heading  heading="About Us"  /></h3>
            <p><Description description="Find out how we started, what drives us, and how we’re reimagining how the world moves." /></p>
            <AdditionalInformation title="Learn more about Uber"/>
           </div>
           <div className="fourth-section-box">
           <div className="fourth-section-icon">
                <ImNewspaper/>
               
            </div>
            <h3>   <Heading  heading="Newsroom"  /></h3>
            <p><Description description="See announcements about our latest releases, initiatives, and partnerships." /></p>
          <AdditionalInformation title="Go to Newsroom"/>
           </div>
           <div className="fourth-section-box">
           <div className="fourth-section-icon">
                <AiOutlineHome/>
            </div>
            <h3>   <Heading  heading="Global citizenship"  /></h3>
            <p><Description description="Read about our commitment to making a positive impact in the cities we serve." /></p>
            <AdditionalInformation title="See our partnerships"/>
            
           </div>
        </div>
    )
}
export default FourthSection;