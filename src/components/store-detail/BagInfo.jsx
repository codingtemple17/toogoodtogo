import { ShoppingBag, Star, Clock } from 'lucide-react'

function BagInfo({ store }) {
  const pickupLabel = store.pickupDay === 'today' ? 'Today' : 'Tomorrow'

  return (
    <section className="px-4 py-4 flex flex-col gap-3" aria-label="Bag information">
      {/* Bag type */}
      <div className="flex items-center gap-2">
        <ShoppingBag size={18} className="text-tgtg-text-secondary shrink-0" aria-hidden="true" />
        <span className="text-sm text-tgtg-text">{store.bagType}</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <Star size={18} className="text-tgtg-star fill-tgtg-star shrink-0" aria-hidden="true" />
        <span className="text-sm text-tgtg-text font-medium">
          {store.rating}
        </span>
        <span className="text-sm text-tgtg-text-secondary">
          ({store.reviewCount})
        </span>
      </div>

      {/* Pickup time */}
      <div className="flex items-center gap-2">
        <Clock size={18} className="text-tgtg-text-secondary shrink-0" aria-hidden="true" />
        <span className="text-sm text-tgtg-text">
          Pick up: {store.pickupWindow}
        </span>
        <span className="bg-tgtg-primary text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {pickupLabel}
        </span>
      </div>
    </section>
  )
}

export default BagInfo
