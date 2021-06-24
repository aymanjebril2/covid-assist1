import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import { Line , Bar } from 'react-chartjs-2'
import { fill } from 'lodash'
import {fetchDailyData} from './fetchData'
import './CovidT.css'


const CovidT = () => {
    const [dailyData, setDailyData] = useState({});
    const [postive,setPostive]=useState([])
    const [hospilatized,setHospilatized]=useState([])
    const [recoverd,setRecoverd]=useState([])
    const [deth,setDeth]=useState([])
   

   
useEffect(() => {
const fetchApi = async ()=>{
    setDailyData( await fetchDailyData())
}
fetchApi()
    
}, [])

let lineChart2 =(
    dailyData[0] ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [{
              data: dailyData.map((data) => data.hospitalizedDischarged),
              label: 'Recovered ',
              borderColor: "#2525ff	",
              backgroundColor:"#2525ff",
              fill: true,
       }]
      }}
    />):null
)
console.log(dailyData)

let lineChart=(
    dailyData[0] ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [{
              data: dailyData.map((data) => data.confirmed),
              label: 'Infected',
              borderColor: "#008000	",
              backgroundColor:"#008000",
              fill: true,
       }]
      }}
    />):null
)

let lineChart3=(
    dailyData[0] ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
            datasets: [{
              data: dailyData.map((data) => data.deaths),
              label: 'Deaths',
              borderColor: " #a52a2a",
              backgroundColor:" #a52a2a",
              fill: true,
       }]
      }}
    />):null
)

    
    return (
        <div className="main_chartDiv">
            <h1 className="header_h1"> NY COVID-19  DATA </h1>
            <div className="chart_div1">
       {lineChart}
       </div>
       <div className="chart_div1">
       {lineChart2}
       </div>
       <div className="chart_div1">
       {lineChart3}
       </div>

        </div>
    )
}

export default CovidT
