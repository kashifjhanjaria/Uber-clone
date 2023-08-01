import Hero from "../herosection/Hero";
import SecondSection from "../secondsection/SecondSection";
import "./home.css"

const Home = ()=>{
    return (
        <div className="home">
            <Hero/>
            <SecondSection/>
        </div>
    )
}

export default Home;