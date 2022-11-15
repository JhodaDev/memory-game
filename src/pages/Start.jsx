import { Container } from '../components/Container'
import { Board } from '../components/Start/Board'
import { Header } from '../components/Start/Header'
import { Players } from '../components/Start/Players'

export const Start = () => {
  return (
    <Container className="max-w-[350px]">
      <div className="h-screen w-full flex flex-col items-center justify-between py-10">
        <Header />
        <Board />
        <Players />
      </div>
    </Container>
  )
}
