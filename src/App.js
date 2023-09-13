import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Rowpost from './Components/Rowpost/Rowpost'
import {action,originals,horrorMovies } from "./constants/url";

function App() {
  return (
    <div>
    <Navbar/>  
    <Banner/>
    <Rowpost url={originals }title="Originals"isSmall={false}/>
    <Rowpost url={action}title="Actions" isSmall={true}/>
    <Rowpost url={horrorMovies}title="Horror" isSmall={true}/>
    </div>
  )
}

export default App
