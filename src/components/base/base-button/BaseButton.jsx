import LoadingSpinner from '@/components/general/loading-spinner/LoadingSpinner'

import PropTypes from 'prop-types'
import './index.scss'

function BaseButton({
  variant = 'filled',
  isBlock = true,
  isLoading = false,
  type = 'button',
  children
}) {
  const buttonBaseClass = 'base-button'
  const buttonVariant = `base-button_${variant}`
  const buttonIsBlock = isBlock ? 'base-button_block' : ''
  const buttonDisable = isLoading ? 'base-button_disable' : ''

  return (
    <button
      className={`${buttonBaseClass} ${buttonVariant} ${buttonIsBlock} ${buttonDisable}`}
      type={type}
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
  children: PropTypes.string
}
