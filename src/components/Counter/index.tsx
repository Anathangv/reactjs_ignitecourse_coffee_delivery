import { Minus, Plus } from 'phosphor-react'
import { CounterContainer, PlusMinusArea } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <PlusMinusArea>
        <Minus size={14} weight="fill" />
      </PlusMinusArea>
      <span>1</span>
      <PlusMinusArea>
        <Plus size={14} weight="fill" />
      </PlusMinusArea>
    </CounterContainer>
  )
}
