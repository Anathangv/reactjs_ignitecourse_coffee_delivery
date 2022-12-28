import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

/*
[x] - align coffees in the center
[] - when return from checkout page display selected coffees
*/

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
