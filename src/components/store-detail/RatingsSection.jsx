import { Star } from 'lucide-react'
import { RATING_LABELS, RATING_KEYS } from '../../constants/theme'

function RatingBar({ label, score }) {
  const maxScore = 5
  const percentage = (score / maxScore) * 100

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-tgtg-text-secondary w-16 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-2 bg-tgtg-gray-bg rounded-full overflow-hidden">
        <div
          className="h-full bg-tgtg-rating-bar rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-tgtg-text font-medium w-8 text-right shrink-0">
        {score.toFixed(1)}
      </span>
    </div>
  )
}

function RatingsSection({ store }) {
  const ratings = store.ratings || {}

  return (
    <section className="px-4 py-4 border-t border-tgtg-border" aria-label="Overall experience">
      <h2 className="font-bold text-base text-tgtg-text mb-1">
        Overall experience
      </h2>
      <p className="text-sm text-tgtg-text-secondary mb-4">
        Based on {store.reviewCount} recent reviews
      </p>

      {/* Large rating badge */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1 bg-tgtg-star text-white px-3 py-1.5 rounded-lg">
          <Star size={16} className="fill-white text-white" />
          <span className="font-bold text-base">{store.rating}</span>
        </div>
      </div>

      {/* Rating bars */}
      <div className="flex flex-col gap-3">
        {RATING_KEYS.map((key, index) => {
          const score = ratings[key]
          if (score == null) return null

          return (
            <RatingBar
              key={key}
              label={RATING_LABELS[index]}
              score={score}
            />
          )
        })}
      </div>
    </section>
  )
}

export default RatingsSection
