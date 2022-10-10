import { CoffeeCard } from './CoffeeCard'
import { CoffeeListContainer } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <header>
        <h3>Nossos cafés</h3>
      </header>
      <div>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </div>
    </CoffeeListContainer>
  )
}
