import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login() {}
  }
})

export const { login } = loginSlice.actions

export default loginSlice.reducer
