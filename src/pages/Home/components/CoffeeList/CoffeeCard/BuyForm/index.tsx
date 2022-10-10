import { ShoppingCartSimple } from 'phosphor-react'
import { Counter } from './Counter'
import { ActionArea, BuyFormContainer, PriceArea } from './styles'

export function BuyForm() {
  return (
    <BuyFormContainer>
      <PriceArea>
        <span>R$</span>
        <span>9,90</span>
      </PriceArea>
      <ActionArea>
        <Counter />
        <ShoppingCartSimple size={36} weight="fill" />
      </ActionArea>
    </BuyFormContainer>
  )
}
