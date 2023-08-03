import {TiArrowSortedDown} from "react-icons/ti"
import {MdLanguage} from "react-icons/md"
import {TfiLayoutGrid4} from 'react-icons/tfi'
import {ImCross} from "react-icons/im"
import "./navbar.css"

import { useRef, useState } from "react"
import {NavLink} from "react-router-dom"
import NavbarDropdown from "./NavbarDropdown"
const Navbar = ()=>{
    const[opencompanymenu , setOpenCompanyMenu] = useState(false);
    const [lang , setLang] = useState(false);
   


    const openCompanyMenuHandle = (e)=>{
        setOpenCompanyMenu(!opencompanymenu);
       
        

    }

    const language = ()=>{
        setLang(!lang)
        console.log(lang);
        console.log('language');
    }
    const closelangcontainer = ()=>{
        setLang(!lang)
    }
    return (
        <>
        <div className="navbar" >
            <div className="l-nav ">
                <NavLink to="" className="logo" >Uber</NavLink>
                <div className="nav">
                    <ul>
                        <li className="dropdown" onClick={openCompanyMenuHandle} >Company 
                        <span className="dropdownicon">{opencompanymenu?<TiArrowSortedDown style={{transform:"rotate(180deg)"}} />:<TiArrowSortedDown/>}</span></li>
                        <li>Safety</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="r-nav ">
                <ul>
                    <li className="language" onClick={language} ><span> <MdLanguage/> </span> <span>EN</span> </li>
                    <li className="products"><span><TfiLayoutGrid4/></span> <span>Products</span> </li>
                    <li>Login</li>
                    <li className="sign-up">Sign up</li>
                </ul>
            </div>

            
       {opencompanymenu
        ? <NavbarDropdown/>  :null
       }



       {lang ? <div className="languageContainer" style={{height:'calc(100vh - 58px)', zIndex:"99999" }}>
        <div className="close" onClick={closelangcontainer}> <div className="closeicon"><ImCross/></div> </div>
        <h1 className="selectyour" >Select your preferred language</h1>
        <div className="selectedbtn">
            <div className="langen lang langselected">English</div>
            <div className="langur lang">اردو</div>
        </div>
       </div>: null}
        </div>
        </>
    )
}

  
    export default Navbar;