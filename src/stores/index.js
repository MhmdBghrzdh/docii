import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/stores/authentication/login/LoginSlice'
import signupReducer from '@/stores/authentication/signup/signupSlice'
import otpReducer from '@/stores/general/otp/otpSlice'
import profileReducer from '@/stores/general/profile/profileSlice'

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    otp: otpReducer,
    profile: profileReducer
  }
})

export default store
