import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    mode: "light",
    modalOpen: "closed"
}

export const preferenceSlice = createSlice({
  name: 'preference',
  initialState,
  reducers: {
    toggleMode: (state) => {
        state.mode = state.mode === 'light' ? 'dark' : 'light'
    },
    toggleModal: (state) => {
        state.modalOpen = state.modalOpen === 'closed' ? 'open' : 'closed'
    }
  },
})

export const { toggleMode, toggleModal } = preferenceSlice.actions

export default preferenceSlice.reducer