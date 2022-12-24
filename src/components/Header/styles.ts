import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

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

export const Cart = styled.div`
  width: 2.375rem;
  height: 2.375rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
    transition: 0.4s;
  }

  &:hover {
    background-color: ${(props) => props.theme.yellow};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['yellow-light']};
    }
  }
`

export const Badge = styled.span`
  top: -0.7rem;
  right: -0.7rem;
  position: absolute;
  text-align: center;
  padding: 0.3rem 0.4rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.75rem;
  line-height: 0.975rem;
  font-size: 700;
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
