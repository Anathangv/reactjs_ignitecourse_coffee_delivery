import { Minus, Plus } from 'phosphor-react'
import { CounterContainer, PlusMinusArea } from './styles'

interface ICounterPros {
  coffeeAmount: number
  updateCoffeeAmount: (coffeeAmount: number) => void
}

export function Counter({ coffeeAmount, updateCoffeeAmount }: ICounterPros) {
  function handleIncrementCoffeeAmount() {
    updateCoffeeAmount(1)
  }

  function handleDecrementCoffeeAmount() {
    if (coffeeAmount > 0) {
      updateCoffeeAmount(-1)
    }
  }
  return (
    <CounterContainer>
      <PlusMinusArea onClick={handleDecrementCoffeeAmount}>
        <Minus size={14} weight="fill" />
      </PlusMinusArea>
      <span>{coffeeAmount}</span>
      <PlusMinusArea onClick={handleIncrementCoffeeAmount}>
        <Plus size={14} weight="fill" />
      </PlusMinusArea>
    </CounterContainer>
  )
}
