import { createSlice } from '@reduxjs/toolkit'

const ToggleSlicer = createSlice({
  name: 'Toggle',
  initialState: false,
  reducers: {
    showHide: (state, action) => (state = !state),
  },
})

export const { showHide } = ToggleSlicer.actions

export default ToggleSlicer.reducer
