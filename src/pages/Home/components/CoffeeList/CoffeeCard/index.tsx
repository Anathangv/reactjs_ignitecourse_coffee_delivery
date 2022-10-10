import { CoffeeCardContainer, Description, Name } from './styles'
import expressoTradicional from '../../../../../assets/expresso_tradicional.png'
import { CoffeType } from './CoffeeType'
import { BuyForm } from './BuyForm'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={expressoTradicional} alt="imagem cafe expresso tradicional" />
      <CoffeType label="TRADICIONAL" />
      <Name>Mocaccino</Name>
      <Description>
        Café expresso com calda de chocolate, pouco leite e espuma
      </Description>
      <BuyForm />
    </CoffeeCardContainer>
  )
}
