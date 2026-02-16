import { useLocation, useNavigate } from 'react-router-dom'
import { Compass, Search, Heart, User } from 'lucide-react'
import { NAV_TABS, LAYOUT } from '../../constants/theme'

const TAB_ICONS = {
  discover: Compass,
  browse: Search,
  favorites: Heart,
  profile: User,
}

const TAB_ROUTES = {
  discover: '/',
  browse: '/',
  favorites: '/',
  profile: '/',
}

function BottomNav() {
  const location = useLocation()
  const navigate = useNavigate()

  const activeTab = location.pathname === '/' ? 'discover' : null

  function handleTabClick(tabKey) {
    const route = TAB_ROUTES[tabKey]
    navigate(route)
  }

  return (
    <nav
      className="absolute bottom-0 left-0 right-0 bg-tgtg-bg border-t border-tgtg-border flex items-center justify-around"
      style={{ height: LAYOUT.bottomNavHeight }}
      aria-label="Main navigation"
    >
      {NAV_TABS.map((tab) => {
        const Icon = TAB_ICONS[tab.key]
        const isActive = activeTab === tab.key

        return (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className="flex flex-col items-center justify-center gap-1 flex-1 h-full bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon
              size={24}
              className={isActive ? 'text-tgtg-primary' : 'text-tgtg-text-secondary'}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span
              className={`text-xs ${isActive ? 'text-tgtg-primary font-semibold' : 'text-tgtg-text-secondary'}`}
            >
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNav
