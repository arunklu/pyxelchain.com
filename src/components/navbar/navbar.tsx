import React from 'react'

import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'

const Navbar: React.FC = () => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  )
}

export default Navbar
