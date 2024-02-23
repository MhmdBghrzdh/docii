import './index.scss'

import PropTypes from 'prop-types'
import BaseIcon from '@/components/base/base-icon/BaseIcon'

function Category({ icon, title }) {
  return (
    <div className="category">
      <div className="category__icon-wrapper">
        <BaseIcon name={icon} />
      </div>
      <h3 className="category__title">{title}</h3>
    </div>
  )
}

Category.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Category
