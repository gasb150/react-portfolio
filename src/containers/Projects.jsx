
import { useState } from 'react'
import portfolio from '../api/portfolio'
import Project from '../components/Project'


const Projects = () => {
  const [projects, setProjects] = useState([])
 

   
 
  const onLoaded = async (data) => {
    const response = await portfolio.get('/proyects.json')

    
    
    setProjects(response.data[0])
    return response
  }
  onLoaded().then(data=>{
    console.log(projects)
    console.log(data)
  })
 
  return (

  <Project projects={projects} title={'Game style'}/>
)}

export default Projects