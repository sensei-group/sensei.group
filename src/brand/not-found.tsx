import React from 'react'
import Link from 'next/link'

import { ApplyTypography } from '@hanzo/ui/primitives'

import Footer from './footer'
import Header from './header'
import Main from './main'

const NotFound: React.FC<{ header?: boolean }> = ({ header = false }) => (<>
  {header && <Header />}
  <Main className='h-[100svh] sm:h-[700px] px-8 sm:px-10' headerSpace={header}>
    <ApplyTypography className='mt-[200px] flex flex-col md:gap-8'>
      <div className='flex flex-col items-center justify-center bg-black text-white'>
        <div className='mx-auto max-w-md text-center'>
          <h1 className='text-[90px] font-bold text-[white]'>404</h1>
          <p className='mt-4 text-2xl text-[white]'>Oops, page not found</p>
          <Link
            href='/'
            className='mt-6 inline-flex items-center rounded-[5px] bg-[white] px-4 py-2 text-sm font-medium !text-[black] shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
            style={{ textDecoration: 'none' }}
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </ApplyTypography>
  </Main>
  <Footer />
</>)

export default NotFound
