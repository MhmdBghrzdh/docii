import './index.scss'

import Cookies from 'js-cookie'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import BaseTextInput from '@/components/base/base-text-input/BaseTextInput'
import BaseButton from '@/components/base/base-button/BaseButton'

import { loginMapper } from '@/mappers/authentication'

import { login } from '@/stores/authentication/login/LoginSlice'

import { passwordValidation } from '@/plugins/react-hook-form/validations'

function LoginView() {
  const defaultValues = {
    phoneNumber: '',
    password: ''
  }
  const { control, handleSubmit } = useForm({ defaultValues })
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profileStore = useSelector((state) => state.profile)

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const payloadLogin = loginMapper(data)
      const response = await dispatch(login(payloadLogin))
      console.log(response)
      if (response?.error) throw new Error(response)
      Cookies.set('token', response?.payload?.token)
      navigate('/')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <BaseTextInput
        placeholder="Enter your phone number"
        prependIcon="Phone"
        name="phoneNumber"
        type="tel"
        control={control}
        rules={{
          required: 'phone number is required',
          pattern: {
            value: /^[0-9]{11}$/,
            message: 'phone number must be 11 digits'
          }
        }}
      />
      <BaseTextInput
        placeholder="Enter your password"
        prependIcon="Lock"
        appendIcon="EyeSlash"
        name="password"
        type="password"
        control={control}
        rules={{ validate: passwordValidation }}
      />
      <div className="login-form__messages">
        <span className="login-form__signup-message">
          dont have an account?{' '}
          <Link className="login-form__signup" to={'/signup'}>
            Sign Up
          </Link>
        </span>
        <Link to={'/forgot-password'} className="login-form__forgot-password">
          Forgot Password?
        </Link>
      </div>

      <div className="login-form__submit-wrapper">
        <BaseButton type="submit" isLoading={isLoading}>
          Login
        </BaseButton>
      </div>
    </form>
  )
}

export default LoginView
