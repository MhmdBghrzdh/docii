import style from './index.module.scss'
import { Link } from 'react-router-dom'

import BaseButton from '@/components/base/base-button/BaseButton'
import BaseIcon from '@/components/base/base-icon/BaseIcon'
import SearchBar from '@/components/general/search-bar/SearchBar'
import Category from '@/components/view-components/panel/category/Category'
import DoctorCard from '@/components/view-components/panel/home/doctor-card/DoctorCard'

import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getCategories,
  setCategories,
  setImageInCategory
} from '@/stores/general/category/categorySlice'
import { getFile } from '@/stores/general/file/fileSlice'

function HomeView() {
  const testDoctorList = [
    {
      name: 'Dr. Marcus Horizon',
      category: 'Chardiologist',
      image: 'src/assets/images/doctor-test.png',
      score: 4.7
    },
    {
      name: 'Dr. Marcus Horizon',
      category: 'Chardiologist',
      image: 'src/assets/images/doctor-test.png',
      score: 4.7
    },
    {
      name: 'Dr. Marcus Horizon',
      category: 'Chardiologist',
      image: 'src/assets/images/doctor-test.png',
      score: 4.7
    },
    {
      name: 'Dr. Marcus Horizon',
      category: 'Chardiologist',
      image: 'src/assets/images/doctor-test.png',
      score: 4.7
    },
    {
      name: 'Dr. Marcus Horizon',
      category: 'Chardiologist',
      image: 'src/assets/images/doctor-test.png',
      score: 4.7
    },
    {
      name: 'Dr. Marcus Horizon',
      category: 'Chardiologist',
      image: 'src/assets/images/doctor-test.png',
      score: 4.7
    },
    {
      name: 'Dr. Marcus Horizon',
      category: 'Chardiologist',
      image: 'src/assets/images/doctor-test.png',
      score: 4.7
    }
  ]
  const categoryStore = useSelector((state) => state.category.categories)
  const [isLoading, setIsLoading] = useState(false)
  const effectRan = useRef(true)

  const dispatch = useDispatch()

  useEffect(() => {

    if (effectRan.current) {
      const fetchHomePageData = async () => {
        try {
          setIsLoading(true)
          const response = await dispatch(getCategories())
          if (response?.error) throw new Error(response)
          const categories = response?.payload?.result

          dispatch(setCategories(categories))

          for (let index = 0; index < categories.length; index++) {
            const response = await dispatch(getFile(categories[index].link))
            if (response?.error) throw new Error(response)
            const image = response?.payload?.result
            dispatch(setImageInCategory({ image, index }))
          }
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
        }
      }
      fetchHomePageData()

      return () => {
        effectRan.current = false
      }
    }
  }, [])

  return (
    !isLoading && (
      <div className={style['home-view']}>
        <div className={style['home-view__header']}>
          <span className={style['home-view__header-text']}>
            Find your desire <br /> health solution
          </span>
          <div className={style['home-view__header-icon']}>
            <BaseIcon name="Notification" />
          </div>
        </div>
        <SearchBar placeholder="Search doctor, drugs, articles..." />
        <section className={style['home-view__categories']}>
          {categoryStore.map((category) => (
            <Category
              title={category.name}
              key={category._id}
              image={category.image}
              isLoading={isLoading}
            />
          ))}
        </section>
        <section className={style['home-view__ads']}>
          <div className={style['home-view__ads-content']}>
            <h2 className={style['home-view__ads-text']}>
              Early protection for <br /> your family health
            </h2>
            <BaseButton isBlock={false}>Learn more </BaseButton>
          </div>
          <img src="src\assets\images\doctor-ads-woman.png" alt="doctor" />
        </section>
        <section className={style['home-view__top-doctor-container']}>
          <div className={style['home-view__top-doctor-header']}>
            <h3 className={style['home-view__top-doctor-title']}>Top Doctor</h3>
            <Link className={style['home-view__top-doctor-all']} to={'/top-doctors'}>
              See all
            </Link>
          </div>
          <div className={style['home-view__top-doctor-list']}>
            {testDoctorList.map((doctor, index) => (
              <DoctorCard
                name={doctor.name}
                image={doctor.image}
                category={doctor.category}
                score={doctor.score}
                key={index}
              />
            ))}
          </div>
        </section>
      </div>
    )
  )
}

export default HomeView
