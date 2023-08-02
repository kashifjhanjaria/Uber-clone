
import {AiOutlineArrowRight} from "react-icons/ai"
const Rider  = ({fivthsection})=>{
    console.log(fivthsection);
    return(
        <>
       {fivthsection.map((element)=>{
        return(
            <div className="box" key={element.id}>
                <img src={element.pic} alt="" />
                <h3>{element.title}</h3>
                <div className="box-icon">
                    <AiOutlineArrowRight/>
                </div>
            </div>
        )
       })}
        </>
    )
}

export default Rider;