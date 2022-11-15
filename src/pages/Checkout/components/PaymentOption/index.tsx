import { CreditCard } from 'phosphor-react'
import { forwardRef, InputHTMLAttributes } from 'react'
import { PaymentOptionContainer, ContentContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
}

/* eslint-disable react/display-name */
export const PaymentOption = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, label, value, ...props }, ref) => {
  return (
    <PaymentOptionContainer>
      <input
        id={id}
        type="radio"
        value={value}
        name="paymentMethod"
        ref={ref}
        {...props}
      />
      <label htmlFor={id}>
        <ContentContainer>
          <CreditCard size={16} />
          {label}
        </ContentContainer>
      </label>
    </PaymentOptionContainer>
  )
})
