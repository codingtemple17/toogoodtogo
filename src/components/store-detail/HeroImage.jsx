import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Share2, Heart } from 'lucide-react'
import { HERO_IMAGE_HEIGHT, STORE_LOGO_SIZE } from '../../constants/theme'

function HeroImage({ store }) {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  const imageUrl = store.image || `https://picsum.photos/480/300?random=${store.id}`

  return (
    <div className="relative" style={{ height: HERO_IMAGE_HEIGHT }}>
      <img
        src={imageUrl}
        alt={`Food from ${store.name}`}
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Back button - top left */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center cursor-pointer border-none"
        aria-label="Go back"
      >
        <ArrowLeft size={20} className="text-tgtg-text" />
      </button>

      {/* Share and heart - top right */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <button
          className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center cursor-pointer border-none"
          aria-label="Share store"
        >
          <Share2 size={18} className="text-tgtg-text" />
        </button>
        <button
          className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center cursor-pointer border-none"
          aria-label="Save to favorites"
        >
          <Heart size={18} className="text-tgtg-primary" />
        </button>
      </div>

      {/* Bags left badge - bottom left */}
      {store.bagsLeft > 0 && (
        <span
          className="absolute bottom-16 left-4 text-tgtg-primary text-xs font-bold px-3 py-1.5 rounded-md"
          style={{ backgroundColor: '#FFF8DC' }}
        >
          {store.bagsLeft} left
        </span>
      )}

      {/* Store logo + name - bottom */}
      <div className="absolute bottom-4 left-4 flex items-center gap-3">
        <div
          className="rounded-full flex items-center justify-center text-white text-sm font-bold border-2 border-white shrink-0"
          style={{
            width: STORE_LOGO_SIZE,
            height: STORE_LOGO_SIZE,
            backgroundColor: store.logoColor,
          }}
          aria-hidden="true"
        >
          {store.logoInitials}
        </div>
        <h1 className="text-white font-bold text-lg drop-shadow-sm">
          {store.name}
        </h1>
      </div>
    </div>
  )
}

export default HeroImage
