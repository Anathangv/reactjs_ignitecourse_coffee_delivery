import { SelectedCoffee } from '../SelectedCoffee'
import {
  ButtonConfirmOrder,
  OrderDetailFormContainer,
  PaymentDetailsContainer,
} from './styles'

export function OrderDetailForm() {
  return (
    <OrderDetailFormContainer>
      <SelectedCoffee />
      <hr />
      <SelectedCoffee />
      <hr />

      <PaymentDetailsContainer>
        <div>
          <span>Total de itens</span>
          <span>{`R$ ${29.7}`}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{`R$ ${3.5}`}</span>
        </div>
        <div>
          <span>
            <strong>TOTAL</strong>
          </span>
          <span>
            <strong>{`R$ ${33.2}`}</strong>
          </span>
        </div>
      </PaymentDetailsContainer>

      <ButtonConfirmOrder>CONFIRMAR PEDIDO</ButtonConfirmOrder>
    </OrderDetailFormContainer>
  )
}
