import React from 'react'

import case_studies from '@/content/case-study'
import CaseStudy from './case-study'

/*
  Static export: every case study gets its own pre-rendered page.
  Ids come from the content itself, so adding a case study is enough.
*/
export const generateStaticParams = () => (
  case_studies.map(({ id }) => ({ slug: String(id) }))
)

const Page: React.FC = () => (<CaseStudy />)

export default Page
