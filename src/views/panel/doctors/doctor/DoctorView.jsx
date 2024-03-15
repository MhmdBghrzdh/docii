import style from './index.module.scss'

import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDoctorById, getPresentTimes } from '@/stores/doctor/doctorSlice'
import { useParams } from 'react-router-dom'

import DoctorCard from '@/components/view-components/panel/doctors/doctor-card/DoctorCard'
import DateChip from '@/components/general/date-chip/DateChip'
import PresentTime from '@/components/general/present-time/PresentTime'
import BaseButton from '@/components/base/base-button/BaseButton.jsx'

import { getFile } from '@/stores/general/file/fileSlice'
import { reserveDoctor } from '@/stores/profile/profileSlice.js'

import { toast } from 'react-toastify'

function DoctorView() {
  const effectRan = useRef(true)
  const [isLoading, setIsLoading] = useState(false)
  const [doctor, setDoctor] = useState({})
  const [activeDateChip, setActiveDateChip] = useState(null)
  const [activePresentTime, setActivePresentTime] = useState(null)
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true)
  const [appointmentTimes, setAppointmentTimes] = useState([])
  const [presentTimes, setPresentTimes] = useState([])
  const { doctorId } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    if (effectRan.current) {
      try {
        const getDoctorInformation = async () => {
          setIsLoading(true)
          const response = await dispatch(getDoctorById(doctorId))
          if (response?.error) throw new Error(response)

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

  useEffect(() => {
    if (activePresentTime && activeDateChip)
      setSubmitButtonDisable(false)
    else setSubmitButtonDisable(true)
  }, [activePresentTime, activeDateChip])
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

  const handleDateClick = async (date) => {
    setActiveDateChip(date)
    setActivePresentTime(null)
    try {
      const response = await dispatch(getPresentTimes({ id: doctorId, date }))
      if (response?.error) throw new Error(response)
      setPresentTimes(response?.payload?.result)
    } catch (error) {
      console.log(error)
    }
  }

  const handleTimeClick = (id) => {
    setActivePresentTime(id)
  }

  const reserve = async () => {
    try {
      await dispatch(reserveDoctor({ id: activePresentTime }))
      toast.success('successfully reserved')
    } catch (error) {
      console.log(error)
    }
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
            <div key={index} onClick={() => handleDateClick(appointmentTime.date)}>
              <DateChip
                dayOfWeek={appointmentTime.dayOfWeek}
                dayOfMonth={appointmentTime.dayOfMonth}
                isActive={activeDateChip === appointmentTime.date}
              />
            </div>
          ))}
        </div>
        <hr className={style['doctor-view__divider']} />
        <div className={style['doctor-view__present-times']}>
          {presentTimes.map((presentTime) => {
            return (
              <button
                key={presentTime.id}
                disabled={presentTime.reserved}
                onClick={() => handleTimeClick(presentTime.id)}
                className={`${style['doctor-view__present-times-wrapper']} ${
                  presentTime.reserved ? style['doctor-view__present-times-wrapper_disabled'] : ''
                }`}
              >
                <PresentTime
                  time={presentTime.time}
                  reserved={presentTime.reserved}
                  isActive={activePresentTime === presentTime.id}
                />
              </button>
            )
          })}
        </div>
        <div className={style['doctor-view__submit-btn']} onClick={() => reserve()}>
          <BaseButton type="submit" isLoading={isLoading} disabled={submitButtonDisable}>
            Book Appointment
          </BaseButton>
        </div>

      </div>
    )
  )
}

export default DoctorView
