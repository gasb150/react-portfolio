import React from 'react'
import SocialMedia from '../components/SocialMedia'

const SocialContent = ({bg}) => {
  return(
  <>
  <div className="d-flex justify-content-between">
    <SocialMedia url="https://github.com/gasb150" icon='github' bg={bg}/>
    <SocialMedia url="https://twitter.com/7aves" icon='twitter' bg={bg} />
    <SocialMedia url="" icon='linkedin' bg={bg}/>
    </div>
  </>
  )
}

export default SocialContent