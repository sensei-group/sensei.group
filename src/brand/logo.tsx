'use client'

import React from 'react'
import Link from 'next/link'

import { type TShirtSize } from '@hanzo/ui/types'
import { cn } from '@hanzo/ui/util'
import { useSiteDef, getRegisteredIcon } from './site-def'

type LogoType = 'text-only' | 'graphic-only' | 'text-and-graphic'

const Logo: React.FC<{
  size?: TShirtSize
  logoType?: LogoType
  onClick?: () => void
  to?: string | 'sitedef' | 'home' // 'sitedef' uses siteDef.logoURL
  textClx?: string
  outerClx?: string
  logoText?: string
  iconKey?: string
}> = ({
  size,
  to = 'sitedef',
  outerClx = '',
  textClx = '',
  logoText,
  logoType = 'text-and-graphic',
  onClick,
  iconKey
}) => {

  const siteDef = useSiteDef()
  const _logoText = logoText ?? siteDef.logoText ?? 'Logo'
  const _iconKey = iconKey ?? siteDef.iconKey ?? undefined

  const LogoIcon = _iconKey ? getRegisteredIcon(_iconKey) : undefined

  const href = (to === 'sitedef') ?
    (siteDef.logoURL ?? undefined)
    :
    (to) ? (to === 'home' ? '/' : to as string) : undefined

  const clx: { icon: string, span: string } =
    (size === 'lg' || size === 'xl') ? {
      icon: 'h-10 w-10 mr-4 color-inherit',
      span: 'text-3xl'
    } :
    (size === 'md') ? {
      icon: 'h-[40.82px] w-[40.82px] mr-[12px] color-inherit',
      span: 'text-[1.8rem]/[1.8rem] tracking-tighter'
    } :
    (size === 'sm') ? {
      icon: 'h-6 w-6 mr-[12px] color-inherit',
      span: 'text-[40px] drop-shadow-md'
    } : {
      icon: 'h-4 w-4 mr-[12px] color-inherit',
      span: 'text-base'
    }

  const visibilityClx = (logoType === 'graphic-only') ? { span: ' hidden', icon: '' } :
    (logoType === 'text-only') ? { span: '', icon: ' hidden' } :
    { span: '', icon: '' }

  const iconClx = clx.icon + visibilityClx.icon
  const spanClx = clx.span + visibilityClx.span

  const _outerClx = 'flex flex-row items-center pr-5 ' + outerClx
  const _textClx = 'inline-block font-sans pl-[5px] font-bold ' +
    textClx +
    (href ? ' hover:text-accent ' : ' cursor-default ') +
    spanClx

  const Inner: React.FC = () => (<>
    {LogoIcon && <LogoIcon className={iconClx} />}
    <span className={cn(_textClx, ' text-inherit hidden md:block')}>{_logoText}</span>
  </>)

  const _onClick = onClick ?? (() => {})

  return href ? (
    <Link href={href} className={cn('flex', _outerClx)} onClick={_onClick}>
      <Inner />
    </Link>
  ) : (
    <span className={cn('flex', _outerClx)} onClick={_onClick}>
      <Inner />
    </span>
  )
}

export default Logo
