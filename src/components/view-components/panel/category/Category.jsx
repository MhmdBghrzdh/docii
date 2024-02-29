import './index.scss'

import PropTypes from 'prop-types'
// import BaseIcon from '@/components/base/base-icon/BaseIcon'

function Category({ title, image, isLoading }) {
  const imageSource = image ? `data:image/png;base64,${image}` : null
  return (
    !isLoading && (
      <div className="category">
        <div className="category__icon-wrapper">
          <img src={imageSource} alt={title} />
        </div>
        <h3 className="category__title">{title}</h3>
      </div>
    )
  )
}

Category.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  isLoading: PropTypes.bool
}

export default Category
