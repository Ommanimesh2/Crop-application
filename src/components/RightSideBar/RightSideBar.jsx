import React from 'react'
import "./rightsidebar.css"
import { useState } from 'react'
import dataContext from '../../datacontext';

import space from './space.mp4'
import { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import img from './log.svg'

import { Bar, Line } from 'react-chartjs-2';
import { SwapHorizontalIcon } from 'evergreen-ui';
export default function RightSideBar() {
    const {ndvi,setNdvi,dates,yAxis,setYAxis,start,end,setSpecDetails,satellite,param,setDates,showGraphData,setShowGraphData}=useContext(dataContext)
    const [cvar,setVar]=useState('')
    const [selectIndex,setSelectIndex]=useState('')
    ChartJS.register(
      
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
      const options = {
        responsive: true,
        scales: {
            x: {
              
              title: {
                display:true,
                text:"Dates Taken",
                font: {
                    size: 21,
                    //   weight: "bold"
                },
                color: 'white'
            },
            
            ticks: {
                font: {
                    size: 10,
                  weight: "bold"
                },
                color: 'white',
            },
        },
        
        y: {
            title: {
                display:true,
                text:`${yAxis}`,
                font: {
                    size: 21,
                //   weight: "bold"
                },
                color: 'white'
              },
      
              ticks: {
                beginAtZero: true,
                font: {
                  size: 12,
                  weight: "bold"
                },
                color: 'white'
              }
            }
          },
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 23,
                        weight: "bold"
                    }
                }
            }
        }
    }
    const getModisNdvi = async () => {
      console.log(start, end)
     
  
  
    }

    const specificDetails = async () => {
      const spData = await fetch(`https://new-ndvi-default-rtdb.firebaseio.com/${param}.json`)
      const response = await spData.json()
      setSpecDetails(response)
    }
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
          console.log(comp);
          if (comp > sDate && comp < eDate) {
  
            dates1.push(keyarr);
            ndvi1.push(obj[keys[i]]);
          }
        }
  
  
      };
      for(let i = 0; i < dates1.length-1; i++) {
           for(let j = 0; j < dates1.length-i-1; j++) {
            var temp1=new Date(dates1[j])
            var temp2=new Date(dates1[j+1])
            var temp3;
            if(temp1>temp2){
              temp3=temp1
              temp1=temp2
              temp2=temp3
            }
           }
      }
      setNdvi(ndvi1)
      setDates(dates1)
      console.log(ndvi);
      console.log(dates);
  
    };
    const handleModis=async ()=>{
      if (start != "" && end != "") {
        
        const data = await fetch(`https://ee-my-omm-default-rtdb.firebaseio.com/${param}.json`)
        const resp = await data.json();
        console.log(resp);
        splitKeyValue(resp)
        setYAxis('NDVI VALUES')
      } else {
  
        alert("Please select a date Boundary")
      }
    }
    const handleSentinel=async ()=>{
      console.log(selectIndex);
        if(selectIndex=='EVI'){
          const inData=await fetch(`https://stable-glass-363410-default-rtdb.firebaseio.com/${param}.json`)
          const resp=await inData.json()
          splitKeyValue(resp)
          
          setYAxis('EVI VALUES')
        }
        else if(selectIndex=='NDVI'){
          const inData=await fetch(`https://test-c1701-default-rtdb.firebaseio.com/${param}.json`)
          const resp=await inData.json()
          splitKeyValue(resp)
          setYAxis('NDVI VALUES')
          
          
        }
        else if(selectIndex=='NDRE'){
          
          // splitKeyValue(resp)
        }
        else if(selectIndex=='GNDVI'){
          
          // splitKeyValue(resp)
        }



    }
      const datad={
        labels:dates,
        datasets: [
          {
            label: 'NDVI',
            data: ndvi,
            borderColor: 'green',
            backgroundColor: 'red',
          }
        ]
    
      }
  return (
    <div className='graph-logo'>
{satellite=='SENTINEL-1' ? <div className="ig">
              <select name="index-select" onChange={(e) => setSelectIndex(e.target.value)}
        defaultValue={selectIndex}  className='index-select' id="dropdown" placeholder='Select Index'>
                <option className='select-options' value="" disabled selected hidden>Select Index </option>
                <option className='select-options' value="NDVI">NDVI</option>
                <option className='select-options' value="EVI">EVI</option>
                <option className='select-options' value="NDRE">NDRE</option>
                <option className='select-options' value="GNDVI">GNDVI</option>
              </select>
              <select name="Climate-variables" onChange={(e)=>setVar(e.target.value)} id="">
                <option className='select-options' value="" disabled selected hidden>Select Variable </option>
                <option className='select-options' value="Temperature">Temperature</option>
                <option className='select-options' value="Precipitaion">Precipitation</option>
              </select>
             <button onClick={handleSentinel}>Plot</button>
</div>: satellite=='MODIS'?<div className="ig">
              <select name="index-select" onChange={(e) => setSelectIndex(e.target.value)}
        defaultValue={selectIndex}  className='index-select' id="dropdown" placeholder='Select Index'>
                <option className='select-options' value="" disabled selected hidden>Select Index </option>
                <option className='select-options' value="NDVI">NDVI</option>
 
              </select>
              <select name="Climate-variables" onChange={(e)=>setVar(e.target.value)} id="">
                <option className='select-options' value="" disabled selected hidden>Select Variable </option>
                <option className='select-options' value="Temperature">Temperature</option>
                <option className='select-options' value="Precipitaion">Precipitation</option>
              </select>
             <button onClick={handleModis}>Plot</button>
</div> :<div className='nodata'><p>Select the Crop Field and the time series for data analysis</p></div>}

      {ndvi.length>2 
      ? 
    <div className='graphcontainer'>
      <Line style={{height:"200px",width:"1200px"}} options={options} data={datad} />
      
    </div>
      :
      <> </>}
      
    </div>
  )
}