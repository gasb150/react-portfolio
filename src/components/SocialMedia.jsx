import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = ({ url, icon, bg }) => (
  <>
    <a href={url} target="_blank" rel="noreferrer noopener" className={`text-${bg} h2`}>
      <FontAwesomeIcon icon={['fab', icon]} />
    </a>


  </>
)

export default SocialMedia