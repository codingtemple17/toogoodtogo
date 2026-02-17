import { CATEGORY_DISPLAY } from '../../constants/theme'

function AboutBag({ store }) {
  const categoryLabel = CATEGORY_DISPLAY[store.category] || store.category

  return (
    <section className="px-4 py-4 border-t border-tgtg-border" aria-label="About this Surprise Bag">
      <h2 className="font-bold text-base text-tgtg-text mb-2">
        About this Surprise Bag
      </h2>
      <p className="text-sm text-tgtg-text-secondary leading-relaxed mb-3">
        {store.description}
      </p>
      <span className="inline-block bg-tgtg-gray-bg text-tgtg-text text-xs font-medium px-3 py-1.5 rounded-full">
        {categoryLabel}
      </span>
    </section>
  )
}

export default AboutBag
