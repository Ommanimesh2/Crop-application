import React from 'react'
import './Leftsidebar.css'

export default function Leftsidebar() {
  return (
    <div className="container">
      <div className="infocontainer">
        < div className="areaField">
          <div className="img"></div>
          <div className="infos">
           <div className="field">Selected Field</div> 
           <div className="field">Area</div> 
           <div className="field">Coordinates</div>
             
          </div>
          </div>
         
          <div className="moreinfo">
           <button className="info-btn">More Info</button>
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
