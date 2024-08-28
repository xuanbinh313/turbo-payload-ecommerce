import React from 'react'

import { Page } from '@/payload-types'
import { HighImpactHero } from '@/app/_heros/HighImpact'
import { MediumImpactHero } from '@/app/_heros/MediumImpact'
import { LowImpactHero } from '@/app/_heros/LowImpact'

const heroes = {
  highImpact: HighImpactHero,
  mediumImpact: MediumImpactHero,
  lowImpact: LowImpactHero,
}

export const Hero: React.FC<Page['hero']> = props => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
