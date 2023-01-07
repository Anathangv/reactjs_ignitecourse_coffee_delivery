import { useNavigate } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, LocationContainer, Cart, Badge } from './styles'
import { useContext } from 'react'
import { CoffeeListContext } from '../../contexts/ShoppingCartProvider'

export function Header() {
  const { totalCoffees } = useContext(CoffeeListContext)
  const navegate = useNavigate()

  function handleClickCheckout() {
    if (totalCoffees) {
      navegate('/Checkout')
    }
  }

  function handleClickHome() {
    navegate('/')
  }

  return (
    <HeaderContainer>
      <img
        src={logoCoffeeDelivery}
        alt="logo coffee delivery"
        onClick={handleClickHome}
      />
      <div>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza-CE</span>
        </LocationContainer>
        <Cart onClick={handleClickCheckout} isEnable={!!totalCoffees}>
          {!!totalCoffees && <Badge>{totalCoffees}</Badge>}
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
