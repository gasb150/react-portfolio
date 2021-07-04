
import { useEffect, useState } from 'react'
import portfolio from '../api/portfolio'
import Project from '../components/Project'


const Projects = () => {
  const [projects, setProjects] = useState([])
 
  useEffect(()=>{
    onLoaded()
  })
  const onLoaded = async (data) => {
    const response = await portfolio.get('/proyects.json')

    

    setProjects(response.data[0].images)
  }
 
  return (

  <Project projects={projects} title={'Game style'}/>
)}

export default Projects