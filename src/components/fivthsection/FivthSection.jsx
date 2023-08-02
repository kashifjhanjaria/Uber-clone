
import "./fivthsection.css";
import Heading from "../component/heading/Heading"
import Rider from "../component/rider/Rider";
const fivthsection =[ {
    id:1,
    title:"Download the Driver app",
    pic:"images/Driver-App-logo.webp"
},
{
    id:2,
    title:"Download the Driver app",
    pic:"images/Rider-App-logo.webp"
}
]
const FivthSection = ()=>{
    return(
        <div className="fivthsection">
            <h1> <Heading heading="There’s more to love in the apps" />  </h1>
            <div className="fivth-section-boxes">
                <Rider fivthsection={fivthsection} />
            </div>
        </div>
    )
}
export default FivthSection;