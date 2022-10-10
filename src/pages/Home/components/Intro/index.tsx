import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introCoffee from '../../../../assets/intro_coffee.png'
import { Perk } from './Perk'

import { IntroContainer, PerksContainer } from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <div>
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <h5>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h5>
        <PerksContainer>
          <Perk description={'Compra simples e segura'} variant={'yellow-dark'}>
            <ShoppingCart size={32} weight="fill" />
          </Perk>
          <Perk
            description={'Embalagem mantém o café intacto'}
            variant={'base-text'}
          >
            <Package size={32} weight="fill" />
          </Perk>
          <Perk description={'Entrega rápida e rastreada'} variant={'yellow'}>
            <Timer size={32} weight="fill" />
          </Perk>
          <Perk
            description={'O café chega fresquinho até você'}
            variant={'purple'}
          >
            <Coffee size={32} weight="fill" />
          </Perk>
        </PerksContainer>
      </div>
      <img
        src={introCoffee}
        alt="a cup coffee with some coffee seds and coffee powder arround"
      />
    </IntroContainer>
  )
}
