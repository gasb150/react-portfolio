import React from 'react'
import SocialContent from './SocilContent'

const Footer = () => (
  <div className="bg-dark">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="row col-lg-12 pt-5 pb-4 px-5">
        <div className="col-lg-4" >
        <a className="navbar-brand" href="/">Get my resume</a>
        </div>
        <div className="offset-md-6 col-md-2">
          <SocialContent bg='light' />
        </div>
      </div>

    </nav>
  </div>
)

export default Footer