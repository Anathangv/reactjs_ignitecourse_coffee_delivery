import styled, { css } from 'styled-components'

export const PaymentOptionContainer = styled.div`
  display: flex;

  input {
    visibility: hidden;
    appearance: none;
  }

  label {
    width: 100%;
  }

  input:checked + label div {
    ${(props) => css`
      background: ${props.theme['purple-light']};
      border-color: ${props.theme.purple};
      &:hover {
        background: ${props.theme['purple-light']};
      }
    `}
  }
`
export const ContentContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  transition: 0.4s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
