import { Navigation, ChevronDown } from 'lucide-react'
import { LOCATION } from '../../constants/theme'

function LocationBar() {
  return (
    <div className="flex items-center gap-2 px-4 py-3">
      <Navigation
        size={18}
        className="text-tgtg-primary fill-tgtg-primary shrink-0"
        aria-hidden="true"
      />
      <span className="font-bold text-tgtg-text text-base">
        {LOCATION.label}
      </span>
      <span className="text-tgtg-text-secondary text-sm truncate">
        {LOCATION.area}
      </span>
      <ChevronDown
        size={18}
        className="text-tgtg-text-secondary shrink-0"
        aria-hidden="true"
      />
    </div>
  )
}

export default LocationBar
