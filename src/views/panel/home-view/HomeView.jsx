import './index.scss'
import { Link } from 'react-router-dom'

import BaseButton from '@/components/base/base-button/BaseButton'
import BaseIcon from '@/components/base/base-icon/BaseIcon'
import SearchBar from '@/components/general/search-bar/SearchBar'
import Category from '@/components/view-components/panel/category/Category'
import DoctorCard from '@/components/view-components/panel/home/doctor-card/DoctorCard'

import { HOME_CATEGORIES } from '@/constants/common/panel/home/views/home-categories'

import { useState } from 'react'

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
  return (
    <div className="home-view">
      <div className="home-view__header">
        <span className="home-view__header-text">
          Find your desire <br /> health solution
        </span>
        <div className="home-view__header-icon">
          <BaseIcon name="Notification" />
        </div>
      </div>
      <SearchBar placeholder="Search doctor, drugs, articles..." />
      <section className="home-view__categories">
        {HOME_CATEGORIES.map((category, index) => (
          <Category icon={category.icon} title={category.title} key={index} />
        ))}
      </section>
      <section className="home-view__ads">
        <div className="home-view__ads-content">
          <h2 className="home-view__ads-text">
            Early protection for <br /> your family health
          </h2>
          <BaseButton isBlock={false}>Learn more </BaseButton>
        </div>
        <img src="src\assets\images\doctor-ads-woman.png" alt="doctor" />
      </section>
      <section className="home-view__top-doctor-container">
        <div className="home-view__top-doctor-header">
          <h3 className="home-view__top-doctor-title">Top Doctor</h3>
          <Link className="home-view__top-doctor-all" to={'/top-doctors'}>
            See all
          </Link>
        </div>
        <div className="home-view__top-doctor-list">
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
}

export default HomeView
