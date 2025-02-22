import React from 'react'
import HomeLayout from '@/layout/home'

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined }
}

const Page: React.FC = (/* { searchParams }: Props */) => (<HomeLayout />)

export default Page
