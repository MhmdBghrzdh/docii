import style from './index.module.scss'

import DoctorCard from '@/components/view-components/panel/doctors/doctor-card/DoctorCard'

function TopDoctorsView() {
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
    <div className={style['top-doctors']}>
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
  )
}

export default TopDoctorsView
