import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  theme: 'Numbers',
  grid: {
    gridSize: '4x4',
    board: []
  }
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    update: (state, action) => {
      if (action.payload.theme) state.theme = action.payload.theme
      if (action.payload?.grid?.gridSize) state.grid.gridSize = action.payload?.grid?.gridSize
      if (action.payload?.grid?.board) state.grid.board = action.payload?.grid?.board
    }
  }
})

export const { update } = configSlice.actions
export default configSlice.reducer
