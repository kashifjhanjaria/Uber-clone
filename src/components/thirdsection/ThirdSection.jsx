import AdditionalInformation from "../component/additionalinfo/AdditionalInformation";
import Heading from "../component/heading/Heading"
import Description from "../component/description/Description";
import "./thirdsection.css"
const ThirdSection = ()=>{
    return(
        <section className="thirdsection" >
            <div className="third-section">
                <div className="third-section-heading">
                <h1><Heading heading="Focused on safety, wherever you go"/></h1>
                </div>
               <div className="third-section-infomation">
               <div className="third-section-left-side boxes">
                <img src="images/Safety_Home_Img2x.webp" alt="" />
               <h4> <Heading heading="Our commitment to your safety" /></h4>
               <p> <Description description="With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users."/> </p>
               <div className="additionalinformation">
               <AdditionalInformation title="Read about our Community Guidelines"/>
               <AdditionalInformation title="See all safety features"/>
               </div>
               </div>
                <div className="third-section-right-side boxes">
             
                <img src="images/Cities_Home_Img2x.webp" alt="" />
               <h4> <Heading heading="Setting 10,000+ cities in motion" /></h4>
               <p> <Description description="The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home."/> </p>
               <div className="additionalinformation">
               <AdditionalInformation title="View all cities"/>
               
               </div>
                </div>
               </div>
              
            </div>
            
        </section>
    )
}
export default ThirdSection;