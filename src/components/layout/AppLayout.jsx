import { Outlet } from 'react-router-dom'
import BottomNav from './BottomNav'

function AppLayout() {
  return (
    <div className="min-h-screen bg-tgtg-desktop-bg flex justify-center">
      <div
        className="relative bg-tgtg-bg w-full min-h-screen"
        style={{ maxWidth: '480px' }}
      >
        <main className="pb-16">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  )
}

export default AppLayout
