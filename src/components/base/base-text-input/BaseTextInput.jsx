import './index.scss'

import PropTypes from 'prop-types'

import { useController } from 'react-hook-form'
import BaseIcon from '@/components/base/base-icon/BaseIcon'

const BaseTextInput = ({
  name,
  label,
  placeholder,
  prependIcon,
  appendIcon,
  control,
  rules = {},
  ...props
}) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { errors }
  } = useController({ name, control, rules })

  return (
    <div className="base-input">
      {label && (
        <label htmlFor={name} className="base-input__label">
          {label}
        </label>
      )}
      {prependIcon && (
        <div className="base-input__prepend-icon">
          <BaseIcon name={prependIcon} />
        </div>
      )}
      <input
        {...field}
        {...props}
        placeholder={placeholder}
        className={`base-input__input ${invalid && isTouched ? 'is-invalid' : ''}`}
      />
      {appendIcon && (
        <div className="base-input__append-icon">
          <BaseIcon name={appendIcon} />
        </div>
      )}
      {errors[name] && isTouched && (
        <span className="base-input__error-message">{errors[name].message}</span>
      )}
    </div>
  )
}

BaseTextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  prependIcon: PropTypes.string,
  appendIcon: PropTypes.string,
  rules: PropTypes.object
}

export default BaseTextInput
