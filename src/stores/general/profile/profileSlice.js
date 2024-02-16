import { createSlice } from '@reduxjs/toolkit'

const initialState = localStorage.getItem('profile')
  ? JSON.parse(localStorage.getItem('profile'))
  : {}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      const { firstName, lastName, nationalCode } = action.payload
      state.firstName = firstName
      state.lastName = lastName
      state.nationalCode = nationalCode
      localStorage.setItem('profile', JSON.stringify(state))
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload
      localStorage.setItem('profile', JSON.stringify(state))
    }
  }
})

export const { setProfile, setPhoneNumber } = profileSlice.actions

export default profileSlice.reducer
