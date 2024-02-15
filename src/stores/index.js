import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/stores/authentication/login/LoginSlice'
import signupReducer from '@/stores/authentication/signup/signupSlice'

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer
  }
})

export default store
