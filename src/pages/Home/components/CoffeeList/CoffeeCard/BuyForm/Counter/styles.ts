import styled from 'styled-components'

export const CounterContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  svg:hover {
    color: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
  }
`
