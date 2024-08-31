import React from 'react'

import { fetchHeader } from '../../_api/fetchGlobals'
import { type Header } from '@/payload-types'
import { MainNav } from './MainNav'
import { SearchNav } from './SearchNav'
import { UserNav } from './UserNav'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <header>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          {/* <TeamSwitcher /> */}
          <MainNav header={header} className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <SearchNav />
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  )
}
