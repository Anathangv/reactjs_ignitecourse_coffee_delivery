import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

/*
TODO
[x] - align coffees in the center
[] - when return from checkout page display selected coffees
[] - adjust background image in the company coffee detais block
[] - add a border effect when include coffee in the cart
*/

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
