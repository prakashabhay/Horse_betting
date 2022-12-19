import { render, screen  } from "@testing-library/react"
//import userEvent from '@testing-library/user-event'
import GameTypeSelection from './GameTypeSelection'

const setGameType = jest.fn()

it('should show option length', () => {
    render(<GameTypeSelection selectGameType={setGameType} />)
    expect(screen.getAllByRole('option').length).toBe(4)
  })