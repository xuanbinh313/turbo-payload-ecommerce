import React from 'react'
import { FieldValues, UseFormRegister, Validate } from 'react-hook-form'
import { InputProps, Input as InputUI } from "@/app/_components/ui/input"


interface Props extends InputProps {
  name: string
  register: UseFormRegister<FieldValues & any>
  required?: boolean
  error: any
  type?: 'text' | 'number' | 'password' | 'email'
  validate?: (value: string) => boolean | string
  disabled?: boolean
  id?: string
}

export const Input: React.FC<Props> = ({
  name,
  required,
  register,
  error,
  type = 'text',
  validate,
  disabled,
  id,
  ...props
}) => {
  return (
    <>
      <InputUI
        {...{ type }}
        {...register(name, {
          required,
          validate,
          ...(type === 'email'
            ? {
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Please enter a valid email',
              },
            }
            : {}),
        })}
        disabled={disabled}
        {...props}
      />
      {/* <div className={classes.inputWrap}>
        <label htmlFor="name" className={classes.label}>
          {label}
          {required ? <span className={classes.asterisk}>&nbsp;*</span> : ''}
        </label>
        <input
          className={[classes.input, error && classes.error].filter(Boolean).join(' ')}
          {...{ type }}
          {...register(name, {
            required,
            validate,
            ...(type === 'email'
              ? {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email',
                },
              }
              : {}),
          })}
          disabled={disabled}
        />
        {error && (
          <div className={classes.errorMessage}>
            {!error?.message && error?.type === 'required'
              ? 'This field is required'
              : error?.message}
          </div>
        )}
      </div> */}
    </>

  )
}
