import React from 'react'
import { useData } from '../userContext/dataContext'

function Navbar() {
  const {data, enroll} = useData() ;

  return (
    <div>
      <h2>Skillnest - Online Learning Platform</h2>
      <h3>{`Welcome ${data.name} ....`}</h3>
      <h3>{`program : ${data.program}`}</h3>
      <h4>{`enrolled : ${enroll}`}</h4><br/>
    </div>
  )
}

export default Navbar
