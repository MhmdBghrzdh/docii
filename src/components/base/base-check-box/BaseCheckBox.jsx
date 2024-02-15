import './index.scss'

import PropTypes from 'prop-types'

import { useController } from 'react-hook-form'

const BaseCheckBox = ({ name, control, rules, children }) => {
  const { field } = useController({ name, control, rules })
  const handleCheckboxClick = () => {
    field.onChange(!field.value)
  }
  const checkBoxInputModifier = field.value ? 'base-checkbox__input_active' : ''

  return (
    <div className="base-checkbox" onClick={handleCheckboxClick}>
      <input
        {...field}
        type="checkbox"
        className={`base-checkbox__input ${checkBoxInputModifier}`}
      />
      <p className="base-checkbox__text">{children}</p>
    </div>
  )
}

BaseCheckBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  control: PropTypes.object,
  children: PropTypes.array
}

export default BaseCheckBox
