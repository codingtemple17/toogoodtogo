import { useNavigate } from 'react-router-dom'
import { Star, Heart } from 'lucide-react'
import { CARD } from '../../constants/theme'

function StoreCard({ store }) {
  const navigate = useNavigate()

  function handleCardClick() {
    navigate(`/store/${store.id}`)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCardClick()
    }
  }

  const imageUrl = store.image || `https://picsum.photos/400/250?random=${store.id}`
  const pickupLabel = store.pickupDay === 'today' ? 'Today' : 'Tomorrow'

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`${store.name} - ${store.bagType}`}
      className="shrink-0 bg-tgtg-bg rounded-xl overflow-hidden cursor-pointer transition-shadow duration-200 hover:shadow-lg snap-start"
      style={{ width: CARD.width }}
    >
      {/* Image area */}
      <div className="relative" style={{ height: CARD.imageHeight }}>
        <img
          src={imageUrl}
          alt={`Food from ${store.name}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Badge overlay - top left */}
        {store.badge && (
          <span className="absolute top-3 left-3 bg-white/90 text-tgtg-text text-xs font-semibold px-2.5 py-1 rounded-full">
            {store.badge}
          </span>
        )}

        {/* Rating overlay - top right */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full">
          <Star size={12} className="text-tgtg-star fill-tgtg-star" />
          <span>{store.rating}</span>
        </div>

        {/* Store logo - bottom left, overlapping edge */}
        <div
          className="absolute -bottom-4 left-3 rounded-full flex items-center justify-center border-2 border-white text-white text-xs font-bold"
          style={{
            width: CARD.logoSize,
            height: CARD.logoSize,
            backgroundColor: store.logoColor,
          }}
          aria-hidden="true"
        >
          {store.logoInitials}
        </div>
      </div>

      {/* Text content */}
      <div className="px-3 pt-5 pb-3">
        {/* Store name + heart */}
        <div className="flex items-start justify-between">
          <h3 className="font-bold text-base text-tgtg-text leading-tight pr-2">
            {store.name}
          </h3>
          <Heart
            size={20}
            className="text-tgtg-primary shrink-0 mt-0.5"
            strokeWidth={2}
            aria-label="Save to favorites"
          />
        </div>

        {/* Bag type */}
        <p className="text-tgtg-text-secondary text-[13px] mt-1">
          {store.bagType}
        </p>

        {/* Pickup info */}
        <p className="text-tgtg-text-secondary text-[13px] mt-0.5">
          Pick up {pickupLabel} {store.pickupWindow} · {store.distance}
        </p>

        {/* Dashed divider */}
        <div className="border-t border-dashed border-tgtg-border my-2.5" />

        {/* Price row */}
        <div className="flex items-center justify-end gap-2">
          <span className="text-tgtg-text-muted text-sm line-through">
            ${store.originalPrice.toFixed(2)}
          </span>
          <span className="text-tgtg-text font-bold text-base">
            ${store.discountedPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  )
}

export default StoreCard
