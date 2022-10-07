import './App.css';
import React from 'react';
import * as L from "leaflet";
import data from './roorkee.js'
import Leftsidebar from './components/Leftsidebar/Leftsidebar';
import Graph from './components/Rightside/Graph';
import { useState,useEffect } from 'react';
import Loading from './components/Loading/Loading';

function App(){
  const [loading, setLoading]=useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);
 setTimeout(()=>{ 
  var map1 = L.DomUtil.get('map'); if(map1 != null){ map1._leaflet_id = null; }
 
  var map = L.map('map').setView([29.8665,77.9060], 13);
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
    if (layer.feature.properties && layer.feature.properties.Name) {
      
      layer.bindPopup(layer.feature.properties.Name);
    }
  }
},2000)
  return (
    <>
     {loading ? (<Loading/>) :
   ( <div className="body">
      <div className="leftsidebar"><Leftsidebar/></div>
      <div className="rightsidebar">
      <div className='map' id="map">
      
    </div>
    <Graph/>
    </div>
    </div>
   )
}
    </>
  );
}

export default (App);
