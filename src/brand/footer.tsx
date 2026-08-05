'use client'

import React, { useState, type ChangeEvent } from 'react'
import Link from 'next/link'

import { cn } from '@hanzo/ui/util'

import Logo from './logo'
import { Goto, Nvidia, Techstars, Stripe, Amazon, Microsoft, Google } from './icons'

const CONTACT = 'info@hanzo.ai'

const shortcuts: { title: string, href: string }[][] = [
  [{ title: 'Home', href: '#' }, { title: 'Docs', href: '#' }, { title: 'Guides', href: '#' }],
  [{ title: 'Help', href: '#' }, { title: 'Sales', href: '#' }, { title: 'Blog', href: '#' }],
  [{ title: 'Changelog', href: '#' }, { title: 'Pricing', href: '#' }, { title: 'Legal', href: '#' }],
]

const social: { title: string, href: string }[][] = [
  [
    { title: 'X', href: 'https://x.com/hanzoai' },
    { title: 'Facebook', href: 'https://facebook.com/hanzoinc' },
    { title: 'Instagram', href: 'https://instagram.com/hanzoinc' },
  ],
  [
    { title: 'Linkedin', href: 'https://linkedin.com/company/hanzoai' },
    { title: 'Github', href: 'https://github.com/hanzoai' },
  ],
]

const linkClx = 'hover:text-primary transition duration-500'
const headingClx = '2xl:text-2xl md:text-xl text-2xl font-normal leading-5'

const isValidEmail = (email: string) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))

const Footer: React.FC<{
  className?: string
  noHorizPadding?: boolean
}> = ({
  className = '',
  noHorizPadding = false,
}) => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')

  /*
    This site is a static export with no backend. Subscribing opens the
    visitor's mail client addressed to us -- no API, no stored data.
  */
  const handleSubmit = () => {
    let valid = true
    if (!isValidEmail(email)) {
      setEmail('Invalid Email Address')
      valid = false
    }
    if (username.length < 1 || username === 'Name') {
      setUsername('Invalid Username')
      valid = false
    }
    if (valid) {
      const body = `Please add me to the newsletter.\n\nName: ${username}\nEmail: ${email}\n`
      window.location.href =
        `mailto:${CONTACT}?subject=${encodeURIComponent('Newsletter signup')}&body=${encodeURIComponent(body)}`
    }
  }

  const handleName = (e: ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }

  return (
    <footer className={cn('grow flex flex-col justify-between gap-6 pb-[2vh]', className)}>
      <div className={cn(
        noHorizPadding ? '' : 'px-4 md:px-8',
        'gap-4 gap-y-6 md:gap-x-6 lg:gap-8',
        'md:w-full sm:justify-items-center md:mx-0 lg:w-full',
        'md:flex md:flex-row md:justify-between'
      )}>
        <div className='flex md:flex-row flex-col w-full gap-8'>

          <div className='md:flex-[19%] flex flex-col 2xl:gap-10 gap-4'>
            <div className='flex flex-row 2xl:gap-5 xl:gap-4 gap-3'>
              <Logo size='md' to='sitedef' logoType='graphic-only' />
            </div>
          </div>

          <div className='md:flex-[27%] flex flex-col 2xl:gap-10 gap-4'>
            <span className={headingClx}>Shortcuts</span>
            <div className='flex flex-row gap-6 text-muted-1 lg:items-center text-base'>
              {shortcuts.map((column, i) => (
                <div className='flex flex-col gap-3' key={i}>
                  {column.map(({ title, href }) => (
                    <Link className={linkClx} href={href} key={title}>{title}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className='md:flex-[27%] flex flex-col 2xl:gap-10 md:gap-4 gap-8'>
            <span className={headingClx}>Join our newsletter</span>
            <div className='flex flex-col gap-3'>
              <input
                type='text'
                value={username}
                placeholder='Name'
                aria-label='Name'
                onChange={handleName}
                className='bg-transparent text-base outline-none text-muted-1 border-b'
              />
              <div className='flex flex-row gap-4 w-full md:border-b-0 border-b'>
                <input
                  type='text'
                  value={email}
                  placeholder='E-mail'
                  aria-label='E-mail'
                  onChange={handleEmail}
                  className='w-full bg-transparent text-base outline-none text-muted-1 md:border-b'
                />
                <button className='bg-transparent' aria-label='Subscribe' onClick={handleSubmit}>
                  <Goto />
                </button>
              </div>
            </div>
            <div className='md:flex-1 flex flex-col 2xl:gap-10 gap-3'>
              <span className={headingClx}>Connect with us</span>
              <div>
                <Link href={`mailto:${CONTACT}`} className={cn('underline text-base font-light text-muted-1', linkClx)}>
                  {CONTACT}
                </Link>
              </div>
            </div>
          </div>

          <div className='md:flex-[27%] flex md:justify-center'>
            <div className='flex flex-col 2xl:gap-10 gap-4'>
              <span className={headingClx}>Follow Us</span>
              <div className='flex flex-row gap-6 text-[16px] text-muted-1'>
                {social.map((column, i) => (
                  <div className='flex flex-col gap-3' key={i}>
                    {column.map(({ title, href }) => (
                      <Link className={cn('social-link', linkClx)} href={href} key={title}>{title}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 flex flex-row md:justify-start justify-between md:gap-8'>
          <Nvidia />
          <Techstars />
          <Stripe />
          <Google />
          <Amazon />
          <Microsoft />
        </div>
      </div>
    </footer>
  )
}

export default Footer
