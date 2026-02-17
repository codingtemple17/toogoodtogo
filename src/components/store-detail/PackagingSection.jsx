import { Package, ShoppingBag, Info } from 'lucide-react'
import { BRING_BAG_TEXT } from '../../constants/theme'

function PackagingSection({ store }) {
  const packaging = store.packagingInfo || {}

  return (
    <section className="px-4 py-4 border-t border-tgtg-border" aria-label="Packaging">
      <h2 className="font-bold text-base text-tgtg-text mb-3">
        Packaging
      </h2>

      {/* Two side-by-side cards */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex flex-col items-center gap-2 bg-tgtg-gray-bg rounded-xl py-4 px-3">
          <Package size={24} className="text-tgtg-text-secondary" />
          <span className="text-sm font-medium text-tgtg-text">Container</span>
          <span className="text-xs text-tgtg-text-secondary">
            {packaging.container || 'Not specified'}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 bg-tgtg-gray-bg rounded-xl py-4 px-3">
          <ShoppingBag size={24} className="text-tgtg-text-secondary" />
          <span className="text-sm font-medium text-tgtg-text">Carrier bag</span>
          <span className="text-xs text-tgtg-text-secondary">
            {packaging.carrierBag || 'Not specified'}
          </span>
        </div>
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-2 bg-tgtg-gray-bg rounded-xl px-4 py-3">
        <Info size={16} className="text-tgtg-text-secondary shrink-0 mt-0.5" />
        <p className="text-xs text-tgtg-text-secondary leading-relaxed">
          {BRING_BAG_TEXT}
        </p>
      </div>
    </section>
  )
}

export default PackagingSection
