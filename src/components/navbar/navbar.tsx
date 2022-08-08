import React from 'react'

import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'
import useMobileState from '@hooks/use-mobile-state'

const Navbar: React.FC = () => {
  const isMobile = useMobileState()
  return (
    <>
      <DesktopNav hidden={isMobile} />
      <MobileNav hidden={!isMobile} />
    </>
  )
}

export default Navbar
