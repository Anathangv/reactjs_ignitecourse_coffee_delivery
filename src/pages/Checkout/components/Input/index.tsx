import React from 'react'
import { InputStyled } from './styles'

interface IInputsPorps extends React.ComponentPropsWithoutRef<'input'> {
  error?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, IInputsPorps>(
  (props, ref) => {
    const { error, ...rest } = props
    return (
      <>
        <InputStyled ref={ref} error={!!error} {...rest} />
      </>
    )
  },
)

Input.displayName = 'Input'
