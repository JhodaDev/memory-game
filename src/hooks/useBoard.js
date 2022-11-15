import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/slices/configSlice'

export const useBoard = () => {
  const { config } = useSelector(state => state)
  const dispatch = useDispatch()

  const generateBoard = (row, col) => {
    const board = []
    const max = row * col
    const maxNumber = max / 2
    const numbers = []
    for (let i = 1; i <= maxNumber; i++) {
      numbers.push(i)
      numbers.push(i)
    }
    for (let i = 0; i < max; i++) {
      const random = Math.floor(Math.random() * numbers.length)
      board.push(numbers[random])
      numbers.splice(random, 1)
    }

    dispatch(update({ grid: { board } }))
  }

  useEffect(() => {
    const grid = config.grid.gridSize.split('x')
    const row = Number(grid[0])
    const col = Number(grid[1])

    generateBoard(row, col)
  }, [config.grid?.gridSize])

  return [config, config.grid?.gridSize]
}
