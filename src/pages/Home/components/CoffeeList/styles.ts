import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 9.813rem;

  h3 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6;
    margin: 2rem 0;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 0.3rem;
    row-gap: 2.5rem;
    margin-top: 1rem;
  }
`
