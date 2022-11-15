import styled from 'styled-components'

interface InputStyledPros {
  error: boolean
}

export const InputStyled = styled.input<InputStyledPros>`
  height: 2.625rem;
  padding: 0.75rem;
  border: 1px solid
    ${(props) => (props.error ? props.theme.red : props.theme['base-hover'])};
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 4px;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
