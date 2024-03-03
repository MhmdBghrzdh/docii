import style from './index.module.scss'

import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDoctorById } from '@/stores/doctor/doctorSlice'
import { useParams } from 'react-router-dom'

import DoctorCard from '@/components/view-components/panel/doctors/doctor-card/DoctorCard'
import DateChip from '@/components/general/date-chip/DateChip'

import { getFile } from '@/stores/general/file/fileSlice'

function DoctorView() {
  const effectRan = useRef(true)
  const [isLoading, setIsLoading] = useState(false)
  const [doctor, setDoctor] = useState({})
  const [activeDateChip, setActiveDateChip] = useState(null)
  const [appointmentTimes, setAppointmentTimes] = useState([])
  const { doctorId } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    if (effectRan.current) {
      try {
        const getDoctorInformation = async () => {
          setIsLoading(true)
          const response = await dispatch(getDoctorById(doctorId))
          if (response?.error) throw new Error()

          let doctorResponse = response?.payload?.result[0]
          setDoctor(doctorResponse)
          const times = calculateAppointmentTimes(doctorResponse.presentUntil)
          setAppointmentTimes(times)
          setActiveDateChip(times[0]?.date)
          if (doctorResponse?.link) {
            const response = await dispatch(getFile(doctorResponse.link))
            if (response?.error) throw new Error(response)
            const image = response?.payload?.result
            setDoctor((prevDoctor) => ({ ...prevDoctor, image }))
          }

          setIsLoading(false)
        }

        getDoctorInformation()
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }

    return () => {
      effectRan.current = false
    }
  }, [])

  const calculateAppointmentTimes = (endTime) => {
    const startDate = new Date()
    const endDate = new Date(endTime)
    const timeDifference = endDate.getTime() - startDate.getTime()
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24))

    const appointmentTimes = []
    for (let i = 0; i < daysDifference; i++) {
      const currentDate = new Date(startDate)
      currentDate.setDate(startDate.getDate() + i)
      const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'short' })
      const dayOfMonth = currentDate.getDate()
      appointmentTimes.push({
        dayOfWeek,
        dayOfMonth,
        date: currentDate.toLocaleDateString('en-US')
      })
    }

    return appointmentTimes
  }

  const handleDateClick = (date) => {
    console.log('Clicked date:', date)
    setActiveDateChip(date)
  }

  return (
    !isLoading && (
      <div className={style['doctor-view']}>
        <DoctorCard
          firstName={doctor.firstName}
          lastName={doctor.lastName}
          image={doctor.image}
          categories={doctor.categories}
          score={doctor.score}
        />
        {doctor.biographi && (
          <div className={style['doctor-view__about-wrapper']}>
            <h3 className={style['doctor-view__about-title']}>About</h3>
            <p className={style['doctor-view__about-description']}>{doctor.biographi}</p>
          </div>
        )}
        <div className={style['doctor-view__appointment-times']}>
          {appointmentTimes.map((appointmentTime, index) => (
            <div
              key={index}
              onClick={() => handleDateClick(appointmentTime.date)}
              className={style['doctor-view__date-chip-wrapper']}
            >
              <DateChip
                dayOfWeek={appointmentTime.dayOfWeek}
                dayOfMonth={appointmentTime.dayOfMonth}
                isActive={activeDateChip === appointmentTime.date}
              />
            </div>
          ))}
        </div>
      </div>
    )
  )
}

export default DoctorView
