import React from 'react'
import { CardContainer, IconColorVariant } from './styles'

interface ICardProps {
  iconColor: IconColorVariant
  title: string
  subTitle: string
  icon: React.ReactNode
  children: React.ReactNode
}

export function Card({
  title,
  subTitle,
  iconColor,
  icon,
  children,
}: ICardProps) {
  return (
    <CardContainer iconColor={iconColor}>
      <div>
        {icon}
        <header>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </header>
      </div>
      {children}
    </CardContainer>
  )
}
