import styled, { css } from 'styled-components'
import { IconColorVariant } from '../Checkout/components/Card/styles'

interface IOrderInfoItemProps {
  iconColor: IconColorVariant
}

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  width: 70rem;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 30.75rem;
      height: 18.313rem;
    }
  }

  & > span:nth-child(1) > strong {
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
  }

  & > span:nth-child(2) {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 32.875rem;
  padding: 2.5rem;
  margin-right: 6.375rem;

  ${(props) => css`
    background: linear-gradient(
          ${(props) => props.theme.white},
          ${(props) => props.theme.white}
        )
        padding-box,
      linear-gradient(to right, ${props.theme.yellow}, ${props.theme.purple})
        border-box;
  `}
  border-radius: 6px 36px 6px 36px;
  border: 2px solid transparent;
`

export const OrderInfoItem = styled.div<IOrderInfoItemProps>`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;

  & > svg {
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme[props.iconColor]};
    padding: 0.5rem;
    border-radius: 1000px;
  }

  & > div {
    display: flex;
    flex-direction: column;

    span {
      line-height: 1.5rem;
    }
  }
`
