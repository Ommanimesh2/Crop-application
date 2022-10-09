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
export default function RightSideBar() {
    const {ndvi,setNdvi,dates,setDates}=useContext(dataContext)
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
                text:"NDVI VALUES",
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
{ndvi.length>2 ? <div className="ig">
    <img src="https://media3.giphy.com/media/TdozTm8E8x6eWaVs6N/giphy.gif?cid=82a1493bv6p4e9na0umlaub5rjpuzn3yk6g29c473chtqw2j&rid=giphy.gif&ct=s" alt="" srcset="" />
      <p>SATELLITE : MODIS</p>
</div>:<div className='nodata'><p>Select the Crop Field and the time series for data analysis</p></div>}

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