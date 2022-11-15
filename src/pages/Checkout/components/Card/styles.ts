import styled from 'styled-components'

export type IconColorVariant = 'yellow-dark' | 'purple'

interface ICardProps {
  iconColor: IconColorVariant
}

export const CardContainer = styled.section<ICardProps>`
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};

  & > div:first-child {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    margin-bottom: 2rem;

    svg {
      color: ${(props) => props.theme[props.iconColor]};
    }

    h3 {
      line-height: 1.3rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 0.875rem;
      line-height: 1.138rem;
    }
  }
`
