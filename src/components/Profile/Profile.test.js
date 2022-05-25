import { screen, render } from '@testing-library/react';

import Profile from './Profile';

describe('<Profile />', () => {
	it('has a heading', () => {
		render(<Profile />);

		const el = screen.getByText(/User Profile/i);

		expect(el).toBeTruthy();
	});
});
