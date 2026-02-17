import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { ALLERGENS_TEXT } from '../../constants/theme'

function AllergensSection() {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  function handleToggle() {
    const willOpen = !isOpen
    setIsOpen(willOpen)
    if (willOpen) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }, 50)
    }
  }

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
        <ChevronDown
          size={20}
          className={`text-tgtg-text-secondary shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="mt-3" ref={contentRef}>
          <p className="text-sm text-tgtg-text-secondary leading-relaxed">
            {ALLERGENS_TEXT}
          </p>
          {/* DIETARY RESTRICTION SYMBOLS WILL BE ADDED HERE BY VICTOR */}
        </div>
      )}
    </section>
  )
}

export default AllergensSection
