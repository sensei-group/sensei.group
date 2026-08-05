'use client'
import React from 'react'
import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'
import { case_study_tiles, case_studies } from '@/content'

const Page: React.FC = () => (<>
  {case_study_tiles.map((banner, index) => (
    <Screenful
      block={banner}
      initialInView={index === 0}
      snapTile
      key={`intro-${index}`}
      contentClx='overflow-hidden'
      clx='overflow-hidden'
    />
  ))}
  {case_studies.map((banner, index) => (
    <Screenful
      block={banner}
      initialInView={index === 0}
      snapTile
      key={`study-${index}`}
      contentClx='overflow-hidden'
      clx='overflow-hidden'
    />
  ))}
</>)

export default Page
