import React from 'react'

import AboutCompany from './AboutCompany'
import Help from './Help'
import Partners from './Partners'
import Servises from './Servises'

const FooterSidebar = () => {
  return (
    <div className="footer_sidebar_block">
      <AboutCompany />
      <Help />
      <Servises />
      <Partners />
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default FooterSidebar
