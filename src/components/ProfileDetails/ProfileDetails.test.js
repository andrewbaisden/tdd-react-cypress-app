import { screen, render } from '@testing-library/react';

import ProfileDetails from './ProfileDetails';

describe('<ProfileDetails />', () => {
	it('has a gender select heading', () => {
		render(<ProfileDetails />);

		const el = screen.getByText(/Select your gender/i);

		expect(el).toBeTruthy();
	});
});
