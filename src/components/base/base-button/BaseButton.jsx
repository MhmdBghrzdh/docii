import LoadingSpinner from '@/components/general/loading-spinner/LoadingSpinner'

import PropTypes from 'prop-types'
import style from './index.module.scss'

function BaseButton({
  variant = 'filled',
  isBlock = true,
  isLoading = false,
  type = 'button',
  disabled = false,
  children
}) {
  const buttonBaseClass = style['base-button']
  const buttonVariant = style[`base-button_${variant}`]
  const buttonIsBlock = isBlock ? style['base-button_block'] : ''
  const buttonLoading = isLoading ? style['base-button_loading'] : ''

  return (
    <button
      className={`${buttonBaseClass} ${buttonVariant} ${buttonIsBlock} ${buttonLoading}`}
      type={type}
      disabled={disabled}
    >
      {isLoading ? <LoadingSpinner /> : children}
    </button>
  )
}

export default BaseButton
BaseButton.propTypes = {
  variant: PropTypes.oneOf(['filled', 'text', 'outlined']),
  isBlock: PropTypes.bool,
  isLoading: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool
}
