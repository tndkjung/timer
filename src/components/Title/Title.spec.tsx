import { render, screen } from '@testing-library/react'
import { Title } from './Title'


test('render title with label', () => {
    render(<Title label="My Custom Timer"/>)
    const titleText = screen.getByText("My Custom Timer")
    expect(titleText).toBeInTheDocument()
})

test('render title without label', () => {
    render(<Title />)
    const titleText = screen.getByText("Timer Title")
    expect(titleText).toBeInTheDocument()
})