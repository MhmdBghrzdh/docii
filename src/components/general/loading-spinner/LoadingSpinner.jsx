import style from './index.module.scss'

// TODO : add count props for counting bullets

function LoadingSpinner() {
  return (
    <div className={style['loading-spinner']}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default LoadingSpinner
