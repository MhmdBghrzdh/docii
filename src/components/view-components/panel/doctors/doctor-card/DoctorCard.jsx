import styles from './index.module.scss'

import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import CheapScore from '@/components/general/cheap-score/CheapScore'
import BaseIcon from '@/components/base/base-icon/BaseIcon'

function DoctorCard({ firstName, lastName, image, category, score, id }) {
  const imageSource = image
    ? `data:image/png;base64,${image}`
    : 'src/assets/images/doctorDefaultPerson.png'

  const navigate = useNavigate() 

  const navigateToDoctorPage = (doctorId) => {
    console.log(doctorId)
    navigate(`/doctor/${doctorId}`)
  }
  return (
    <div className={styles['doctor-card']} onClick={navigateToDoctorPage(id)}>
      <img className={styles['doctor-card__image']} src={imageSource} alt={firstName + lastName} />
      <div className={styles['doctor-card__details']}>
        <h3 className={styles['doctor-card__name']}>
          {firstName} {lastName}
        </h3>
        <span className={styles['doctor-card__category']}>{category}</span>
        <CheapScore score={score} />
      </div>
    </div>
  )
}

DoctorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
}

export default DoctorCard
