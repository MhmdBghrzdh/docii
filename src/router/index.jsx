import { createBrowserRouter } from 'react-router-dom'
// import { Bounce, ToastContainer } from 'react-toastify'

import DefaultLayout from '@/layouts/default-layout/DefaultLayout'
import SignupPhoneNumberView from '@/views/authentication/signup/signup-phone-number/SignupPhoneNumberView'
import SignupOtpView from '@/views/authentication/signup/signup-otp/SignupOtpView'
import SignupUserInfoView from '@/views/authentication/signup/signup-user-info/SignupUserInfoView'
import SignupRoot from '@/views/authentication/signup/signup-root/SignupRoot'
import LoginView from '@/views/authentication/login/LoginView'
import ForgotPasswordView from '@/views/authentication/forgot-password/ForgotPasswordView'
import HomeView from '@/views/panel/home-view/HomeView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        element: <SignupRoot />,
        path: 'signup',
        children: [
          {
            path: '',
            element: <SignupPhoneNumberView />
          },
          {
            path: 'otp',
            element: <SignupOtpView />
          },
          {
            path: 'user-info',
            element: <SignupUserInfoView />
          }
        ]
      },
      {
        path: 'login',
        element: <LoginView />
      },
      {
        path: 'forgot-password',
        element: <ForgotPasswordView />
      },
      {
        path: '',
        element: <HomeView />
      }
    ]
  }
])

export default router
