import { createSlice } from '@reduxjs/toolkit'

const TodoSlicer = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    Add: (state, action) => (state = [...state, action.payload]),
    Remove: (state, action) =>
      (state = state.filter((i) => i.id !== action.payload)),
    Complete: (state, action) =>
      (state = state.map((i) =>
        i.id === action.payload ? { ...i, complete: !i.complete } : i,
      )),
    ClearComplete: (state, action) =>
      (state = state.filter((i) => i.complete !== true)),
    Replace: (state, action) => (state = action.payload),
  },
})

export const {
  Add,
  Remove,
  Complete,
  ClearComplete,
  Replace,
} = TodoSlicer.actions
export default TodoSlicer.reducer
