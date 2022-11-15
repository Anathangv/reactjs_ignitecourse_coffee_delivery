import { DeliveryAddressContainer } from './styles'
import { Input } from '../Input'
import { useFormContext } from 'react-hook-form'

export function DeliveryAddressForm() {
  const { register, formState } = useFormContext()

  return (
    <DeliveryAddressContainer>
      <Input
        placeholder="CEP"
        maxLength={9}
        className="zipCode"
        error={!!formState.errors?.zipCode}
        {...register('zipCode')}
      />
      <Input
        placeholder="Rua"
        className="street"
        error={!!formState.errors?.street}
        {...register('street')}
      />
      <Input
        placeholder="Número"
        error={!!formState.errors?.number}
        {...register('number')}
      />
      <Input
        placeholder="Complemento"
        className="addressComplement"
        {...register('addressComplement')}
      />
      <Input
        placeholder="Bairro"
        error={!!formState.errors?.district}
        {...register('district')}
      />
      <Input
        placeholder="Cidade"
        error={!!formState.errors?.city}
        {...register('city')}
      />
      <Input
        placeholder="UF"
        error={!!formState.errors?.state}
        maxLength={2}
        {...register('state')}
      />
      <button type="submit">teste</button>
    </DeliveryAddressContainer>
  )
}
