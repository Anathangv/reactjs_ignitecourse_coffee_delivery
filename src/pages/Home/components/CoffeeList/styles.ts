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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: wrap;
    gap: 2.5rem 2rem;
  }
`
