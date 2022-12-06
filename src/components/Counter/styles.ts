import styled from 'styled-components'

export const CounterContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PlusMinusArea = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  transition: 0.4s;
  border-radius: 6px;
  padding: 0rem 0.5rem;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }
`
