import styled from 'styled-components'

interface IButtonConfirmOrder {
  isDisable: boolean
}

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

export const ButtonConfirmOrder = styled.button<IButtonConfirmOrder>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  padding: 0.75rem 0rem;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.4rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};
  opacity: ${(props) => (props.isDisable ? 0.5 : 1)};
  transition: 0.4s;

  &:hover {
    background-color: ${(props) =>
      props.isDisable ? '' : props.theme['yellow-dark']};
    cursor: ${(props) => (props.isDisable ? 'default' : 'pointer')};
  }

  & > svg {
    margin-right: 0.2rem;
    -webkit-animation: spin 2s linear infinite;
    -moz-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
  }
`
