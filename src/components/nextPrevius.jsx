import React from 'react'
import { Icon } from '@iconify/react';

const nextPrevius = ({ target, txt }) => {
  if (txt === 'Next') {
    return (
      <button className="btn btn-light" data-bs-target={target} data-bs-toggle="modal" data-bs-dismiss="modal" >{txt} <Icon icon="mdi-light:arrow-right" /></button>

    )
  } else {
    return(
    <button className="btn btn-light" data-bs-target={target} data-bs-toggle="modal" data-bs-dismiss="modal" ><Icon icon="mdi-light:arrow-left" />{txt} </button>
    )
  }
}

export default nextPrevius