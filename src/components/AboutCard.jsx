import React, { useEffect, useState } from 'react'
import portfolio from '../api/portfolio'

const AboutCard = ({ title, background, icon }) => {
  const [elements, setElements] = useState([])



  const onLoad = async (data) => {
    const response = await portfolio.get(`/${title}.json`)
    setElements(response.data)

  }
  useEffect(() => {
    onLoad()
  }, [])

  return (
    <>
      <div className={`bg-${background} col-lg-6 pt-5 pe-0`}>
        <div className="text-uppercase">{title}</div>
        <div>
          {elements.map(element =>
            <>
              {element.name !== 'NA' ?
                <>
                  <li key={element.id}>{element.name}</li>
                </>
                : <></>
              }
            </>
          )}
        </div>
        <div className="d-flex justify-content-end">
          <img src={icon} alt="icon"/>
        </div>
      </div>
    </>



  )
}

export default AboutCard