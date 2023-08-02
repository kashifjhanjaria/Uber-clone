
import FooterLinks from "./FooterLinks";
import FooterLinksGlobalCitizen from "./FooterLinksGlobalCitizen";
import FooterLinksProduct from "./FooterLinksProduct";
import FooterLinksTravel from "./FooterLinksTravel";
import {AiFillFacebook , AiFillLinkedin , AiFillYoutube} from "react-icons/ai"
import {AiOutlineInstagram ,AiOutlineTwitter} from "react-icons/ai"
import "./footer.css";
const menucompany={

  
    linkscompany:[
        {id:1 , link:"About us"},
        {id:2 ,link:"Our offerings"},
        {id:3 ,link:"Newsroom"},
        {id:4 ,link:"Investors"},
        {id:5 ,link:"Blog"},
        {id:6 ,link:"Careers"},
        {id:7 ,link:"AI"},
        {id:8 ,link:"Gift cards"},
        

        
    ],
    linkproduct:[
        {id:1 , link:"Ride"},
        {id:2 ,link:"Drive"},
        {id:3 ,link:"Eat"},
        {id:4 ,link:"Uber for Business"},
        {id:5 ,link:"Uber Freight"},
       
  
    ],
    linkglobalcitizen:[
        {id:1 , link:"Safety"},
        {id:2 ,link:"Diversity and Inclusion"},
        


    ],
    linktravel:[
        {id:1 , link:"Airports"},
        {id:2 ,link:"Cities"},
        




    ]


}

const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <a href=""><h3>Uber</h3></a>
            </div>
            <div className="footer-visit-help">
                <h5>Visit Help Center</h5>
            </div>
            <div className="footer-links">
               <FooterLinks   title="Company" menucompany={menucompany} />
                <FooterLinksProduct title="Product" menucompany={menucompany}/>
              <FooterLinksGlobalCitizen title="Global citizenship" menucompany={menucompany}/>
               <FooterLinksTravel title="Travel" menucompany={menucompany}/>
            </div>
          <div className="footer-social-link">
       <div className="social-icons">
       <span><AiFillFacebook/></span>
       <span><AiOutlineInstagram/></span>
       <span><AiOutlineTwitter/></span>
       <span><AiFillLinkedin/></span>
       <span><AiFillYoutube/></span>
       </div>
          </div>
          <div className="mobile-store">
           <div className="store-img">
           <img src="images/app-store-apple-f1f919205b.svg" alt="" />
           </div>
           <div className="store-img">
            <img src="images/app-store-google-4d63c31a3e.svg" alt="" />
            </div>
          </div>
          <div className="company-rights">
            <div className="company-name">
            © 2023 Uber Technologies Inc.
            </div>
            <div className="company-rights-btns">
                <span>Privacy</span>
                <span>Accessibility</span>
                <span>Terms</span>
            </div>
          </div>
          
        </div>
    )
}
export default Footer;