'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { ScreenfulBlockComponent as Screenful } from '@hanzo/ui/blocks'

import { individual_case_study_tiles } from '@/content'
import { NotFound as NotFoundCommon } from '@/brand'

const CaseStudy: React.FC = () => {

  const params = useParams<{ slug: string }>()

  return (parseInt(params.slug) <= 10 ? <>
    {individual_case_study_tiles.map((data, index) => (
      <Screenful
        block={data}
        initialInView={index === 0}
        snapTile
        key={`section-${index}`}
        contentClx='overflow-hidden'
        clx='overflow-hidden'
      />
    ))}
  </>
  :
  <NotFoundCommon />
  )
}

export default CaseStudy
