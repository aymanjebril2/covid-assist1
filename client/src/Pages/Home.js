import React from 'react'
import "./Home.css"
import CovidT from '../components/CovidT/CovidT'

const Home = () => {
    return (
      <div className="main_home">
        <div className="home_div">
          <div className="slogen_home">
          <h1 className>Helping New Yorker</h1> 
          <h1 className="logo_home"><span>COVID-</span>ASSIST</h1>   
          </div>
          
        </div>
        <CovidT/>
        </div>
    )
}

export default Home
