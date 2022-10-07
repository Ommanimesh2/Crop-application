import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react';
import * as L from "leaflet";
import addmap_data from './action';
import Leftsidebar from './components/Leftsidebar/Leftsidebar';
import action from "./action.js"
import data from "./roorkee.js"
function App() {
  // const [mapdata,setMapdata]=useState([])
 
  const dispatch=useDispatch();
  // const actions=bindActionCreators(action,dispatch)
  
  
 setTimeout(()=>{ 
  var map1 = L.DomUtil.get('map'); if(map1 != null){ map1._leaflet_id = null; }
 
  var map = L.map('map').setView([29.8543,77.8880], 13);
  var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
  }).addTo(map);
  
  // osm.addTo(map);
  var datas = L.geoJSON(data,{
    onEachFeature:onEachFeature
  }).addTo(map);
  // setMapdata(datas);
  function onEachFeature(features, layer) {
    // does this feature have a property named popupContent?

      console.log(layer.feature.properties.Name)
      layer.on('click',(e)=>{
        console.log(e.target.feature)
        dispatch(addmap_data(e.target.feature))
      })
    
    }

  
},2000)
  return (
    <>
    <div className="body">
      <div className="leftsidebar"><Leftsidebar/></div>
      <div className='map' id="map">
    
    </div>
    </div>
   
    </>
  );
}

export default (App);
