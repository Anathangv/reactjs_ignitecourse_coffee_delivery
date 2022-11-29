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

    img {
      width: 2.375rem;
      height: 2.375rem;
    }

    img:hover {
      cursor: pointer;
    }
  }
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
