import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 5.875rem 0;
  gap: 1rem;

  & > div {
    display: flex;
    flex-direction: column;
    flex: 1;

    h2 {
      color: ${(props) => props.theme['base-title']};
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.9rem;
      margin-bottom: 1rem;
    }

    h5 {
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`

export const PerksContainer = styled.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 40px;
`
