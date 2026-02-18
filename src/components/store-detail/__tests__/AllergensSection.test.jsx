import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import AllergensSection from '../AllergensSection'

const mockStore = {
  id: 1,
  name: "Joe's Pizza",
  dietarySymbols: [],
}

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('AllergensSection', () => {
  it('renders the Ingredients & allergens header text', () => {
    renderWithRouter(<AllergensSection store={mockStore} />)
    expect(screen.getByText('Ingredients & allergens')).toBeInTheDocument()
  })

  it('allergen content is hidden by default when collapsed', () => {
    renderWithRouter(<AllergensSection store={mockStore} />)
    expect(screen.queryByText(/We wish we could tell you/)).not.toBeInTheDocument()
  })

  it('clicking the header toggles the content to visible', async () => {
    const user = userEvent.setup()
    renderWithRouter(<AllergensSection store={mockStore} />)

    await user.click(screen.getByRole('button', { name: /ingredients/i }))
    expect(screen.getByText(/We wish we could tell you/)).toBeInTheDocument()
  })

  it('clicking the header again collapses the content back', async () => {
    const user = userEvent.setup()
    renderWithRouter(<AllergensSection store={mockStore} />)

    const toggle = screen.getByRole('button', { name: /ingredients/i })
    await user.click(toggle)
    expect(screen.getByText(/We wish we could tell you/)).toBeInTheDocument()

    await user.click(toggle)
    expect(screen.queryByText(/We wish we could tell you/)).not.toBeInTheDocument()
  })

  it('clicking the toggle does NOT trigger any navigation', async () => {
    const user = userEvent.setup()
    let navigated = false

    render(
      <MemoryRouter initialEntries={['/store/1']}>
        <AllergensSection store={mockStore} />
      </MemoryRouter>
    )

    const initialUrl = window.location.href
    await user.click(screen.getByRole('button', { name: /ingredients/i }))
    expect(window.location.href).toBe(initialUrl)
  })

  it('the chevron icon rotates when expanded', async () => {
    const user = userEvent.setup()
    renderWithRouter(<AllergensSection store={mockStore} />)

    const toggle = screen.getByRole('button', { name: /ingredients/i })
    const chevron = toggle.querySelector('svg')

    expect(chevron.getAttribute('class')).not.toContain('rotate-180')

    await user.click(toggle)
    expect(chevron.getAttribute('class')).toContain('rotate-180')
  })
})
