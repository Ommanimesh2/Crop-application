import logo from './logo.svg';
import './App.css';
import * as L from "leaflet";
import * as LeafletGeotiff from "leaflet-geotiff";
import "leaflet-geotiff/leaflet-geotiff-plotty";
import "leaflet-geotiff/leaflet-geotiff-vector-arrows";
import data from './roorkee.js'
function App() {
 setTimeout(()=>{ 
  var map1 = L.DomUtil.get('map'); if(map1 != null){ map1._leaflet_id = null; }
 
  var map = L.map('map').setView([30.0668,79.0193], 10);
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
<div style={{height:"100vh",width:"100vw"}} id="map">
    
</div>
    </>
  );
}

export default App;
