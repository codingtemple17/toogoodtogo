import { Outlet, useLocation } from 'react-router-dom'
import BottomNav from './BottomNav'

function AppLayout() {
  const location = useLocation()
  const isStoreDetail = location.pathname.startsWith('/store/')

  return (
    <div className="min-h-screen bg-tgtg-desktop-bg flex justify-center">
      <div
        className="relative bg-tgtg-bg w-full min-h-screen"
        style={{ maxWidth: '480px' }}
      >
        <main className={isStoreDetail ? '' : 'pb-16'}>
          <Outlet />
        </main>
        {!isStoreDetail && <BottomNav />}
      </div>
    </div>
  )
}

export default AppLayout
