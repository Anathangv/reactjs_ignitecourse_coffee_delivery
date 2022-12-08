// import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeListContext } from '../../../../contexts/CoffeeSelectListContext'
import { SelectedCoffee } from '../SelectedCoffee'
import {
  ButtonConfirmOrder,
  OrderDetailFormContainer,
  PaymentDetailsContainer,
} from './styles'

export function OrderDetailForm() {
  const { selectedCoffeeList } = useContext(CoffeeListContext)

  // const navegate = useNavigate()

  // function handleConfirmOrder() {
  //   navegate('/Sucesso')
  // }
  const DELIVERY_FEE = 3.5

  const totalItens = selectedCoffeeList.reduce(
    (result, coffeeList) =>
      result + coffeeList.coffee.value * coffeeList.amount,
    0,
  )

  const totalCheckout = totalItens + DELIVERY_FEE

  return (
    <OrderDetailFormContainer>
      {selectedCoffeeList &&
        selectedCoffeeList.map((selectCoffee) => (
          <SelectedCoffee
            key={selectCoffee.coffee.name}
            selectedCoffee={selectCoffee}
          />
        ))}
      {/* <SelectedCoffee />
      <hr />
      <SelectedCoffee />
      <hr /> */}

      <PaymentDetailsContainer>
        <div>
          <span>Total de itens</span>
          <span>{`R$ ${totalItens.toFixed(2)}`}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{`R$ ${DELIVERY_FEE}`}</span>
        </div>
        <div>
          <span>
            <strong>TOTAL</strong>
          </span>
          <span>
            <strong>{`R$ ${totalCheckout.toFixed(2)}`}</strong>
          </span>
        </div>
      </PaymentDetailsContainer>
      {/* <ButtonConfirmOrder type="submit">  onClick={handleConfirmOrder}> */}
      <ButtonConfirmOrder type="submit">CONFIRMAR PEDIDO</ButtonConfirmOrder>
    </OrderDetailFormContainer>
  )
}