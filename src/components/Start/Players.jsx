import { useSelector } from 'react-redux'

export const Players = () => {
  const globalPlayer = useSelector(state => state.player)

  return (
    <div className="flex items-center gap-5">
      {globalPlayer?.players.map((player, index) => (
        <div key={index} className={`flex flex-col items-center py-3 px-6 rounded-lg ${index + 1 === globalPlayer.turn
          ? 'bg-yellow relative before:absolute before:w-0 before:h-0 before:border-b-[20px] before:border-l-[20px]  before:border-r-[20px] before:border-r-transparent before:border-l-transparent before:border-b-yellow before:border-solid before:border-transparent before:border-[#DFE7EC] before:-top-3 before:left-1/2 before:-translate-x-1/2'
          : 'bg-[#DFE7EC]'}`}>
          <h3
            className={`text-base font-bold ${index + 1 === globalPlayer.turn ? 'text-white' : 'text-[#7191A5]'
              }`}
          >
            P{player.name}
          </h3>
          <span
            className={`${index + 1 === globalPlayer.turn ? 'text-white' : 'text-gray-medium'
              } font-bold text-[24px]`}
          >
            {player.points}
          </span>
        </div>
      ))}
    </div>
  )
}
