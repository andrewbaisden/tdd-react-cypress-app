import { screen, render } from '@testing-library/react';

import Header from './Header';

describe('<Header />', () => {
	it('has a title h1', () => {
		render(<Header />);

		const el = screen.getByTestId('info');

		expect(el.innerHTML).toBe('Information');
	});

	it('has a notification div', () => {
		render(<Header />);

		const el = screen.getByRole('alert');
	});

	it('has a confirm button', () => {
		render(<Header />);

		const el = screen.getByTestId('confirm-btn');

		expect(el.innerHTML).toBe('Confirm');
	});
});
