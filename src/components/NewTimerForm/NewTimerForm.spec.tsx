import { render, screen, within, waitFor } from '@testing-library/react'
import { NewTimerForm } from "./NewTimerForm"
import userEvent from '@testing-library/user-event'

describe('NewTimerForm', () => {
    const user = userEvent.setup();

    beforeEach(() => {
        render(<NewTimerForm setTimer={jest.fn()} />);
    });

    it('renders title', () => {
        expect(screen.getByText('New Timer')).toBeInTheDocument();
    });

    it('renders label textbox', () => {
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders time setter with incrementing and decrementing hours with min=0', async () => {
        const hourSection = screen.getByTestId('hourSection');
        const hourQueries = within(hourSection);
        expect(hourQueries.getByRole('button', { name: '+'})).toBeInTheDocument();
        expect(hourQueries.getByText(/0 hour\(s\)/i)).toBeInTheDocument();
        await user.click(hourQueries.getByRole('button', { name: '+'}));
        await waitFor(() => expect(hourQueries.getByText(/1 hour\(s\)/i)).toBeInTheDocument());
        expect(hourQueries.getByRole('button', { name: '-'})).toBeInTheDocument();
        await user.click(hourQueries.getByRole('button', { name: '-'}));
        await waitFor(() => expect(hourQueries.getByText(/0 hour\(s\)/i)).toBeInTheDocument());
        await user.click(hourQueries.getByRole('button', { name: '-'}));
        await waitFor(() => expect(hourQueries.getByText(/0 hour\(s\)/i)).toBeInTheDocument());
    });

    it('renders time setter with incrementing and decrementing minutes with min=0 and max=59', async () => {
        const minuteSection = screen.getByTestId('minuteSection');
        const minuteQueries = within(minuteSection);
        expect(minuteQueries.getByRole('button', { name: '+'})).toBeInTheDocument();
        expect(minuteQueries.getByText(/0 minute\(s\)/i)).toBeInTheDocument();
        await user.click(minuteQueries.getByRole('button', { name: '+'}));
        await waitFor(() => expect(minuteQueries.getByText(/1 minute\(s\)/i)).toBeInTheDocument());
        expect(minuteQueries.getByRole('button', { name: '-'})).toBeInTheDocument();
        await user.click(minuteQueries.getByRole('button', { name: '-'}));
        await waitFor(() => expect(minuteQueries.getByText(/0 minute\(s\)/i)).toBeInTheDocument());
        for (let i=0; i < 60; i++) {
            await user.click(minuteQueries.getByRole('button', { name: '+'}))
        };
        await waitFor(() => expect(minuteQueries.getByText(/59 minute\(s\)/i)).toBeInTheDocument());
        await user.click(minuteQueries.getByRole('button', { name: '+'}));
        await waitFor(() => expect(minuteQueries.getByText(/59 minute\(s\)/i)).toBeInTheDocument());
    });

    it('renders time setter with incrementing and decrementing sec unit with min=0 and max=59', async () => {
        const secondSection = screen.getByTestId('secondSection');
        const secondQueries = within(secondSection);
        expect(secondQueries.getByRole('button', { name: '+'})).toBeInTheDocument();
        expect(secondQueries.getByText(/0 second\(s\)/i)).toBeInTheDocument();
        await user.click(secondQueries.getByRole('button', { name: '+'}));
        await waitFor(() => expect(secondQueries.getByText(/1 second\(s\)/i)).toBeInTheDocument());
        expect(secondQueries.getByRole('button', { name: '-'})).toBeInTheDocument();
        await user.click(secondQueries.getByRole('button', { name: '-'}));
        await waitFor(() => expect(secondQueries.getByText(/0 second\(s\)/i)).toBeInTheDocument());
        for (let i=0; i < 60; i++) {
            await user.click(secondQueries.getByRole('button', { name: '+'}))
        };
        await waitFor(() => expect(secondQueries.getByText(/59 second\(s\)/i)).toBeInTheDocument());
        await user.click(secondQueries.getByRole('button', { name: '+'}));
        await waitFor(() => expect(secondQueries.getByText(/59 second\(s\)/i)).toBeInTheDocument());
    });

    it('renders start timer button', () => {
        expect(screen.getByRole('button', { name: /start timer/i})).toBeInTheDocument();
    })
})