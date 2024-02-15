import './index.scss'

import { useForm } from 'react-hook-form'

import BaseTextInput from '@/components/base/base-text-input/BaseTextInput'
import BaseButton from '@/components/base/base-button/BaseButton'
import BaseCheckBox from '@/components/base/base-check-box/BaseCheckBox'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '@/stores/authentication/signup/signupSlice'
import { Link } from 'react-router-dom'

function SignupView() {
  const defaultValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    password: '',
    acceptTerms: false
  }
  const { control, handleSubmit } = useForm({ defaultValues })
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const validatePassword = (value) => {
    if (!value) {
      return 'Password is required'
    }
    if (value.length < 8) {
      return 'Password must be at least 8 characters long'
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return 'Password must contain at least one uppercase letter'
    }
    if (!/(?=.*\d)/.test(value)) {
      return 'Password must contain at least one digit'
    }
    if (!/(?=.*[!@#$%^&*])/.test(value)) {
      return 'Password must contain at least one special character'
    }
    return true
  }

  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        mobileNumber: data.phoneNumber,
        password: data.password
      }
      await dispatch(signup(payload))
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <BaseTextInput
        placeholder="Enter your first name"
        prependIcon="UserOutline"
        name="firstName"
        control={control}
        rules={{ required: 'first name is required' }}
      />
      <BaseTextInput
        placeholder="Enter your last name"
        prependIcon="UserOutline"
        name="lastName"
        control={control}
        rules={{ required: 'last name is required' }}
      />
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
        rules={{ validate: validatePassword }}
      />
      <BaseCheckBox name="acceptTerms" control={control}>
        I agree to the medidoc <mark className="signup-form__text-mark">Terms of Service</mark> and{' '}
        <mark className="signup-form__text-mark">Privacy Policy</mark>
      </BaseCheckBox>
      <div className="signup-form__submit-wrapper">
        <BaseButton type="submit" isLoading={isLoading}>
          Sign Up
        </BaseButton>
      </div>
    </form>
  )
}

export default SignupView
