import { createSlice } from '@reduxjs/toolkit'

export const locationStateSlice = createSlice({
  name: 'locationState',
  initialState: {
    value: 'trending',
  },
  reducers: {
    changeShowingContent: (state, actions) => {
      state.value = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeShowingContent } = locationStateSlice.actions

export default locationStateSlice.reducer