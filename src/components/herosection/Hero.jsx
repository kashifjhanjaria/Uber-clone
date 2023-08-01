import "./hero.css"
const Hero = ()=>{
    return(
        <section className="hero">
           <img src="images/hero.webp" alt="" />
           <div className="informationcontainer">
            <div className="hero-section-topicons">
                <div className="hero-icons">
                    <a href="">
                    <div className="hero-icon-1">
                    <div className="icon-img">
                    <img src="images/Earn-filled.svg" alt="" />
                    </div>
                     <p>Drive or <br/> deliver</p>
                    
                    </div>
                    </a>
                    <a href="">
                    <div className="hero-icon-1">
                    <div className="icon-img">
                     <img src="images/restaurant-outlined.svg" alt="" />
                     </div>
                     <p>Eat</p>
                  
                    </div>
                    </a>
                    <a href="">
                    <div className="hero-icon-1">
                    <div className="icon-img">
                     <img src="images/car-front-outlined.svg" alt="" />
                     </div>
                     <p>Ride</p>
                     
                    </div>
                    </a>
                </div>
            </div>
            <div className="hero-section-description">
            <h1>Get in the driver’s seat and get paid</h1>
            <p>Drive on the platform with the largest network of active riders.</p>
            <div className="hero-section-btn">
            <button>Sign up to drive</button>
            </div>
            <div className="learn"><p>Learn more about driving and delivering</p>
            <div className="learn-border"></div></div>
            </div>
           </div>
        </section>
    )
}
export default Hero;