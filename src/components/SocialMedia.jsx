import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = ({url, icon})=>(
  <>
  <a href={url} target="_blank" rel="noreferrer noopener">
    
  </a>
 
  <FontAwesomeIcon icon={['fab', icon]} />
  </>
)

export default SocialMedia