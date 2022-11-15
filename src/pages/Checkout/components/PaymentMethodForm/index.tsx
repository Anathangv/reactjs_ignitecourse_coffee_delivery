import { PaymentOption } from '../PaymentOption'
import { PaymentMethodContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function PaymentMethodForm() {
  const { register, formState } = useFormContext()

  const paymentErro = !!formState.errors?.paymentMethod
  console.log(paymentErro, formState.errors?.paymentMethod, formState)

  return (
    <PaymentMethodContainer>
      <PaymentOption
        id="creditCard"
        label="Cartão de Crédito"
        value={'creditCard'}
        {...register('paymentMethod')}
      />
      <PaymentOption
        id="debitCard"
        label="Cartão de Débito"
        value={'debitCard'}
        {...register('paymentMethod')}
      />
      <PaymentOption
        id="cash"
        label="Dinheiro"
        value={'cash'}
        {...register('paymentMethod')}
      />

      {paymentErro && <span>Necessário escolher uma forma de pagamento </span>}
    </PaymentMethodContainer>
  )
}
