import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'

import DefaultLayout from '@/layouts/default-layout/DefaultLayout'
import SignupFormView from '@/views/authentication/signup/signup-form/SignupFormView'
import SignupOtpView from '@/views/authentication/signup/signup-otp/SignupOtpView'
import SignupRoot from '@/views/authentication/signup/signup-root/SignupRoot'
import LoginView from '@/views/authentication/login/LoginView'
import ForgotPasswordView from '@/views/authentication/forgot-password/ForgotPasswordView'

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
            element: <SignupFormView />
          },
          {
            path: 'otp',
            element: <SignupOtpView />
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
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}

export default App
