import StoreCard from './StoreCard'
import { CARD } from '../../constants/theme'

function StoreSection({ title, stores }) {
  if (!stores || stores.length === 0) {
    return null
  }

  return (
    <section aria-label={title} className="mt-5">
      {/* Header */}
      <div className="flex items-center justify-between px-4 mb-3">
        <h2 className="font-bold text-xl text-tgtg-text">
          {title}
        </h2>
        <button
          className="text-tgtg-primary text-sm font-semibold bg-transparent border-none cursor-pointer"
          aria-label={`See all ${title}`}
        >
          See all
        </button>
      </div>

      {/* Horizontal scroll row */}
      <div
        className="flex overflow-x-auto hide-scrollbar pl-4 pr-2"
        style={{ gap: CARD.gap }}
      >
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </section>
  )
}

export default StoreSection
