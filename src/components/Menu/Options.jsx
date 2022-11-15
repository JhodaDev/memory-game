import { useDispatch } from 'react-redux'
import { handleActive } from '../../helpers/main'
import { update } from '../../redux/slices/configSlice'
import { updatePlayer } from '../../redux/slices/playerSlice'

export const Options = ({ title, options, cols, id }) => {
  const dispatch = useDispatch()

  const handleClick = (e, id, value) => {
    const options = id === 'gridSize' ? { grid: { gridSize: value } } : { [id]: value }
    if (id !== 'players') dispatch(update(options))
    if (id === 'players') dispatch(updatePlayer({ maxPlayers: value }))
    handleActive(e, id)
  }

  return (
    <div className="flex flex-col mb-6">
      <h3 className="text-base text-gray-medium mb-3">{title}</h3>
      <div
        className={`grid gap-3 select-none cursor-pointer ${cols || ''}`}
      >
        {options.map((value, index) => (
          <div
            key={index}
            className={`w-full text-center py-2 rounded-3xl text-white ${index === 0 ? `active ${id}` : 'bg-gray-light'
              }`}
            onClick={(e) => handleClick(e, id, value)}
          >
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
