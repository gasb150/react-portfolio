
import { useEffect, useState } from 'react'
import portfolio from '../api/portfolio'
import Project from '../components/Project'


const Projects = () => {
  const [projects, setProjects] = useState([])


  const onLoaded = async (data) => {
    const response = await portfolio.get('/proyects.json')


    setProjects(response.data)
  }

  useEffect(() => {
    onLoaded()
  }, [])

  return (
    <>
  {console.log((projects))}
        {projects.map(p=> 
          <Project key={p.id} project={p} />
        )}
       
      
  
      
    </>
  )
}

export default Projects