import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { ALLERGENS_TEXT } from '../../constants/theme'

function AllergensSection() {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen((prev) => !prev)
  }

  const ChevronIcon = isOpen ? ChevronUp : ChevronDown

  return (
    <section className="px-4 py-4 border-t border-tgtg-border" aria-label="Ingredients and allergens">
      <button
        onClick={handleToggle}
        className="flex items-center justify-between w-full bg-transparent border-none cursor-pointer p-0"
        aria-expanded={isOpen}
      >
        <h2 className="font-bold text-base text-tgtg-text">
          Ingredients &amp; allergens
        </h2>
        <ChevronIcon size={20} className="text-tgtg-text-secondary shrink-0" />
      </button>

      {isOpen && (
        <p className="text-sm text-tgtg-text-secondary leading-relaxed mt-3">
          {ALLERGENS_TEXT}
        </p>
      )}
    </section>
  )
}

export default AllergensSection
