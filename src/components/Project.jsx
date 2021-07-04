import React from 'react'

const Project = ({title, projects}) => {
  console.log(projects)
  projects.each((k,v)=>{
   console.log(k)
  })
  
 
  return(
    <>
  <div>Project here:{title}</div>
  
  </>
)}

export default Project