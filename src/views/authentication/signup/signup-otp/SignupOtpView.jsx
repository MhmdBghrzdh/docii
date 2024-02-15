import './index.scss'

import { useForm } from 'react-hook-form'

import BaseButton from '@/components/base/base-button/BaseButton'
import OtpInput from '@/components/general/otp/OtpInput'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '@/stores/authentication/signup/signupSlice'

function SignupOtpView() {
  const defaultValues = {
    otp: ''
  }
  const { control, handleSubmit } = useForm({ defaultValues })
  const [isLoading, setIsLoading] = useState(false)
  const [isOtpCompleted, setIsOtpCompleted] = useState(true)
  const dispatch = useDispatch()

  const onSubmit = async (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-otp">
      <OtpInput
        name="otp"
        numberOfInputs={5}
        control={control}
        rules={{ required: true }}
        setIsOtpCompleted={setIsOtpCompleted}
      />
      <div className="signup-otp__submit-wrapper">
        <BaseButton type="submit" isLoading={isLoading} disabled={isOtpCompleted}>
          Verify
        </BaseButton>
      </div>
    </form>
  )
}

export default SignupOtpView
