import { MapPin } from 'lucide-react'

function DirectionsSection({ store }) {
  return (
    <section className="px-4 py-4 border-t border-tgtg-border" aria-label="Directions">
      {/* Address */}
      <div className="flex items-start gap-2 mb-4">
        <MapPin size={18} className="text-tgtg-primary shrink-0 mt-0.5" />
        <p className="text-sm text-tgtg-text">{store.address}</p>
      </div>

      {/* Map placeholder */}
      <div
        className="w-full rounded-xl bg-tgtg-gray-bg flex items-center justify-center mb-4 overflow-hidden"
        style={{ height: '180px' }}
        aria-label="Map showing store location"
      >
        <div className="flex flex-col items-center gap-2 text-tgtg-text-secondary">
          <MapPin size={32} />
          <span className="text-sm">Map view</span>
        </div>
      </div>

      {/* Get directions button */}
      <button
        className="w-full py-3 rounded-xl border-2 border-tgtg-primary text-tgtg-primary font-semibold text-sm bg-transparent cursor-pointer"
        aria-label="Get directions to store"
      >
        Get directions
      </button>
    </section>
  )
}

export default DirectionsSection
