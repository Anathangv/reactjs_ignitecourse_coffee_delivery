import { CoffeTypeContainer } from './styles'

interface ICoffeTypePorps {
  label: string
}

export function CoffeeType({ label }: ICoffeTypePorps) {
  return <CoffeTypeContainer>{label}</CoffeTypeContainer>
}
