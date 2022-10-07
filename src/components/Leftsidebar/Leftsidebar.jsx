import React from 'react'
import './Leftsidebar.css'
import Popup from 'reactjs-popup';

export default function Leftsidebar() {
  return (
    <div className="container">
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
            <Popup trigger={<button className="info-btn">More Info</button>} position="top centre" >
            <div className="popup-container">
            co_ordinates-[ ]
            </div>
          </Popup>
           
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
  )
}
