import { MapPin, ChevronRight } from 'lucide-react'

function StoreAddress({ store }) {
  return (
    <section className="px-4 py-3 border-t border-tgtg-border" aria-label="Store address">
      <div className="flex items-start gap-2">
        <MapPin size={18} className="text-tgtg-primary shrink-0 mt-0.5" aria-hidden="true" />
        <div className="flex-1">
          <p className="text-sm text-tgtg-primary font-medium">
            {store.address}
          </p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-tgtg-text-secondary">
              More information about the store
            </span>
            <ChevronRight size={18} className="text-tgtg-text-secondary shrink-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreAddress
