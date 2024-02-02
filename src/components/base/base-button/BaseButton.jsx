import LoadingSpinner from '@/components/general/loading-spinner/LoadingSpinner'

import PropTypes from 'prop-types'
import './index.scss'

function BaseButton({ text, variant = 'filled', isBlock = true, isLoading = true }) {
  const buttonBaseClass = 'base-button'
  const buttonVariant = `base-button_${variant}`
  const buttonIsBlock = isBlock ? 'base-button_block' : ''

  return (
    <button className={`${buttonBaseClass} ${buttonVariant} ${buttonIsBlock}`}>
      {isLoading ? <LoadingSpinner /> : text}
    </button>
  )
}

export default BaseButton
BaseButton.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['filled', 'text', 'outlined']),
  isBlock: PropTypes.bool,
  isLoading: PropTypes.bool
}
