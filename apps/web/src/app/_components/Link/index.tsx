import React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { Page } from '@/payload-types'

type CMSLinkType = {
  type?: 'custom' | 'reference'
  url?: string
  newTab?: boolean
  reference?: {
    value: string | Page
    relationTo: 'pages'
  }
  label?: string
  variant?: VariantProps
  children?: React.ReactNode
  className?: string
}

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  variant,
  children,
  className,
}) => {
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  if (!variant) {
    const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

    if (href || url) {
      return (
        <Link {...newTabProps} href={href || url|| ''} className={buttonVariants({ variant: "link", className:"font-semibold text-base" })}>
          {label && label}
          {children && children}
        </Link>
      )
    }
  }

  return (
    <Button
      className={className}
    >
      {label}
    </Button>
  )
}
