import './index.scss'

import { useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import BaseIcon from '@/components/base/base-icon/BaseIcon'

function TheHeader({ title, prependIcon, appendIcon }) {
  const navigate = useNavigate()
  const pushToPreviousRoute = () => {
    navigate(-1)
  }
  return (
    <header className="header">
      {prependIcon && (
        <div className="header__icon" onClick={pushToPreviousRoute}>
          <BaseIcon name={prependIcon} />
        </div>
      )}
      {title && <h1 className="header__title">{title}</h1>}
      {appendIcon && (
        <div className="header__icon">
          <BaseIcon name={appendIcon} />
        </div>
      )}
    </header>
  )
}

TheHeader.propTypes = {
  title: PropTypes.string,
  prependIcon: PropTypes.string,
  appendIcon: PropTypes.string
}

export default TheHeader
