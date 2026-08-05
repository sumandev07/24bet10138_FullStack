import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Navbar from '../../OnlineLearningPlatform/src/Components/Navbar'
import Dashboard from '../../OnlineLearningPlatform/src/Components/Dashboard'

import { DataProvider } from './userContext/dataContext';

function App() {
  const data = 
    {
      name : "Karan Mehta" ,
      email : "karan123@gmail.com" ,
      program : "Web development"
    } ;
  
    const [update, setUpdate] = useState("")
  const [enroll, setEnroll] = useState(0) ;

  return (
    <DataProvider value={{data, enroll, setEnroll, update, setUpdate}}>
      <Navbar />
      {/* <Dashboard data={user}/> */}
      <Dashboard />
    </DataProvider>
  )
}

export default App
