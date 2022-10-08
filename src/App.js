import './App.css';
import React, { useContext } from 'react';
import * as L from "leaflet";
import data from './roorkeeData.js'
import Leftsidebar from './components/LeftSideBar/LeftSideBar';
import RightSideBar from './components/RightSideBar/RightSideBar';
import { useState,useEffect } from 'react';
import Loading from './components/Loading/Loading';
import dataContext from './datacontext';
import Popup from './components/Popup/Popup';
function App(){
  const {param,setParam,pop,setPop,setLeftDet}=useContext(dataContext)
  const [loading, setLoading]=useState(false);

  const style1={
    display:'none'
  }
  const style2={
    display:'block'
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  
 setTimeout(()=>{ 
  var map1 = L.DomUtil.get('map'); if(map1 != null){ map1._leaflet_id = null; }
 
  var map = L.map('map').setView([29.8665,77.9060], 14);
  var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
  }).addTo(map);
  
  // osm.addTo(map);
  var datas = L.geoJSON(data,{
    onEachFeature:onEachFeature
  }).addTo(map);
  function onEachFeature(features, layer) {
    // does this feature have a property named popupContent?
    layer.on('click',(e)=>{
     setParam(e.target.feature.properties.id)
     setLeftDet(e.target.feature.properties)
      
    })
  }
},2000)
  return (
    <>
     {loading ? (<Loading/>) :
   ( <div className="body">
      <div className="leftsidebar"><Leftsidebar/></div>
      <div className="rightsidebar">
      <div style={pop ? style1 :style2} className='map' id="map">
      
    </div>
    {pop ? <Popup/> :  <RightSideBar/>}
   
    </div>
    </div>
   )
}
    </>
  );
}

export default (App);