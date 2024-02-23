import './index.scss'

import PropTypes from 'prop-types'

import BaseIcon from '@/components/base/base-icon/BaseIcon'

function CheapScore({ score }) {
  return (
    <div className="score-container">
      <div className="score-container__icon">
        <BaseIcon name="Star" />
      </div>
      <span className="score-container__score">{score}</span>
    </div>
  )
}

CheapScore.propTypes = {
  score: PropTypes.number.isRequired
}

export default CheapScore
