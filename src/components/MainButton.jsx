import React from 'react'
import '../Styles/MainButton.css'
const MainButton = ({ url, msj, icon, dowmload, classValue }) => {

  if (typeof dowmload === 'undefined') {

    return (
      <a href={url}  className='btn btn-dark p-4 w-100  ' >{msj}{icon}</a>
    )
  } else {
    return (
      <a href={url} dowmload={dowmload} className='btn btn-dark'>{msj}{icon}</a>
    )
  }
}

export default MainButton