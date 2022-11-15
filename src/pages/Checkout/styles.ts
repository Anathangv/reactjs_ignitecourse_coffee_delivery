import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 2.5rem auto;
  width: 70rem;
  justify-content: center;
  border: 1px solid black;

  article {
    border: 1px solid green;
  }

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

  aside {
    width: 28rem;
  }
`
