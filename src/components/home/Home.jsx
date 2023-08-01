import Hero from "../herosection/Hero";
import SecondSection from "../secondsection/SecondSection";
import ThirdSection from "../thirdsection/ThirdSection";
import "./home.css"

const Home = ()=>{
    return (
        <div className="home">
            <Hero/>
            <SecondSection/>
            <ThirdSection/>
        </div>
    )
}

export default Home;