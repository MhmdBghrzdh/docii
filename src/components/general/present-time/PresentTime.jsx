import style from './index.module.scss'

import PropTypes from 'prop-types'

function PresentTime({ time, reserved, isActive }) {
  return (
    <div className={`${style['present-time']} ${isActive ? style['present-time_active'] : ''}`}>
      {time}
    </div>
  )
}

PresentTime.propTypes = {
  time: PropTypes.string.isRequired,
  reserved: PropTypes.number.isRequired,
  isActive: PropTypes.bool
}
export default PresentTime
