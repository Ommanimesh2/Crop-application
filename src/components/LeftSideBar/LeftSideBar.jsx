import React, { useContext } from 'react'
import dataContext from '../../datacontext'
import './leftsidebar.css'
import Hamburger from './Hamburger'
import { useState } from 'react'
import { VscMenu } from "react-icons/vsc";
import { VscChevronLeft } from "react-icons/vsc";
import img from './logo_2.svg'
import Popup from '../Popup/Popup'
const LeftSideBar = () => {
  
  const [sideopen, setSideopen] = useState(false);
  const [data, setData] = useState([])
  const { ndvi, setNdvi,leftDet, dates, setDates, param, setStart, start, end, setEnd,pop,setPop,setSpecDetails,specDetails } = useContext(dataContext)
  const splitKeyValue = obj => {
    const keys = Object.keys(obj);
    console.log("object is " + keys);
    const dates1 = [];
    const ndvi1 = [];
    for (let i = 0; i < keys.length; i++) {
      if (obj[keys[i]] !== "" && keys[i] != 'id' && keys[i] != 'Geometry' && keys[i] != 'Area') {
        const sDate = new Date(start)
        const eDate = new Date(end)
        const keyarr = keys[i].split('-')
        var temp = keyarr[0]
        keyarr[0] = keyarr[1]
        keyarr[1] = temp
        keyarr.join('-')
        const comp = new Date(keyarr)

        if (comp > sDate && comp < eDate) {

          dates1.push(keyarr);
          ndvi1.push(obj[keys[i]]);
        }
      }


    };
    setNdvi(ndvi1)
    setDates(dates1)
    console.log(ndvi);
    console.log(dates);

  };
  const openPopup = () => {
    console.log(specDetails)
    console.log(specDetails.Crop_Name);
    if(specDetails.Crop_Name!=undefined) {
        
      setPop(true);
    }else{
      alert("Please select the required fields")
    }

  }
  const sidemenu = () => {
    setSideopen(!sideopen);
  }
  const getReq = async () => {
    console.log(start, end)
    if (start != "" && end != "") {

      const data = await fetch(`https://ee-my-omm-default-rtdb.firebaseio.com/${param}.json`)
      const resp = await data.json();
      console.log(resp);
      splitKeyValue(resp)
    } else {

      alert("Please select a date Boundary")
    }


  }
  const specificDetails=async ()=>{
    const spData=await fetch(`https://new-ndvi-default-rtdb.firebaseio.com/${param}.json`)
    const response=await spData.json()
    setSpecDetails(response)
  }

  const Check=()=>{
    if(leftDet){
      if(leftDet.Area){
        return leftDet.Area
      }
      else{
        return "Not Available"
      }
    }
    else{
      return "Not Available"
    }
  }
  return (
    <>
      {sideopen ? <>
      
        <div className="logo-container">
          <img src={img} alt="" className='logo' />
          <div className="out-icon"><VscChevronLeft className='icon-left' onClick={sidemenu} /></div>
        </div>
        <Hamburger />
      </> :
         
        <div className="container">

          <div className="icon-container"><VscMenu onClick={sidemenu} className='icon' />

          </div>
          <div className="infocontainer">
            < div className="areaField">
              <div className="infos">
                <div className="field">
                  <div className="title">Area</div>
                  <div className="value">{
                   (leftDet.Area ? leftDet.Area :
                    (
                       leftDet.id && !leftDet.Area ? "Not Available" :"Not Selected"
                    )
                   )
                  
                  }</div>
                </div>
                <div className="field">
                  <div className="title">Id</div>
                  <div className="value">{leftDet.id ? leftDet.id :"Not Selected"}</div>
                </div>

              </div>
            </div>

            <div className="moreinfo">
              <div className="moredetails">
                {/* add details */}
              </div>
              <button className="info-btn" onClick={openPopup}>More Info</button>
             
            </div>
            <div className="updateInfo">

              Start Date
              <input type="date" className='dateinput' min='2001-12-31' max='2010-12-31' onChange={(e) => {
                setStart(e.target.value)
              }} name="startdate" id="" />
              End Date
              <input type="date" className='dateinput' min='2001-12-31' max='2010-12-31' onChange={(e) => setEnd(e.target.value)} name="enddate" />
              <button className="update-btn" onClick={() => {
                getReq()
                specificDetails()
              }}>Update</button>

            </div>
          </div>
        </div>


      }
    </>
  )
}

export default LeftSideBar
