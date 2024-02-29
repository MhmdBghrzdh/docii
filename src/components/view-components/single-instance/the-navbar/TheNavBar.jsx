import './index.scss'

import BaseIcon from '@/components/base/base-icon/BaseIcon'

import { NAV_LIST } from '@/constants/common/panel/shared/nav-list.constants'
import { NavLink } from 'react-router-dom'

function TheNavBar() {
  return (
    <nav className="nav">
      {NAV_LIST.map((item, index) => {
        return (
          <NavLink
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? 'pending' : '',
                isActive ? 'active' : '',
                isTransitioning ? 'transitioning' : '',
                'nav__item'
              ].join(' ')
            }
            key={index}
            to={item.path}
          >
            <BaseIcon name={item.name} />
          </NavLink>
        )
      })}
    </nav>
  )
}

export default TheNavBar
