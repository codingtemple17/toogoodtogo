import { useState } from 'react'
import { CATEGORIES } from '../../constants/theme'

function CategoryPills() {
  const [activeKey, setActiveKey] = useState('all')

  function handlePillClick(key) {
    setActiveKey(key)
  }

  return (
    <div
      className="flex gap-2 px-4 py-2 overflow-x-auto hide-scrollbar"
      role="tablist"
      aria-label="Category filters"
    >
      {CATEGORIES.map((cat) => {
        const isActive = activeKey === cat.key

        return (
          <button
            key={cat.key}
            role="tab"
            aria-selected={isActive}
            onClick={() => handlePillClick(cat.key)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors shrink-0 cursor-pointer ${
              isActive
                ? 'bg-tgtg-primary text-white border-tgtg-primary'
                : 'bg-tgtg-gray-bg text-tgtg-text border-tgtg-border hover:bg-tgtg-border'
            }`}
          >
            {cat.label}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryPills
