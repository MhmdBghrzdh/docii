import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'

import DefaultLayout from '@/layouts/default-layout/DefaultLayout'
import LoginView from '@/views/authentication/login/LoginView.jsx'
import SignupView from '@/views/authentication/signup/SignupView.jsx'
import ForgotPasswordView from '@/views/authentication/forgot-password/ForgotPasswordView.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: 'signup',
        element: <SignupView />
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
