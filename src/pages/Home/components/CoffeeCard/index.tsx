import { BuyControls } from '../BuyControls'
import { CoffeeType } from '../CoffeeType'
import { Icoffee } from '../../../../util/coffeesDB'
import { CoffeeCardContainer, Description, Name } from './styles'

interface ICofeeCardProps {
  coffee: Icoffee
  savedAmount: number | null
}

export function CoffeeCard({ coffee, savedAmount }: ICofeeCardProps) {
  const { description, imageName, name, categories } = coffee

  return (
    <CoffeeCardContainer isCoffeeSelected={!!savedAmount}>
      <img src={imageName} alt={`imagem de um cafe ${name}`} />
      <div>
        {categories.map((category) => (
          <CoffeeType label={category} key={category} />
        ))}
      </div>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <BuyControls coffee={coffee} savedAmount={savedAmount} />
    </CoffeeCardContainer>
  )
}
