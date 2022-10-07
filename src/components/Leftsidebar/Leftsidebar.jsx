import React from 'react'
import './Leftsidebar.css'
import { useSelector } from 'react-redux'


export default function Leftsidebar() {
  const myState=useSelector((state)=>state.changeMapData)
  return (

 
    <div className="container">
      <div className="infocontainer">
        < div className="areaField">
          <div className="img"></div>
          <div className="infos">
           <div className="field">{myState.Name}</div> 
           <div className="field">Area</div> 
           <div className="field">{myState.geometry.cocoordinates.join("\n")}</div>
             
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
