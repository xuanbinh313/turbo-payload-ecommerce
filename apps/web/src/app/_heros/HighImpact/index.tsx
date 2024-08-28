import React, { Fragment } from 'react'

import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.css'
import { Page } from '@/payload-types'
import { CMSLink } from '@/app/_components/Link'

export const HighImpactHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  return (
    <div className='container mx-auto px-6 flex relative py-16'>
      <div className='sm:w-2/3 lg:w-2/5 flex flex-col relative z-20'>
        <RichText content={richText} />
        {Array.isArray(links) && links.length > 0 && (
          <ul className={classes.links}>
            {links.map(({ link }, i) => {
              return (
                <li key={i}>
                  <CMSLink {...link} />
                </li>
              )
            })}
          </ul>
        )}
      </div>
      <div className='hidden sm:block sm:w-1/3 lg:w-3/5 relative'>
        {typeof media === 'object' && (
          <Fragment>
            <Media
              resource={media}
              // fill
              imgClassName='max-w-xs md:max-w-sm m-auto'
              priority
            />
            {media?.caption && <RichText content={media.caption} className={classes.caption} />}
          </Fragment>
        )}
      </div>
    </div>
  )
}
