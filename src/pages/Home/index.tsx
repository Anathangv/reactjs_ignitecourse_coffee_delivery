import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <span>this is my home</span>
    </HomeContainer>
  )
}
