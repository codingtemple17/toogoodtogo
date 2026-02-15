import LocationBar from '../components/layout/LocationBar'
import CategoryPills from '../components/discover/CategoryPills'
import StoreSection from '../components/discover/StoreSection'
import { stores } from '../data/mockData'
import { SECTION_TITLES } from '../constants/theme'

const topPicks = stores.filter((s) => s.badge === 'Popular')
const localHeroes = stores.filter((s) => s.badge === 'Local Hero')

function DiscoverPage() {
  return (
    <section aria-label="Discover">
      <LocationBar />
      <CategoryPills />
      <StoreSection title={SECTION_TITLES.topPicks} stores={topPicks} />
      <StoreSection title={SECTION_TITLES.localHeroes} stores={localHeroes} />
      <div className="h-6" />
    </section>
  )
}

export default DiscoverPage
