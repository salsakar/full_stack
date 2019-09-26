import React from 'react';

const Courses = ({courses})=>{ 
  //console.log(courses[0].parts[0].id)
  return(
    <div>
      {courses.map(course=>(
        <Course key={course.parts.id} course={course}/>
      ))}
    </div>
  )} 
const Course = ({course}) => {
  
      let total = course.parts.reduce((sum, {exercises}) => sum + exercises, 0)
      //console.log(total)
    return ( 
          <>
           <h2> {course.name} </h2>
            {course.parts.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)}
           { <b> Total of {total} exercises</b>}
           <p> </p>
          </>
    )
  }
export default Courses