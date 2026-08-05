import React from 'react'
import useUser from '../customHooks/useUser'
// import { useData } from '../userContext/dataContext'

function StudentProfile() {
  // const { data } = useData() ;
  const data = useUser() ;

  return (
    <div>
      
      <h2>{`name : ${data.name}`}</h2>
      <h2>{`email : ${data.email}`}</h2>
      <h2>{`program : ${data.program}`}</h2><br/>
    </div>
  )
}

export default StudentProfile
