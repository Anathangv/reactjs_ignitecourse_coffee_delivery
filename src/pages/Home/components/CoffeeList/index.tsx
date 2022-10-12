import { coffeeList } from '../../../../util/coffeesDB'
import { CoffeeCard } from './CoffeeCard'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <header>
        <h3>Nossos cafés</h3>
      </header>
      <div>
        {coffeeList &&
          coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.name} coffee={coffee} />
          ))}
      </div>
    </CoffeeListContainer>
  )
}
