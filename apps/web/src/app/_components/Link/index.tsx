import React, { PropsWithChildren } from 'react'
import Link from 'next/link'
import { type CMSLinkType, type Page } from '@/payload-types'

interface CMSLinkProps extends CMSLinkType {
  className?:string
}

export const CMSLink: React.FC<PropsWithChildren<CMSLinkProps>> = ({
  type,
  url,
  reference,
  children,
  label,
  ...props
}) => {
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null
  if (href || url) {
    return (
      <Link {...props} href={href || url|| ''}>
        {children || label}
      </Link>
    )
  }
}
