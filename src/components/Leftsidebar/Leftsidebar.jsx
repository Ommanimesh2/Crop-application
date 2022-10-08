import React from 'react'
import './Leftsidebar.css'
import { useState } from 'react';
import img from "./logo_2.svg"
import Popup from '../Popup/Popup';
import { VscMenu } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import Hamburger from './Hamburger';
export default function Leftsidebar() {
  const [popup, setPopup]=useState(false);
  const [sideopen, setSideopen]=useState(false);
const openPopup= ()=>{
       setPopup(true);
      
}
const sidemenu=()=>{
     setSideopen(!sideopen);
}
  return (
   <>
   {sideopen ?
   <>
 <div className="logo-container">
    <img src={img} alt="" className='logo'/>
   <div className="out-icon"><VscChevronLeft className='icon-left' onClick={sidemenu} /></div>
     </div>
     <Hamburger/>
    </>:
   
    <div className="container">
      <div className="icon-container"><VscMenu onClick={sidemenu} className='icon'/>
     
      </div>
      <div className="infocontainer">
        < div className="areaField">
          <div className="infos">
           <div className="field">Selected Field :</div> 
           <div className="field">Area :</div> 
           <div className="field">Polygon :</div>
             
          </div>
          </div>
         
          <div className="moreinfo">
            <div className="moredetails">
              {/* add details */}
            </div>
            <button className="info-btn" onClick={openPopup}>More Info</button>
           {popup &&
           <Popup />
           } 
          </div>
          </div>
        <div className="updateInfo">
          Index
          <input type="text" className='textinput' name="index" id="" /> 
          Start Date 
          <input type="date" className='dateinput' name="startdate" id="" />
          End Date 
          <input type="date" className='dateinput' name="enddate" />
          <button className="update-btn">Update</button>
        </div>
    </div>
}
    </>
  )
}
