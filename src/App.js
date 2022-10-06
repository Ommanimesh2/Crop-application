import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import * as L from "leaflet";
import SampleComponent  from './SampleComponent'
import {addmap_data} from './action'
import data from './roorkee.js'
import Leftsidebar from './components/Leftsidebar/Leftsidebar';
import { useState } from 'react';

function App({addmap_data,data}) {
  const [mapdata,setMapdata]=useState([])

  const myState = useSelector((state)=> state.addmap_data)
  
  
  
  
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
  setMapdata(datas);
  function onEachFeature(features, layer) {
    // does this feature have a property named popupContent?
    if (layer.feature.properties && layer.feature.properties.Name) {
      
      layer.bindPopup(layer.feature.properties.Name);
    }
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
