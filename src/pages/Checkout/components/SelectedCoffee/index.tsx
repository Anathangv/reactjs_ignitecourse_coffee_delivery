import { SelectedCoffeeContainer, Details, ButtonRemove } from './styles'
import { Counter } from '../../../../components/Counter'
import { Trash } from 'phosphor-react'
import {
  CoffeeListContext,
  ISelectedCoffee,
} from '../../../../contexts/CoffeeSelectListContext'
import { useContext } from 'react'

interface ISelectedCoffeeProps {
  selectedCoffee: ISelectedCoffee
}

export function SelectedCoffee({ selectedCoffee }: ISelectedCoffeeProps) {
  const { addOrUpdateCoffeeList, removeCoffeeFromList } =
    useContext(CoffeeListContext)
  const { coffee, amount } = selectedCoffee

  function handleUpdateCoffeeAmount(IncreaseDecreaseValue: number) {
    if (amount >= 1) {
      const newAmount = amount + IncreaseDecreaseValue
      addOrUpdateCoffeeList(coffee, newAmount)
    }
  }

  function handleClickRemoveCoffee() {
    removeCoffeeFromList(coffee)
  }

  const coffeeTotal = coffee.value * amount

  return (
    <SelectedCoffeeContainer>
      <div>
        <img src={coffee.imageName} alt={`imagem de um cafe ${coffee.name}`} />
        <Details>
          <div>
            <span>{coffee.name}</span>
          </div>
          <div>
            <Counter
              coffeeAmount={amount}
              updateCoffeeAmount={handleUpdateCoffeeAmount}
              minimumAmountControl={1}
            />
            <ButtonRemove onClick={handleClickRemoveCoffee}>
              <Trash size={16} />
              <span>remover</span>
            </ButtonRemove>
          </div>
        </Details>
      </div>
      <div>{`R$ ${coffeeTotal.toFixed(2)}`}</div>
    </SelectedCoffeeContainer>
  )
}
