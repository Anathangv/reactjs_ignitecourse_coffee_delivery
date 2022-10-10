import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  h3 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6;
    margin: 2rem 0;
  }

  > div {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    gap: 2rem;
  }
`
