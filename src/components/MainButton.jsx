import React from 'react'
import '../Styles/MainButton.css'
const MainButton = ({ url, msj, icon, dowmload, classValue }) => {
  console.log(dowmload)
  if (typeof dowmload === 'undefined') {

    return (
      <a href={url}  className={classValue} >{msj}{icon}</a>
    )
  } else {
    return (
      <a href={url} dowmload={dowmload} className={classValue}>{msj}{icon}</a>
    )
  }
}

export default MainButton