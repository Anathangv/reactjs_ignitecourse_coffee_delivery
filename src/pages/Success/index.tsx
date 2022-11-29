import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInfoContainer, OrderInfoItem, SuccessContainer } from './styles'
import successDelivery from '../../assets/success_delivery.png'

export function Success() {
  return (
    <SuccessContainer>
      <span>
        <strong>Uhu! Pedido confirmado</strong>
      </span>
      <span>Agora é só aguardar que logo o café chegará até você</span>
      <div>
        <OrderInfoContainer>
          <OrderInfoItem iconColor="purple">
            <MapPin size={32} weight="fill" />
            <div>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </OrderInfoItem>
          <OrderInfoItem iconColor="yellow">
            <Timer size={32} weight="fill" />
            <div>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min </strong>
              </span>
            </div>
          </OrderInfoItem>
          <OrderInfoItem iconColor="yellow-dark">
            <CurrencyDollar size={32} weight="fill" />
            <div>
              <span>Pagamento na entrega</span>
              <span>
                <strong>Cartão de Crédito</strong>
              </span>
            </div>
          </OrderInfoItem>
        </OrderInfoContainer>
        <img
          src={successDelivery}
          alt="imagem de um homem pilatondo uma moto com um pacote na garupa"
        />
      </div>
    </SuccessContainer>
  )
}
