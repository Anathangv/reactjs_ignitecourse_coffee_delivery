import styled from 'styled-components'

export type IconColorVariant = 'yellow-dark' | 'purple' | 'yellow'

interface ICardProps {
  iconColor?: IconColorVariant
  customBorderRadius?: string
}

export const CardContainer = styled.section<ICardProps>`
  border-radius: ${(props) =>
    props.customBorderRadius ? props.customBorderRadius : '6px'};
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
`

export const CardTitle = styled.div<ICardProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.iconColor && props.theme[props.iconColor]};
  }

  h3 {
    line-height: 1.3rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.138rem;
  }
`
