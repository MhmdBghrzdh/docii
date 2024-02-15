import './index.scss'
import { Outlet } from 'react-router-dom'
import { Bounce, ToastContainer } from 'react-toastify'
import { useLocation } from 'react-router-dom'

import TheHeader from '@/components/view-components/single-instance/the-header/TheHeader'

import useRouteTitle from '@/hooks/useRouteTitle'

function DefaultLayout() {
  const location = useLocation()
  const title = useRouteTitle(location.pathname)

  return (
    <>
      <TheHeader title={title} prependIcon="ArrowLeft" />
      <main className="main">
        <Outlet />
      </main>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  )
}

export default DefaultLayout
