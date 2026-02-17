import { PICKUP_INSTRUCTIONS_TEXT } from '../../constants/theme'

function PickupInstructions() {
  return (
    <section className="px-4 py-4 border-t border-tgtg-border" aria-label="Pick-up instructions">
      <h2 className="font-bold text-base text-tgtg-text mb-2">
        Pick-up instructions
      </h2>
      <p className="text-sm text-tgtg-text-secondary leading-relaxed">
        {PICKUP_INSTRUCTIONS_TEXT}
      </p>
    </section>
  )
}

export default PickupInstructions
