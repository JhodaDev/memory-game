import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container } from '../components/Container'
import { Options } from '../components/Menu/Options'
import { generatePointsAndGamesWon } from '../redux/slices/playerSlice'

export const Menu = () => {
  const dispatch = useDispatch()
  const { maxPlayers } = useSelector((state) => state.player)
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(generatePointsAndGamesWon({ maxPlayers }))
    navigate('/start')
  }

  return (
    <div className="h-screen flex items-center justify-center font-Atkinson bg-gray-dark ">
      <Container>
        <h1 className="text-lg text-white text-center mb-12">memory</h1>
        <div className="bg-white p-7 rounded-xl">
          <Options
            cols="grid-cols-2"
            options={['Numbers', 'Icons']}
            title="Select Theme"
            id="theme"
          />
          <Options
            cols="grid-cols-4"
            options={['1', '2', '3', '4']}
            title="Numbers of Players"
            id="players"
          />
          <Options
            cols="grid-cols-2"
            options={['4x4', '6x6']}
            title="Grid Size"
            id="gridSize"
          />
          <button
            onClick={handleClick}
            className="inline-block text-center w-full bg-yellow text-white py-2 rounded-3xl"
          >
            Start Game
          </button>
        </div>
      </Container>
    </div>
  )
}
