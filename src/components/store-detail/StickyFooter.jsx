import { LAYOUT } from '../../constants/theme'

function StickyFooter({ store }) {
  return (
    <div
      className="sticky bottom-0 left-0 right-0 bg-tgtg-bg border-t border-tgtg-border flex items-center justify-between px-4"
      style={{ height: LAYOUT.stickyFooterHeight }}
    >
      {/* Prices */}
      <div className="flex items-center gap-2">
        <span className="text-tgtg-text-muted text-sm line-through">
          ${store.originalPrice.toFixed(2)}
        </span>
        <span className="text-tgtg-text font-bold text-lg">
          ${store.discountedPrice.toFixed(2)}
        </span>
      </div>

      {/* Reserve button */}
      <button
        className="bg-tgtg-primary text-white font-semibold text-base px-8 py-3 rounded-xl border-none cursor-pointer"
        aria-label={`Reserve for $${store.discountedPrice.toFixed(2)}`}
      >
        Reserve
      </button>
    </div>
  )
}

export default StickyFooter
