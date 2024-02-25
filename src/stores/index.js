import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '@/stores/authentication/login/LoginSlice'
import signupReducer from '@/stores/authentication/signup/signupSlice'
import otpReducer from '@/stores/general/otp/otpSlice'
import profileReducer from '@/stores/general/profile/profileSlice'
import categoryReducer from '@/stores/general/category/categorySlice'
import fileReducer from '@/stores/general/file/fileSlice'

const store = configureStore({
  reducer: {
    login: loginReducer,
    signup: signupReducer,
    otp: otpReducer,
    profile: profileReducer,
    category: categoryReducer,
    file: fileReducer
  }
})

export default store
