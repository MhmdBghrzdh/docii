import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LoginView from '@/views/authentication/login/LoginView.jsx'
import SignupView from '@/views/authentication/signup/SignupView.jsx'
import ForgotPasswordView from '@/views/authentication/forgot-password/ForgotPasswordView.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/forgot-password" element={<ForgotPasswordView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
