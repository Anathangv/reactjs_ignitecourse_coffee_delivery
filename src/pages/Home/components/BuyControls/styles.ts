import styled from 'styled-components'

interface IActionAreaStylesProps {
  coffeeAmount: number
}

export const BuyFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  margin-top: auto;
`

export const PriceArea = styled.div`
  > span:first-child {
    font-size: 0.875rem;
    line-height: 1.95rem;
    margin-right: 0.125rem;
  }

  > span:last-child {
    font-size: 1.5rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.95rem;
  }
`
export const ActionArea = styled.div<IActionAreaStylesProps>`
  display: flex;
  flex: row;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme.background};
    background-color: ${(props) =>
      props.coffeeAmount
        ? props.theme['purple-dark']
        : props.theme['purple-light']};
    padding: 0.5rem;
    border-radius: 6px;
    transition: 0.4s;
  }

  > svg:hover {
    cursor: ${(props) => (props.coffeeAmount ? 'pointer' : 'default')};
    background-color: ${(props) =>
      props.coffeeAmount ? props.theme.purple : ''};
  }
`
