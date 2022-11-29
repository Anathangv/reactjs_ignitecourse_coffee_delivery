import { ShoppingCartSimple } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
import { ActionArea, BuyFormContainer, PriceArea } from './styles'

interface IBuyControlsProps {
  value: number
}

export function BuyControls({ value }: IBuyControlsProps) {
  return (
    <BuyFormContainer>
      <PriceArea>
        <span>R$</span>
        <span>{value}</span>
      </PriceArea>
      <ActionArea>
        <Counter />
        <ShoppingCartSimple size={36} weight="fill" />
      </ActionArea>
    </BuyFormContainer>
  )
}
