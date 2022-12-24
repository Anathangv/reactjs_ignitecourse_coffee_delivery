import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { OrderInfoContainer, OrderInfoItem, SuccessContainer } from './styles'
import successDelivery from '../../assets/success_delivery.png'
// import { useContext } from 'react'
// import { CoffeeListContext } from '../../contexts/CoffeeSelectListContext'
import { useLocation } from 'react-router-dom'
import { ISuccessInformation } from '../Checkout'

export interface ILocationSuccess {
  state: ISuccessInformation
}

/*
TODO
[x] - save delivery address information in the context
*/

export function Success() {
  const { state } = useLocation() as unknown as ILocationSuccess

  const { district, paymentMethod, city, number, street, stateAbreviation } =
    state

  const aux = useLocation()
  console.log('aux', aux)

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
                Entrega em <strong>{`${street},${number}`}</strong>
              </span>
              <span>{`${district} - ${city}, ${stateAbreviation}`}</span>
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
                <strong>{paymentMethod}</strong>
              </span>
            </div>
          </OrderInfoItem>
        </OrderInfoContainer>
        <img
          src={successDelivery}
          alt="imagem de um homem pilatando uma moto com um pacote na garupa"
        />
      </div>
    </SuccessContainer>
  )
}
