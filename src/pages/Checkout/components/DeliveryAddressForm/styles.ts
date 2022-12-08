import styled from 'styled-components'

export const DeliveryAddressContainer = styled.div`
  display: grid;
  grid-template-columns: 12rem 17rem 4.5rem;

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
