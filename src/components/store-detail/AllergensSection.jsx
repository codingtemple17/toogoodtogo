import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { ALLERGENS_TEXT } from '../../constants/theme'
import veganSymbol from '../../../assets/best_vegan.svg'
import dairyFreeSymbol from '../../../assets/best_dairy_free.svg'
import glutenFreeSymbol from '../../../assets/best_gluten_free.svg'
import nutFreeSymbol from '../../../assets/best_nut_free.svg'

const DIETARY_SYMBOLS = {
  vegan: { src: veganSymbol, alt: 'Vegan certified' },
  dairy_free: { src: dairyFreeSymbol, alt: 'Dairy free' },
  gluten_free: { src: glutenFreeSymbol, alt: 'Gluten free' },
  nut_free: { src: nutFreeSymbol, alt: 'Nut free' },
}

function AllergensSection({ store }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  function handleToggle() {
    const willOpen = !isOpen
    setIsOpen(willOpen)
    if (willOpen) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
      }, 50)
    }
  }

  const symbols = store?.dietarySymbols ?? []

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
        <div className="mt-3" ref={contentRef} style={{ paddingBottom: LAYOUT.stickyFooterHeight }}>
          <p className="text-sm text-tgtg-text-secondary leading-relaxed">
            {ALLERGENS_TEXT}
          </p>
          {symbols.length > 0 && (
            <div className="flex gap-3 mt-4">
              {symbols.map((key) => {
                const symbol = DIETARY_SYMBOLS[key]
                if (!symbol) return null
                return (
                  <img
                    key={key}
                    src={symbol.src}
                    alt={symbol.alt}
                    className="h-20"
                  />
                )
              })}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

export default AllergensSection
