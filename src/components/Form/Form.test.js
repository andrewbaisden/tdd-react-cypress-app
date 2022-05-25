import { render, screen } from '@testing-library/react';

import Form from './Form';

describe('<Form />', () => {
	it('has a first name label', () => {
		render(<Form />);

		const el = screen.getByTestId('firstname');

		expect(el.innerHTML).toBe('First Name');
	});

	it('has a last name label', () => {
		render(<Form />);

		const el = screen.getByTestId('lastname');

		expect(el.innerHTML).toBe('Last Name');
	});

	it('has a email label', () => {
		render(<Form />);

		const el = screen.getByTestId('email');

		expect(el.innerHTML).toBe('Email');
	});

	it('has a career label', () => {
		render(<Form />);

		const el = screen.getByTestId('career');

		expect(el.innerHTML).toBe('Career');
	});

	it('has a bio label', () => {
		render(<Form />);

		const el = screen.getByTestId('bio');

		expect(el.innerHTML).toBe('Bio');
	});
});
