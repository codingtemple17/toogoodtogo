import { useParams } from 'react-router-dom'
import { stores } from '../data/mockData'
import HeroImage from '../components/store-detail/HeroImage'
import BagInfo from '../components/store-detail/BagInfo'
import StoreAddress from '../components/store-detail/StoreAddress'
import AboutBag from '../components/store-detail/AboutBag'
import RatingsSection from '../components/store-detail/RatingsSection'
import DirectionsSection from '../components/store-detail/DirectionsSection'
import PickupInstructions from '../components/store-detail/PickupInstructions'
import PackagingSection from '../components/store-detail/PackagingSection'
import AllergensSection from '../components/store-detail/AllergensSection'
import StickyFooter from '../components/store-detail/StickyFooter'

function StoreDetailPage() {
  const { id } = useParams()
  const store = stores.find((s) => s.id === Number(id))

  if (!store) {
    return (
      <section className="p-4" aria-label="Store not found">
        <h1 className="text-xl font-bold text-tgtg-text">Store not found</h1>
        <p className="text-tgtg-text-secondary mt-2">
          The store you are looking for does not exist.
        </p>
      </section>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <HeroImage store={store} />
        <BagInfo store={store} />
        <StoreAddress store={store} />
        <AboutBag store={store} />
        <RatingsSection store={store} />
        <DirectionsSection store={store} />
        <PickupInstructions />
        <PackagingSection store={store} />
        <AllergensSection store={store} />
      </div>
      <StickyFooter store={store} />
    </div>
  )
}

export default StoreDetailPage
