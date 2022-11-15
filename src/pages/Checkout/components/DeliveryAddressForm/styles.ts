import styled from 'styled-components'

export const DeliveryAddressContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;

  grid-column-gap: 12px;
  grid-row-gap: 16px;

  .zipCode {
    grid-column: span 1;
  }

  .street {
    grid-column: span 3;
  }

  .addressComplement {
    grid-column: span 2;
  }
`
