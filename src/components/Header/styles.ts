import styled from 'styled-components'

interface ICart {
  isEnable: boolean
}

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  background-color: ${(props) => props.theme.background};

  & > img {
    width: 5.309rem;
    height: 2.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Cart = styled.div<ICart>`
  width: 2.375rem;
  height: 2.375rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};
  transition: 0.4s;
  opacity: ${(props) => (props.isEnable ? 1 : 0.5)};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    transition: 0.4s;
  }

  &:hover {
    background-color: ${(props) => (props.isEnable ? props.theme.yellow : '')};
    cursor: ${(props) => (props.isEnable ? 'pointer' : 'default')};

    svg {
      color: ${(props) => (props.isEnable ? props.theme['yellow-light'] : '')};
    }
  }
`

export const Badge = styled.span`
  top: calc(-1.25rem / 2);
  right: calc(-1.25rem / 2);
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-size: 700;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  gap: 0.25rem;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-light']};

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  span {
    color: ${(props) => props.theme['purple-dark']};
  }
`
