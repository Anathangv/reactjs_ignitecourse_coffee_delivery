import { useNavigate } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, LocationContainer, Cart, Badge } from './styles'
import { useContext } from 'react'
import { CoffeeListContext } from '../../contexts/CoffeeSelectListContext'
/*
TODO
[] - align header icons with the page body
[] - include control to only clicl on cart if there is coffee selected
[x] - include coffee count in the chart icon
*/
export function Header() {
  const { totalCoffees } = useContext(CoffeeListContext)
  const navegate = useNavigate()

  function handleClickCheckout() {
    navegate('/Checkout')
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
        <Cart onClick={handleClickCheckout}>
          <Badge>{totalCoffees()}</Badge>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </div>
    </HeaderContainer>
  )
}
