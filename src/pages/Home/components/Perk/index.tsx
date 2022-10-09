import React from 'react'
import { PerkItemContainer, PerkVariant } from './styles'

interface IPerkProps {
  description: string
  variant: PerkVariant
  children: React.ReactNode
}

export function Perk({ description, variant, children }: IPerkProps) {
  return (
    <PerkItemContainer variant={variant}>
      {children}
      <span>{description}</span>
    </PerkItemContainer>
  )
}
