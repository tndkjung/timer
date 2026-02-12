import userEvent from "@testing-library/user-event";
import { Main } from './Main'
import { render, screen, waitFor } from '@testing-library/react'

describe('Main', () => {
    const user = userEvent.setup();

    beforeEach(() => 
        render(<Main />)
    );

    it('renders new timer when start timer button is pressed', async () => {
        expect(screen.queryByText('My New Timer')).toBeNull();
        await user.type(screen.getByRole('textbox'), 'My New Timer')
        await user.click(screen.getByRole('button', { name: /start timer/i }));
        await waitFor(() => expect(screen.getByText('My New Timer')).toBeInTheDocument());
    });

    it('deletes timer when delete icon is pressed', async () => {
        const initialDeleteCount = screen.getAllByRole('button', { name: 'delete' }).length;
        await user.click(screen.getAllByRole('button', { name: 'delete' })[0]);
        await waitFor(() => expect(screen.getAllByRole('button', { name: 'delete' }).length).toBe(initialDeleteCount - 1))
    })
})