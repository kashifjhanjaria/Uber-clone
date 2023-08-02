const FooterLinksProduct = ({menucompany, title})=>{
    return (
        <div className="footer-link">
        <h5>{title}</h5>
        <div className="f-link">
            {menucompany.linkproduct.map((item)=>{
                return(
                    <div className="flink" key={item.id} >
                        <a href="">{item.link} </a>
                    </div>
                )
            })}
        </div>
    </div>
    )
}
export default FooterLinksProduct;