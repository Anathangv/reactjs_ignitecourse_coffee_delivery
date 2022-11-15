import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Card } from './components/Card'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import { CheckoutContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Frame } from './components/Frame'
import { PaymentMethodForm } from './components/PaymentMethodForm'

const deliveryAddressFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, { message: 'Necessário informar campo' }),
  street: zod.string().min(1, { message: 'Necessário informar campo' }),
  number: zod.string().min(1, { message: 'Necessário informar campo' }),
  district: zod.string().min(1, { message: 'Necessário informar campo' }),
  addressComplement: zod.string(),
  city: zod.string().min(1, { message: 'Necessário informar campo' }),
  state: zod.string().min(1, { message: 'Necessário informar campo' }),
  paymentMethod: zod.enum(['creditCard', 'debitCard', 'cash']),
})

type CoffeeDeliverFormData = zod.infer<
  typeof deliveryAddressFormValidationSchema
>

export function Checkout() {
  const checkoutForm = useForm<CoffeeDeliverFormData>({
    resolver: zodResolver(deliveryAddressFormValidationSchema),
  })

  function handleCreateNewDeliveryAddress(data: CoffeeDeliverFormData) {
    console.log('handleSubmit', data)
  }

  console.log('checkoutForm', checkoutForm)

  const { handleSubmit } = checkoutForm

  return (
    <main>
      <form
        // onChange={handleChange}
        onSubmit={handleSubmit(handleCreateNewDeliveryAddress)}
        action=""
      >
        <FormProvider {...checkoutForm}>
          <CheckoutContainer>
            <Frame title="Complete seu pedido">
              <Card
                title="Endereço de Entrega"
                subTitle="Informe o endereço onde deseja receber seu pedido"
                icon={<MapPinLine size={22} />}
                iconColor={'yellow-dark'}
              >
                <DeliveryAddressForm />
              </Card>
              <Card
                title="Pagamento"
                subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                icon={<CurrencyDollar size={22} />}
                iconColor={'purple'}
              >
                <PaymentMethodForm />
              </Card>
            </Frame>
            <Frame title="Cafés selecionado">
              <aside></aside>
            </Frame>
          </CheckoutContainer>
        </FormProvider>
      </form>
    </main>
  )
}
