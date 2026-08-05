import React, { useEffect, useState } from 'react'
import StudentProfile from './StudentProfile'
import { useData } from '../userContext/dataContext'

// function CourseList({data}) {
//   return (
//     <div>
//       <StudentProfile data={data}/>
//     </div>
//   )
// }

function CourseList() {
  const {enroll, setEnroll, setUpdate, update} = useData() ;
  const [isDisable, setIsDisable] = useState(false) ;

  const [courses, setCourses] = useState([
    {
      program : "React Basics" ,
      cost : 999 ,
      message : "enroll" ,
      isEnrolled : false
    },
    {
      program : "Node.js" ,
      cost : 1299 ,
      message : "enroll" ,
      isEnrolled : false
    },
    {
      program : "UI/UX design" ,
      cost : 799 ,
      message : "enroll" ,
      isEnrolled : false
    },
  ])

  useEffect(() => {
      if(enroll==0) return ;
      setUpdate(` Enrollment updated : ${enroll}`)

      const timer = setTimeout(() => {
          setUpdate("") ;
      }, 2000) ;

      return () => clearTimeout(timer) ;
  }, [enroll])

  
  const canClick = (clickedCourse) => {
      if(clickedCourse.isEnrolled == false){
        setEnroll(enroll + 1) ;

        setCourses(prevCourses => 
          prevCourses.map(course => 
            course.program === clickedCourse.program ?
            {
              ...course ,
              isEnrolled: true,
              message: "Enrolled"
            } : course
          )
        ) ;
      }


  }
  return (
    <div>
      
        {
          courses.map((course, index) => (
            <div key={index}>
                <h3 > {course.program} </h3>
                <button 
                    onClick={() => canClick(course)}
                    disabled= {course.isEnrolled}
                  >
                    {course.message}
                  </button>
            </div>
          ))
        }<br/><br/>
        <StudentProfile /><br/>
        <h4>{update}</h4>

      
    </div>
  )
}

export default CourseList
