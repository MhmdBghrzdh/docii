import style from './index.module.scss'

import PropTypes from 'prop-types'

function PresentTime({ time, isActive }) {
  return (
    <span className={`${style['present-time']} ${isActive ? style['present-time_active'] : ''}`}>
      {time}
    </span>
  )
}

PresentTime.propTypes = {
  time: PropTypes.string.isRequired,
  reserved: PropTypes.number.isRequired,
  isActive: PropTypes.bool
}
export default PresentTime
