import styles from './index.module.scss'
import { SCHEDULE_TABS } from '@/constants/common/panel/schedules/schedule-tabs.constants.js'
import BaseTabs from '@/components/base/base-tabs/BaseTabs.jsx'
import { useState } from 'react'

function SchedulesView() {
  const [activeScheduleTab, setActiveScheduleTab] = useState(0)
  const handleTabClick = (index) => {
    setActiveScheduleTab(index)
  }
  return <div className={styles['schedules-view']}>

    <BaseTabs tabs={SCHEDULE_TABS} activeTab={activeScheduleTab} onClick={(index) => handleTabClick(index)}
              className={styles['schedule-view__schedule-tabs']} />

  </div>
}

export default SchedulesView
