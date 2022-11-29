import { useNavigate } from 'react-router-dom'
import logoCoffeeDelivery from '../../assets/logo.png'
import cartEmpty from '../../assets/cart_empty.png'
import { MapPin } from 'phosphor-react'
import { HeaderContainer, LocationContainer } from './styles'

export function Header() {
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
        <img
          src={cartEmpty}
          alt="imagem do carrinho de compra"
          onClick={handleClickCheckout}
        />
      </div>
    </HeaderContainer>
  )
}
