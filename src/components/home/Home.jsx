
import FivthSection from "../fivthsection/FivthSection";
import FourthSection from "../fourthsection/FourthSection";
import Hero from "../herosection/Hero";
import SecondSection from "../secondsection/SecondSection";
import SixthSection from "../sixthsection/SixthSection";
import ThirdSection from "../thirdsection/ThirdSection";
import "./home.css"

const Home = ()=>{
    return (
        <div className="home">
            <Hero/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FivthSection/>
            <SixthSection/>
        </div>
    )
}

export default Home;