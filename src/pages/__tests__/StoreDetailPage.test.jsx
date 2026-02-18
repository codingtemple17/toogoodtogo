import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import StoreDetailPage from '../StoreDetailPage'
import AppLayout from '../../components/layout/AppLayout'

function renderStoreDetailPage(storeId = 1) {
  return render(
    <MemoryRouter initialEntries={[`/store/${storeId}`]}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/store/:id" element={<StoreDetailPage />} />
          <Route path="*" element={<div data-testid="not-found">404</div>} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
}

describe('StoreDetailPage - Allergens Integration', () => {
  it('store detail page renders the allergens section', () => {
    renderStoreDetailPage(1)
    expect(screen.getByLabelText('Ingredients and allergens')).toBeInTheDocument()
  })

  it('clicking allergens toggle does not navigate away from the page', async () => {
    const user = userEvent.setup()
    renderStoreDetailPage(1)

    const allergensSection = screen.getByLabelText('Ingredients and allergens')
    const toggle = within(allergensSection).getByRole('button')
    await user.click(toggle)

    // Should still be on store detail page, not 404
    expect(screen.queryByTestId('not-found')).not.toBeInTheDocument()
    expect(screen.getByText("Joe's Pizza")).toBeInTheDocument()
  })

  it('the Reserve button and sticky footer are still visible after toggling allergens', async () => {
    const user = userEvent.setup()
    renderStoreDetailPage(1)

    const allergensSection = screen.getByLabelText('Ingredients and allergens')
    const toggle = within(allergensSection).getByRole('button')
    await user.click(toggle)

    expect(screen.getByRole('button', { name: /reserve/i })).toBeInTheDocument()
  })
})
