'use client'

import React, { useState } from 'react'
import { Plus } from 'lucide-react'

import { cn } from '@hanzo/ui/util'
import { Button } from '@hanzo/ui/primitives'
import { useSiteDef } from './site-def'

import Logo from './logo'
import DesktopNav from './nav-desktop'
import MobileNav from './nav-mobile'

const DesktopHeader: React.FC<{ className?: string }> = ({ className = '' }) => {

  const [isMenuOpened, setIsMenuOpen] = useState<boolean>(false)
  const { nav: { common, featured }, currentAs } = useSiteDef()
  const links = featured ? [...common, ...featured] : common

  return (
    <header className={cn(
      'bg-transparent fixed z-header top-0 left-0 right-0 mx-[24px] !backdrop-blur-3xl',
      className,
      isMenuOpened ? 'h-full' : ''
    )}>
      <div className='flex flex-row h-[80px] items-center justify-between w-full mx-auto max-w-screen'>
        <div className='flex gap-4 items-center'>
          <Logo size='md' to='sitedef' logoType='graphic-only' />
        </div>
        <div className='justify-center'>
          <DesktopNav links={links} isMenuOpened={isMenuOpened} setIsMenuOpen={setIsMenuOpen} />
        </div>
        {/* right slot: intentionally empty. This site has no sign-in. */}
        <div className='flex items-center' />
      </div>
    </header>
  )
}

const MobileHeader: React.FC<{ className?: string }> = ({ className = '' }) => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const { nav: { common, featured }, currentAs } = useSiteDef()
  const links = featured ? [...common, ...featured] : common

  // header MUST be fixed, not sticky, or the menu breaks on mobile browsers
  return (<>
    <header className={cn(
      'bg-background fixed z-header top-0 left-0 w-full h-10 border-primary',
      menuOpen ? 'hidden' : 'block',
      className
    )}>
      <div className='flex h-11 items-center justify-between px-4 my-4 bg-background'>
        <div className='h-[74px] w-pr-100 flex flex-row justify-between items-center font-bold'>
          <Logo to='sitedef' size='sm' outerClx='top-[3px] h-full' logoType='text-only' />
          <Button
            variant='ghost'
            size='default'
            rounded='full'
            aria-label='Open menu'
            onClick={() => { setMenuOpen(true) }}
            className='text-foreground p-0 aspect-square hover:bg-background sm:hover:bg-level-1 active:scale-75'
          >
            <Plus width={33.83} height={16.1} className='block h-full will-change-transform transition-transform' />
          </Button>
        </div>
      </div>
    </header>
    {menuOpen && (
      <div className='fixed top-0 left-0 w-full h-full flex flex-column bg-background z-below-header animate-mobile-menu-open'>
        <MobileNav
          currentAs={currentAs}
          links={links}
          className='sm:animate-in sm:zoom-in-90 w-full'
          itemClx='px-0 text-xl h-16 justify-start'
          setMenuOpen={setMenuOpen}
        />
      </div>
    )}
  </>)
}

const Header: React.FC<{ className?: string }> = ({ className = '' }) => (<>
  <DesktopHeader className={cn(className, 'hidden md:flex')} />
  <MobileHeader className={cn(className, 'md:hidden z-[20]')} />
</>)

export default Header
