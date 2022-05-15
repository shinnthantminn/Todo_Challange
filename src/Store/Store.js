import { configureStore } from '@reduxjs/toolkit'
import TodoSlicer from './Slicer/TodoSlicer'
import ToggleSlicer from './Slicer/ToggleSlicer'

const store = configureStore({
  reducer: {
    Theme: ToggleSlicer,
    Todo: TodoSlicer,
  },
})

export default store
