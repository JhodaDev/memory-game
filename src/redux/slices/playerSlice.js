import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  turn: 1,
  winner: false,
  visibleNumbers: {
    first: null,
    second: null
  },
  players: [{
    name: 1,
    points: 0,
    gamesWon: 0
  }],
  maxPlayers: 1
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updatePlayer: (state, action) => {
      if (action.payload.nextTurn) state.turn = action.payload.nextTurn
      if (action.payload.winner) state.winner = action.payload.winner
      if (action.payload.maxPlayers) state.maxPlayers = action.payload.maxPlayers
    },

    updateVisibleNumbers: (state, action) => {
      state.visibleNumbers.first = action.payload.first
      state.visibleNumbers.second = action.payload.second
    },

    generatePointsAndGamesWon: (state, action) => {
      const { maxPlayers } = action.payload
      state.players = Array.from({ length: Number(maxPlayers) }, (_, index) => ({
        name: index + 1,
        points: 0,
        gamesWon: 0
      }))
      state.maxPlayers = Number(maxPlayers)
    },

    updatePoints: (state, action) => {
      const { player } = action.payload
      state.players[player - 1].points += 1
    },

    clearVisibleNumbers: (state) => {
      state.visibleNumbers.first = null
      state.visibleNumbers.second = null
    }
  }
})

export const { updatePlayer, updateVisibleNumbers, generatePointsAndGamesWon, updatePoints, clearVisibleNumbers } = playerSlice.actions
export default playerSlice.reducer
