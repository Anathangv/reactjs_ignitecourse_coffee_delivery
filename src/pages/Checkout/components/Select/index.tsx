import React from 'react'
import { IState } from '../../../../util/uf'
import { SelectStyled } from './styles'

interface ISelectProps extends React.ComponentPropsWithoutRef<'select'> {
  error?: boolean
  itens: IState[]
}

export const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  (props, ref) => {
    const { error, itens, ...rest } = props
    return (
      <>
        <SelectStyled defaultValue={''} ref={ref} error={!!error} {...rest}>
          <option disabled={true} value={''}>
            UF
          </option>
          {itens &&
            itens.map((state) => (
              <option key={state.sigla} value={state.sigla}>
                {state.sigla}
              </option>
            ))}
        </SelectStyled>
      </>
    )
  },
)

Select.displayName = 'Select'
