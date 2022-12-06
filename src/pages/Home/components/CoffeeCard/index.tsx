import { BuyControls } from '../BuyControls'
import { CoffeType } from '../CoffeeType'
import { Icoffee } from '../../../../util/coffeesDB'
import { CoffeeCardContainer, Description, Name } from './styles'

interface ICofeeCardProps {
  coffee: Icoffee
}

export function CoffeeCard({ coffee }: ICofeeCardProps) {
  const { description, imageName, name, categories } = coffee

  return (
    <CoffeeCardContainer>
      <img src={imageName} alt={`imagem de um cafe ${name}`} />
      <div>
        {categories.map((category) => (
          <CoffeType label={category} key={category} />
        ))}
      </div>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <BuyControls coffee={coffee} />
    </CoffeeCardContainer>
  )
}
