import React from 'react'

const Project = ({ project }) => {
  

 const {images, name} = project

const alt = `image_${name}`

  return (
    <>

      <div>Project Name: {name}</div>
      {console.log(images)}
      <div>llll {images.length}</div>
      <div><img src={images[0]} alt={alt} /></div>
      <div><img src={images[1]} alt={alt} /></div>
      <div><img src={images[2]} alt={alt} /></div>
      <div><img src={images[3]} alt={alt} /></div>
      <div><img src={images[4]} alt={alt} /></div>

    </>
  )
}

export default Project