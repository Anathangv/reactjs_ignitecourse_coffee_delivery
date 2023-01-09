import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  width: 70rem;
  justify-content: center;

  & > article {
    > header h3 {
      margin-bottom: 0.938rem;
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1.463rem;
    }
  }

  & > article:nth-child(1) {
    flex: 1;
    max-width: 40rem;

    section {
      margin-bottom: 0.75rem;
    }
  }

  & > article:nth-child(2) {
    width: 28rem;
  }
`
