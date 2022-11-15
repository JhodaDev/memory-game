import { configureStore } from '@reduxjs/toolkit'
import configReducer from './slices/configSlice'
import playerReducer from './slices/playerSlice'

export const store = configureStore({
  reducer: {
    config: configReducer,
    player: playerReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})
