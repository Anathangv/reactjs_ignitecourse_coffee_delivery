import { useContext } from 'react'
import { CoffeeListContext } from '../../../../contexts/ShoppingCartProvider'
import { coffeeList, Icoffee } from '../../../../util/coffeesDB'
import { CoffeeCard } from '../CoffeeCard'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  const { selectedCoffeeList } = useContext(CoffeeListContext)

  function returnAmountFromSavedCoffee(coffee: Icoffee) {
    if (selectedCoffeeList.length) {
      const savedCoffee = selectedCoffeeList.find(
        (selectedCoffee) => selectedCoffee.coffee.name === coffee.name,
      )
      return savedCoffee?.amount || null
    }
    return null
  }

  return (
    <CoffeeListContainer>
      <header>
        <h3>Nossos cafés</h3>
      </header>
      <div>
        {coffeeList &&
          coffeeList.map((coffee) => (
            <CoffeeCard
              key={coffee.name}
              coffee={coffee}
              savedAmount={returnAmountFromSavedCoffee(coffee)}
            />
          ))}
      </div>
    </CoffeeListContainer>
  )
}
