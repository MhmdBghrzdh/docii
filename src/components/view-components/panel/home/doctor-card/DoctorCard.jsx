import './index.scss'

import PropTypes from 'prop-types'

import CheapScore from '@/components/general/cheap-score/CheapScore'

function DoctorCard({ name, image, category, score }) {
  return (
    <div className="doctor-card">
      <img className="doctor-card__image" src={image} alt={name} />
      <h3 className="doctor-card__name">{name}</h3>
      <span className="doctor-card__category">{category}</span>
      <CheapScore score={score} />
    </div>
  )
}

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default DoctorCard
