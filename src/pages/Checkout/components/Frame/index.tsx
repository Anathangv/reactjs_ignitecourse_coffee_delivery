import React from 'react'
import { FrameContainer } from './styles'

interface IFrameProps {
  title: string
  children: React.ReactNode
}

export function Frame({ title, children }: IFrameProps) {
  return (
    <FrameContainer>
      <header>
        <h3>{title}</h3>
      </header>
      {children}
    </FrameContainer>
  )
}
