import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;

  > div:nth-child(1) {
    display: flex;

    img {
      margin-right: 1.25rem;
      width: 4rem;
    }
  }

  > div:nth-child(2) {
    font-weight: 700;
    line-height: 1.3rem;
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  line-height: 1.3rem;

  > div:nth-child(1) > span {
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
`

export const ButtonRemove = styled.button`
  padding: 0.406rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  text-transform: uppercase;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  border: none;
  transition: 0.4s;

  > span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
  }

  > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    cursor: pointer;
  }
`
