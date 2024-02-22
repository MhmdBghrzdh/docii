import './index.scss'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import BaseTextInput from '@/components/base/base-text-input/BaseTextInput'
import BaseButton from '@/components/base/base-button/BaseButton'
import BaseCheckBox from '@/components/base/base-check-box/BaseCheckBox'

import { setProfile } from '@/stores/general/profile/profileSlice'
import { signup } from '@/stores/authentication/signup/signupSlice'

import { signupMapper } from '@/mappers/authentication'

function SignupUserInfoView() {
  const defaultValues = {
    nationalCode: '',
    firstName: '',
    lastName: '',
    password: '',
    acceptTerms: false
  }
  const { control, handleSubmit, watch } = useForm({ defaultValues })
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profileStore = useSelector((state) => state.profile)

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
      const payloadSignup = signupMapper({
        nationalCode: data.nationalCode,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
        phoneNumber: profileStore.phoneNumbe
      })
      dispatch(setProfile(data))
      const signupHeaders = { token: profileStore.token }
      const response = await dispatch(signup({ data: payloadSignup, headers: signupHeaders }))
      if (response?.error) throw new Error(response)
      navigate('/')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <BaseTextInput
        placeholder="Enter your national code"
        prependIcon="Barcode"
        name="nationalCode"
        control={control}
        rules={{
          required: 'national code is required',
          pattern: {
            value: /^[0-9]{10}$/,
            message: 'national code must be 10 digits'
          }
        }}
      />
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
        <BaseButton type="submit" isLoading={isLoading} disabled={!watch('acceptTerms')}>
          Sign Up
        </BaseButton>
      </div>
    </form>
  )
}

export default SignupUserInfoView
