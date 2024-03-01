import styles from './index.module.scss'

import PropTypes from 'prop-types'

import CheapScore from '@/components/general/cheap-score/CheapScore'

function DoctorCard({ name, image, category, score }) {
  return (
    <div className={styles['doctor-card']}>
      <img className={styles["doctor-card__image"]} src={image} alt={name} />
      <div className={styles['doctor-card__details']}>
        <h3 className={styles['doctor-card__name']}>{name}</h3>
        <span className={styles['doctor-card__category']}>{category}</span>
        <CheapScore score={score} />
      </div>
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
