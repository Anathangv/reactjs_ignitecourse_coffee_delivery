import { CoffeTypeContainer } from './styles'

interface ICoffeTypePorps {
  label: string
}

export function CoffeType({ label }: ICoffeTypePorps) {
  return <CoffeTypeContainer>{label}</CoffeTypeContainer>
}
