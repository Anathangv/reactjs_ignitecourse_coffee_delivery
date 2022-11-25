import React from 'react'
import { CardContainer, CardTitle, IconColorVariant } from './styles'

interface ICardProps {
  iconColor?: IconColorVariant
  iconColor2?: string
  title?: string
  subTitle?: string
  icon?: React.ReactNode
  customBorderRadius?: string
  children: React.ReactNode
}

export function Card({
  title,
  subTitle,
  iconColor,
  iconColor2,
  icon,
  customBorderRadius,
  children,
}: ICardProps) {
  return (
    <CardContainer
      iconColor={iconColor}
      customBorderRadius={customBorderRadius}
    >
      {title && (
        <CardTitle iconColor={iconColor}>
          {iconColor2}
          {icon}
          <header>
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </header>
        </CardTitle>
      )}
      {children}
    </CardContainer>
  )
}
