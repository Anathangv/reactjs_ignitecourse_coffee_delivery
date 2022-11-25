import styled from 'styled-components'

export const OrderDetailFormContainer = styled.div`
  display: block;

  hr {
    margin: 24px 0px;
    border-top: 1px solid ${(props) => props.theme['base-button']};
    border-left: none;
  }
`

export const PaymentDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    > span:nth-child(1) {
      font-size: 0.875rem;
      line-height: 1.138rem;
    }

    > span:nth-child(2) {
      line-height: 1.3rem;
    }
  }

  span > strong {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ButtonConfirmOrder = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0.75rem 0rem;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.4rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  transition: 0.4s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
    cursor: pointer;
  }
`
