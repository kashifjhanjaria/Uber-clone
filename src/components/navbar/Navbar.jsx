import {TiArrowSortedDown} from "react-icons/ti"
import {MdLanguage} from "react-icons/md"
import {TfiLayoutGrid4} from 'react-icons/tfi'
import "./navbar.css"
import { useState } from "react"
const Navbar = ()=>{
    const[opencompanymenu , setOpenCompanyMenu] = useState(false);

    const openCompanyMenuHandle = ()=>{
        setOpenCompanyMenu(!opencompanymenu);
    }
    return (
        <>
        <div className="navbar" >
            <div className="l-nav b-g">
                <a href="" className="logo" >Uber</a>
                <div className="nav">
                    <ul>
                        <li className="dropdown" onClick={openCompanyMenuHandle} >Company 
                        <span className="dropdownicon"><TiArrowSortedDown/></span></li>
                        <li>Safety</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className="r-nav ">
                <ul>
                    <li className="language"><span> <MdLanguage/> </span> <span>EN</span> </li>
                    <li className="products"><span><TfiLayoutGrid4/></span> <span>Products</span> </li>
                    <li>Login</li>
                    <li className="sign-up">Sign up</li>
                </ul>
            </div>

            
       {opencompanymenu
        ? <div className="companymenu" style={{height:"400px"}}>lllccccc</div>  :null
       }
        </div>
        </>
    )
}

  
    export default Navbar;