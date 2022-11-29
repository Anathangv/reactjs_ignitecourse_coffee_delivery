import { SelectedCoffeeContainer, Details, ButtonRemove } from './styles'
import { coffeeList } from '../../../../util/coffeesDB'
import { Counter } from '../../../../components/Counter'
import { Trash } from 'phosphor-react'

export function SelectedCoffee() {
  return (
    <SelectedCoffeeContainer>
      <div>
        <img src={coffeeList[0].imageName} alt={`imagem de um cafe $`} />
        <Details>
          <div>
            <span>Expresso Tradicional</span>
          </div>
          <div>
            <Counter />
            <ButtonRemove>
              <Trash size={16} />
              <span>remover</span>
            </ButtonRemove>
          </div>
        </Details>
      </div>
      <div>{`R$ ${'9,90'}`}</div>
    </SelectedCoffeeContainer>
  )
}
