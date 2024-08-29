"use client"

import * as React from "react"

import { useAuth } from "@/app/_providers/Auth"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Header } from "@/payload-types"
import { CMSLink } from "../Link"
import Link from "next/link"

export const HeaderDesktop: React.FC<{ header: Header }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map(({ link }, i) => {
            return <NavigationMenuItem key={i}>
              <CMSLink {...link}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link?.label}
                </NavigationMenuLink>
              </CMSLink>
            </NavigationMenuItem>
          })}
        </NavigationMenuList>
      </NavigationMenu>
      {/* {user && <Link href="/account">Account</Link>} */}
      {/* {!user && (
        <React.Fragment>
          <Link href="/login">Login</Link>
          <Link href="/create-account">Create Account</Link>
        </React.Fragment>
      )} */}
    </>

  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
