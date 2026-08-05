'use client'

import React from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import Link from 'next/link'

import type { LinkDef } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@hanzo/ui/primitives'

import Logo from './logo'

const groupChildren = (childMenu: LinkDef[]) => (
  Object.entries(childMenu.reduce((acc, child) => {
    const group = acc[child.groupName ?? ''] || []
    group.push(child)
    acc[child.groupName ?? ''] = group
    return acc
  }, {} as { [key: string]: LinkDef[] }))
)

const MobileNav: React.FC<{
  currentAs: string | undefined
  links: LinkDef[]
  className?: string
  itemClx?: string
  setMenuOpen: (open: boolean) => void
}> = ({
  currentAs,
  links,
  className = '',
  itemClx = '',
  setMenuOpen
}) => (
  links.length > 0 ? (
    <div className={cn('flex flex-col h-full', className)}>
      <div className='w-full px-4 py-4'>
        <div className='flex h-11 justify-between items-center'>
          <Logo size='sm' logoType='text-and-graphic' />
          <Plus
            width={33.83}
            height={33.83}
            aria-label='Close menu'
            className='flex-none rotate-45 block h-full will-change-transform transition-transform'
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
      <div className='flex flex-col flex-1 overflow-auto'>
        <Accordion type='single' collapsible className='w-full h-full'>
          {links.map((el, index) => {
            let internalClx = (el.variant ?? 'link') === 'link'
              ? ' text-muted hover:text-foreground active:text-accent rounded-none'
              : ' min-w-0'

            if (currentAs && currentAs === el.href) {
              internalClx += ' pointer-events-none text-accent'
            }

            return (
              <AccordionItem key={index} value={el.title ?? ''} className='!no-underline !border-0'>
                <AccordionTrigger className={cn(internalClx, itemClx, 'hover:no-underline')}>
                  {!el.childMenu ? (
                    <Link href={el.href} className='text-muted-2 pl-3 text-base font-normal leading-6'>
                      {el.title}
                    </Link>
                  ) : (<>
                    <div className={cn(internalClx, itemClx, 'flex items-center justify-between w-full pl-3 text-base font-normal leading-6 hover:no-underline')}>
                      {el.title}
                    </div>
                    <ChevronDown className='w-4 h-4 mr-3' />
                  </>)}
                </AccordionTrigger>
                <AccordionContent>
                  {el.childMenu && (
                    <div className='px-4'>
                      {groupChildren(el.childMenu).map(([groupName, children]) => (
                        <div key={groupName}>
                          <div className='mt-4 mb-4 font-light text-muted-1'>{groupName}</div>
                          {children.map((child, childIndex) => (
                            <div key={childIndex} className='m-2'>
                              <div className='flex items-center py-1'>
                                <span>{child.icon}</span>
                                <Link
                                  href={child.href}
                                  className='text-muted-2 ml-5 hover:text-primary hover:no-underline'
                                  target={child.newTab ? '_blank' : '_self'}
                                  rel='noopener noreferrer'
                                >
                                  {child.title}
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  ) : null
)

export default MobileNav
