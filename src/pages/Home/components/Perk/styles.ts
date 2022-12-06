import styled from 'styled-components'

export type PerkVariant = 'yellow-dark' | 'yellow' | 'base-text' | 'purple'

interface IPerkProps {
  variant: PerkVariant
}

export const PerkItemContainer = styled.div<IPerkProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  padding: 0.344rem 0;

  svg {
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme[props.variant]};
    padding: 0.5rem;
    border-radius: 1000px;
  }

  span {
    line-height: 1.3rem;
  }
`
