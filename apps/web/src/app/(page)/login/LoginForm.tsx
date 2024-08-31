"use client"

import * as React from "react"

import { cn } from "@/app/_lib/utils"
import { Icons } from "@/app/_components/ui/icons"
import { Button } from "@/app/_components/ui/button"
import { Label } from "@/app/_components/ui/label"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/app/_providers/Auth"
import { useForm } from 'react-hook-form'
import { Input } from "@/app/_components/Input"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }
type FormData = {
  email: string
  password: string
}
export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const redirect = React.useRef(searchParams.get('redirect'))
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>()

  const onSubmit = React.useCallback(
    async (data: FormData) => {
      try {
        await login(data)
        if (redirect?.current) router.push(redirect.current as string)
        else router.push('/')
      } catch (_) {
        setError('There was an error with the credentials provided. Please try again.')
      }
    },
    [login, router],
  )

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              name="email"
              id="email"
              placeholder="Email Address"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              register={register}
              error={errors.email}
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              password
            </Label>
            <Input
              id="email"
              placeholder="Password"
              name="password"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              register={register}
              error={errors.password}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button>
    </div>
  )
}