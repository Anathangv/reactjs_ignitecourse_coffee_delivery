import styled from 'styled-components'

interface ICoffeeCardStyleProps {
  isCoffeeSelected: boolean
}

export const CoffeeCardContainer = styled.div<ICoffeeCardStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.25rem;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
  border: ${(props) =>
    props.isCoffeeSelected ? `1px solid ${props.theme['yellow-dark']}` : null};

  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Name = styled.span`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
`

export const Description = styled.span`
  color: ${(props) => props.theme['base-label']};
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
`
