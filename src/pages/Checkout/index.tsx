import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { Card } from './components/Card'
import { DeliveryAddressForm } from './components/DeliveryAddressForm'
import { CheckoutContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { Frame } from './components/Frame'
import { PaymentMethodForm } from './components/PaymentMethodForm'
import { OrderDetailForm } from './components/OrderDetailForm'
import {
  CoffeeListContext,
  ISelectedCoffee,
} from '../../contexts/ShoppingCartProvider'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/*
TODO
[x] - include loading while submitting order
[x] - set button not navigable while loadin
[x] - if try access the page skipping the home, refirect to home page
[] - create not found page
[] - try to make a request from a valid cep 
*/
const PaymentMethods = {
  creditCard: 'Cartão de Credito',
  debitCard: 'Cartão de Débito',
  cash: 'Dinheiro',
}

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

export type CoffeeDeliverFormData = zod.infer<
  typeof deliveryAddressFormValidationSchema
>

interface ICheckoutOrder {
  coffees: ISelectedCoffee[]
  deliveryAddress: CoffeeDeliverFormData
  deliveryFee: number
  total: number
}

export interface ISuccessInformation {
  district: string
  paymentMethod: string
  city: string
  number: number
  street: string
  stateAbreviation: string
}

export function Checkout() {
  const [submitLoading, setSubmitLoading] = useState(false)
  const { selectedCoffeeList, cleanChart } = useContext(CoffeeListContext)

  const navigate = useNavigate()

  const checkoutForm = useForm<CoffeeDeliverFormData>({
    resolver: zodResolver(deliveryAddressFormValidationSchema),
  })

  useEffect(() => {
    if (!selectedCoffeeList.length) {
      navigate('/')
    }
  })

  async function fakeApiCallTimeout(order: ICheckoutOrder) {
    setSubmitLoading(true)

    const timeout = new Promise((resolve) => setTimeout(resolve, 3000))
    return timeout
  }

  async function handleCreateNewDeliveryAddress(
    deliveryAddress: CoffeeDeliverFormData,
  ) {
    console.log('handleSubmit', deliveryAddress)
    const order: ICheckoutOrder = {
      coffees: selectedCoffeeList,
      deliveryAddress,
      deliveryFee: 3,
      total: 100,
    }

    await fakeApiCallTimeout(order)

    navigate('/Sucesso', {
      state: {
        city: deliveryAddress.city,
        district: deliveryAddress.district,
        number: deliveryAddress.number,
        stateAbreviation: deliveryAddress.state,
        street: deliveryAddress.street,
        paymentMethod: PaymentMethods[deliveryAddress.paymentMethod],
      },
    })

    cleanChart()
    setSubmitLoading(false)
  }

  const { handleSubmit } = checkoutForm

  return (
    <main>
      <form onSubmit={handleSubmit(handleCreateNewDeliveryAddress)} action="">
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
              <Card customBorderRadius="6px 44px">
                <OrderDetailForm loading={submitLoading} />
              </Card>
            </Frame>
          </CheckoutContainer>
        </FormProvider>
      </form>
    </main>
  )
}
