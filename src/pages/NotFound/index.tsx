import spilledCoffee from '../../assets/spilled_coffee.png'
import { NoteFoundContainer } from './styles'

export function NotFound() {
  return (
    <NoteFoundContainer>
      <span>404: Página não encontrada</span>
      <img
        src={spilledCoffee}
        alt="uma caneca de café caída de lado derramando o café"
      />
    </NoteFoundContainer>
  )
}
