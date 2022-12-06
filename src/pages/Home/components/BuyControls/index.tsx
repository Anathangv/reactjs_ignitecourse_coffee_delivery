import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { CoffeeListContext } from '../../../../contexts/CoffeeSelectListContext'
import { Icoffee } from '../../../../util/coffeesDB'
import { ActionArea, BuyFormContainer, PriceArea } from './styles'

interface IBuyControlsProps {
  coffee: Icoffee
}

export function BuyControls({ coffee }: IBuyControlsProps) {
  const { addOrUpdateCoffeeList, removeCoffeeFromList } =
    useContext(CoffeeListContext)

  const [coffeeAmount, setCoffeeAmount] = useState<number>(0)

  function handleBuyCoffee() {
    if (coffeeAmount > 0) {
      addOrUpdateCoffeeList(coffee, coffeeAmount)
    }
  }

  function updateCoffeeAmount(IncreaseDecreaseValue: number) {
    if (coffeeAmount >= 0) {
      const newAmount = coffeeAmount + IncreaseDecreaseValue
      setCoffeeAmount(newAmount)

      if (newAmount === 0) {
        removeCoffeeFromList(coffee)
      }
    }
  }

  return (
    <BuyFormContainer>
      <PriceArea>
        <span>R$</span>
        <span>{coffee.value}</span>
      </PriceArea>
      <ActionArea coffeeAmount={coffeeAmount}>
        <Counter
          coffeeAmount={coffeeAmount}
          updateCoffeeAmount={updateCoffeeAmount}
        />
        <ShoppingCartSimple size={36} weight="fill" onClick={handleBuyCoffee} />
      </ActionArea>
    </BuyFormContainer>
  )
}
