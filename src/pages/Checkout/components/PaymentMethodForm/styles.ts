import styled from 'styled-components'

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme.red};
    grid-column: span 3;
  }
`
