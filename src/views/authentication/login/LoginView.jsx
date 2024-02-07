import BaseButton from '@/components/base/base-button/BaseButton'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import BaseIcon from '@/components/base/base-icon/BaseIcon'
import BaseTextInput from '@/components/base/base-text-input/BaseTextInput'

function LoginView() {
  const [test, setTest] = useState(true)
  const { control, handleSubmit } = useForm()

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const formValues = getValues()
  //   console.log('Form values:', formValues)
  //   // ... perform form submission logic
  // }
  const onSubmit = (data) => console.log(data)
  setTimeout(() => {
    setTest(false)
  }, 2000)
  return (
    <>
      <h1>login</h1>
      <BaseButton isLoading={test}>hello</BaseButton>
      <BaseIcon name="Medics" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseTextInput
          placeholder="Enter your name"
          prependIcon="UserOutline"
          appendIcon="EyeSlash"
          name="firstName"
          control={control}
          rules={{ required: { value: true, message: 'This field is assa !' } }}
        />
        <br />
        <BaseTextInput
          placeholder="Enter your name"
          prependIcon="UserOutline"
          appendIcon="EyeSlash"
          name="lastName"
          control={control}
          rules={{ required: { value: true, message: 'This field is required !' } }}
        />
        {/* Other form fields */}
        <br />
        <BaseButton isLoading={test} type="submit">
          submit
        </BaseButton>
      </form>
    </>
  )
}

export default LoginView
