import { configureStore } from '@reduxjs/toolkit'
import Tasks from './Tasks'

export const store = configureStore({
  reducer: {
    Tasks,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
