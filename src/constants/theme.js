// Brand colors — match TGTG app exactly
export const COLORS = {
  primary: '#004C45',
  accent: '#00635B',
  star: '#1F8B7E',
  ratingBar: '#3BB8A8',
  availabilityBg: '#FFF8DC',
  bg: '#FFFFFF',
  grayBg: '#F5F5F5',
  text: '#1A1A1A',
  textSecondary: '#6B6B6B',
  textMuted: '#999999',
  border: '#E8E8E8',
  desktopBg: '#F0F0F0',
}

// Typography
export const FONT_FAMILY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"

export const FONT_SIZES = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '24px',
}

// Spacing
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  xxl: '24px',
  xxxl: '32px',
}

// Layout
export const LAYOUT = {
  containerMaxWidth: '480px',
  bottomNavHeight: '64px',
  stickyFooterHeight: '72px',
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    full: '9999px',
  },
}

// Category labels
export const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'meals', label: 'Meals' },
  { key: 'bread', label: 'Bread & pastries' },
  { key: 'groceries', label: 'Groceries' },
  { key: 'flowers', label: 'Flowers' },
  { key: 'other', label: 'Other' },
]

// Section titles
export const SECTION_TITLES = {
  topPicks: 'Top picks near you',
  localHeroes: 'Local Heroes',
}

// Location bar
export const LOCATION = {
  label: 'Current location',
  area: 'Court Square, New York',
}

// Card dimensions
export const CARD = {
  width: '280px',
  imageHeight: '200px',
  logoSize: '40px',
  gap: '12px',
}

// Store detail
export const HERO_IMAGE_HEIGHT = '300px'
export const STORE_LOGO_SIZE = '48px'

// Rating labels and keys
export const RATING_LABELS = ['Pickup', 'Quality', 'Variety', 'Quantity']
export const RATING_KEYS = ['pickup', 'quality', 'variety', 'quantity']

// Category display names (for tag pills on detail page)
export const CATEGORY_DISPLAY = {
  meals: 'Meal',
  bread: 'Baked Goods',
  groceries: 'Grocery',
  flowers: 'Flowers',
  other: 'Other',
}

// Static text
export const PICKUP_INSTRUCTIONS_TEXT = 'Show your order in the app to a staff member to pick up your Surprise Bag.'
export const ALLERGENS_TEXT = "We wish we could tell you what exactly will be in your Surprise Bag – but it's always a surprise! The store will fill it with a selection of their unsold items. If you have questions about allergens or specific ingredients, please ask the store."
export const BRING_BAG_TEXT = 'We recommend bringing your own bag.'

// Bottom nav tabs
export const NAV_TABS = [
  { key: 'discover', label: 'Discover' },
  { key: 'browse', label: 'Browse' },
  { key: 'favorites', label: 'Favorites' },
  { key: 'profile', label: 'Profile' },
]
