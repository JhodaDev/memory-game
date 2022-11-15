import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showElement, validateElement } from '../../helpers/main'
import { useBoard } from '../../hooks/useBoard'
import { clearVisibleNumbers, updatePlayer, updatePoints, updateVisibleNumbers } from '../../redux/slices/playerSlice'

export const Board = () => {
  const [config, grid] = useBoard()
  const dispatch = useDispatch()
  const [options, setOptions] = useState({})
  const player = useSelector(state => state.player)
  const [element, setElement] = useState(null)

  const handleClick = (value, e) => {
    const { first, second } = options
    if (!first) {
      setOptions({ ...options, first: value })
      setElement({ ...element, first: e.target })
    }
    if (first && !second) {
      setOptions({ ...options, second: value })
      setElement({ ...element, second: e.target })
    }

    showElement(e)
  }

  useEffect(() => {
    if (options.first || options.second) {
      dispatch(updateVisibleNumbers(options))
    }
  }, [options])

  useEffect(() => {
    const { first, second } = player.visibleNumbers
    if (first && second) {
      if (first === second) {
        dispatch(updatePoints({ player: player.turn }))
        validateElement(element, true)
      } else {
        validateElement(element, false)
        if (player.maxPlayers > 1) {
          let nextTurn = player.turn + 1
          if (nextTurn > player.maxPlayers) nextTurn = 1
          dispatch(updatePlayer({ nextTurn }))
        }
      }
      setOptions({})
      dispatch(clearVisibleNumbers())
    }
  }, [player.visibleNumbers])

  return (
    <div
      className={`grid gap-3 w-full justify-center ${grid === '4x4' ? 'grid-cols-4' : 'grid-cols-6'
        }`}
    >
      {config.grid?.board.map((value, i) => (
        <div
          key={i}
          className={`${grid === '4x4' ? 'h-16 w-16 text-[26px]' : 'h-12 w-12 text-[18px]'
            } flex justify-center items-center  rounded-full mx-auto bg-gray-light text-white font-bold relative`}
        >
          <span>{value}</span>
          <div className="hide" onClick={(e) => handleClick(value, e)}></div>
        </div>
      ))}
    </div>
  )
}
