import styles from './index.module.scss'

import PropTypes from 'prop-types'

import CheapScore from '@/components/general/cheap-score/CheapScore'

function DoctorCard({ firstName, lastName, image, category, score }) {
  const imageSource = image
    ? `data:image/png;base64,${image}`
    : 'src/assets/images/doctorDefaultPerson.png'

  return (
    <div className={styles['doctor-card']}>
      <img className={styles['doctor-card__image']} src={imageSource} alt={firstName + lastName} />
      <h3 className={styles['doctor-card__name']}>
        {firstName} {lastName}
      </h3>
      <span className={styles['doctor-card__category']}>{category}</span>
      <CheapScore score={score} />
    </div>
  )
}

DoctorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default DoctorCard
